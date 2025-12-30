import React, { useRef, useEffect } from "react";
import Stats from "stats.js";
import type { SceneParameters } from "../scene-form/scene-form";
import {
  type CameraState,
  createScene,
  type SceneSetup,
} from "../../layouts/main-scene/scene-initiation";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
  parameters?: SceneParameters;
  onCameraStateChange?: (cameraState: CameraState) => void;
  currentCameraState?: CameraState;
}

// Vertex Shader
const vertexShader = `
  uniform float uTime;
  uniform float uGridWidth;
  uniform float uGridHeight;
  uniform float uNodeCount;
  uniform float uNodeSpeed;
  uniform float uNodeStrength;
  uniform float uNodePulse;
  
  // Instance attributes
  attribute vec3 instanceOffset;
  attribute vec2 instanceUv; // Store grid coord (ix, iy) here

  varying vec2 vUv;
  varying vec3 vPos;
  varying float vDistortion;

  // Simplex Noise (optional, or just use sin/cos for nodes)
  // We'll simulate "nodes" as moving points in space
  
  vec3 getNodePos(float i) {
    float t = uTime * uNodeSpeed * 0.5 + i * 10.0;
    // Nodes move in a large volume
    return vec3(
      sin(t * 0.7) * uGridWidth * 0.5,
      cos(t * 0.5) * uGridHeight * 0.5,
      sin(t * 1.1) * 5.0
    );
  }

  void main() {
    vUv = uv;
    vec3 pos = position + instanceOffset; // Local pos + offset
    vec3 finalPos = pos;
    
    // Node Influence
    float totalDistortion = 0.0;
    
    for(float i = 0.0; i < 20.0; i++) {
        if (i >= uNodeCount) break;
        
        vec3 nodePos = getNodePos(i);
        float dist = distance(pos, nodePos);
        
        // Influence strength drops with distance
        // "Twisted around nodes"
        
        float influence = smoothstep(8.0 + uNodePulse * 2.0 * sin(uTime + i), 0.0, dist);
        
        // Apply twist/pull
        // Rotate around Z based on influence
        float angle = influence * uNodeStrength * (1.0 + uNodePulse * sin(uTime * 2.0));
        
        float s = sin(angle);
        float c = cos(angle);
        
        // Rotate around node center? Or just simple twist
        // Let's rotate the difference vector
        vec3 delta = finalPos - nodePos;
        
        // 2D rotation for Z twist, 3D is harder to control without looking messy
        // Let's try a 3D curl or just pull towards node
        
        // Simple attractor/repulsor with twist
        // Move towards node
        // finalPos += normalize(delta) * influence * 2.0 * sin(uTime); 
        
        // Z-displacement (wave)
        finalPos.z += influence * 5.0 * sin(dist * 0.8 - uTime * 2.0) * uNodeStrength;
        
        totalDistortion += influence;
    }
    
    vPos = finalPos;
    vDistortion = totalDistortion;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  uniform float uTime;
  uniform float uLineThickness;
  uniform vec3 uColor;

  varying vec2 vUv;
  varying float vDistortion;

  void main() {
    // Standard UV 0..1
    vec2 uv = vUv;
    
    // Line Thickness from uniform (used for both border and ring)
    float thickness = uLineThickness;

    // Borders
    // Draw a thin line at the edges
    vec2 border = step(vec2(thickness), uv) * step(uv, vec2(1.0 - thickness));
    float isContent = border.x * border.y;
    float isBorder = 1.0 - isContent;

    // Quarter Ring calculation
    float dist = length(uv);
    float radius = 1.0; 
    
    // Make the ring consistent width
    float shape = 1.0 - smoothstep(thickness, thickness + 0.01, abs(dist - radius + thickness/2.0));
    
    // Combine Border and Ring
    float alpha = max(isBorder, shape);
    
    vec3 color = uColor;
    // Add blueish glow on distortion
    color += vec3(0.2, 0.5, 1.0) * vDistortion * 0.5;

    if (alpha < 0.1) discard;

    gl_FragColor = vec4(color, alpha);
  }
`;

export const ThreeScene: React.FC<ThreeSceneProps> = ({
  className,
  parameters,
  onCameraStateChange,
  currentCameraState,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneSetupRef = useRef<SceneSetup | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const statsRef = useRef<Stats | null>(null);
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const uniformsRef = useRef<any>(null);

  // Initialize Scene
  useEffect(() => {
    if (!containerRef.current) return;

    sceneSetupRef.current = createScene(containerRef.current);

    // Stats
    statsRef.current = new Stats();
    statsRef.current.showPanel(0); // 0: fps, 1: ms
    containerRef.current.appendChild(statsRef.current.dom);
    statsRef.current.dom.style.position = "absolute";
    statsRef.current.dom.style.top = "0px";
    statsRef.current.dom.style.left = "0px";

    const animate = () => {
      if (sceneSetupRef.current) {
        statsRef.current?.begin();

        // Update Uniforms
        if (uniformsRef.current) {
          uniformsRef.current.uTime.value = performance.now() / 1000;
        }

        sceneSetupRef.current.animate();
        statsRef.current?.end();
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Standard resize handling (same as before)
    const handleResize = () => {
      if (sceneSetupRef.current && containerRef.current) {
        const { camera, renderer } = sceneSetupRef.current;
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      }
    };
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (sceneSetupRef.current) sceneSetupRef.current.cleanup();
      resizeObserver.disconnect();
      if (statsRef.current)
        containerRef.current?.removeChild(statsRef.current.dom);
    };
  }, []);

  // Update Geometry (InstancedMesh)
  useEffect(() => {
    if (!sceneSetupRef.current) return;
    const scene = sceneSetupRef.current.scene;

    // Dispose old mesh
    if (meshRef.current) {
      scene.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      (meshRef.current.material as THREE.Material).dispose();
    }

    const width = parameters?.gridWidth ?? 20;
    const height = parameters?.gridHeight ?? 20;
    const count = width * height;

    // Geometry for a single square
    const geometry = new THREE.PlaneGeometry(1, 1);

    // Shader Material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uGridWidth: { value: width },
        uGridHeight: { value: height },
        uColor: { value: new THREE.Color(0x00ff99) },
        uLineThickness: { value: parameters?.lineThickness ?? 0.02 }, // Default thinner
        uNodeCount: { value: parameters?.nodeCount ?? 3 },
        uNodeSpeed: { value: parameters?.nodeSpeed ?? 0.5 },
        uNodeStrength: { value: parameters?.nodeStrength ?? 1.0 },
        uNodePulse: { value: parameters?.nodePulse ?? 0.5 },
      },
      transparent: true,
      side: THREE.DoubleSide,
      // depthWrite: false, // Maybe needed for transparency overlap?
    });

    uniformsRef.current = material.uniforms;

    // Instanced Mesh
    const mesh = new THREE.InstancedMesh(geometry, material, count);

    // Initialize Instanced Attributes
    // We need offsets to position them in a grid
    const offsets = new Float32Array(count * 3);

    // Make them connected: spacing = size = 1.0
    const cellSize = 1.0;

    for (let iy = 0; iy < height; iy++) {
      for (let ix = 0; ix < width; ix++) {
        const i = iy * width + ix;

        // Centered Grid
        const x = (ix - width / 2) * cellSize + cellSize / 2;
        const y = (iy - height / 2) * cellSize + cellSize / 2;
        const z = 0;

        offsets[i * 3 + 0] = x;
        offsets[i * 3 + 1] = y;
        offsets[i * 3 + 2] = z;

        // Set dummy matrix (identity) because we use GLSL to position
        const dummy = new THREE.Object3D();
        dummy.position.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
    }

    geometry.setAttribute(
      "instanceOffset",
      new THREE.InstancedBufferAttribute(offsets, 3)
    );

    mesh.instanceMatrix.needsUpdate = true;

    scene.add(mesh);
    meshRef.current = mesh;
  }, [
    parameters?.gridWidth,
    parameters?.gridHeight,
    // Re-create mesh on grid size change
    // Other parameters are uniforms, updated below
  ]);

  // Update Uniforms without re-creating mesh
  useEffect(() => {
    if (uniformsRef.current && parameters) {
      uniformsRef.current.uLineThickness.value = parameters.lineThickness;
      uniformsRef.current.uNodeCount.value = parameters.nodeCount;
      uniformsRef.current.uNodeSpeed.value = parameters.nodeSpeed;
      uniformsRef.current.uNodeStrength.value = parameters.nodeStrength;
      uniformsRef.current.uNodePulse.value = parameters.nodePulse;
    }
  }, [
    parameters?.lineThickness,
    parameters?.nodeCount,
    parameters?.nodeSpeed,
    parameters?.nodeStrength,
    parameters?.nodePulse,
  ]);

  // Sync Camera
  useEffect(() => {
    if (sceneSetupRef.current && currentCameraState) {
      sceneSetupRef.current.setCameraState(currentCameraState);
    }
  }, [currentCameraState]);

  // Read Camera
  useEffect(() => {
    if (!sceneSetupRef.current || !onCameraStateChange) return;
    const interval = setInterval(() => {
      if (sceneSetupRef.current) {
        onCameraStateChange(sceneSetupRef.current.getCameraState());
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onCameraStateChange]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Overlay logic could go here */}
    </div>
  );
};
