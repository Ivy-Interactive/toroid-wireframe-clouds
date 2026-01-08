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

// Vertex Shader - Grid with GPU Attractor Deformation
const vertexShader = `
  uniform float uTime;
  uniform float uGridWidth;
  uniform float uGridHeight;
  uniform vec2 uParamsA;  // (a, b) parameters for De Jong
  uniform vec2 uParamsB;  // (c, d) parameters for De Jong
  uniform float uAttractorStrength; // How strong the deformation is
  uniform float uAttractorSpeed; // Animation speed

  varying vec2 vUv;
  varying vec3 vPos;
  varying float vDistortion;

  // De Jong Attractor Flow Field for Plane Deformation
  // Uses the standard De Jong formula:
  // x_{t+1} = sin(a * y_t) - cos(b * x_t)
  // y_{t+1} = sin(c * x_t) - cos(d * y_t)
  // For plane deformation, we use this as a flow field (velocity vector at each point)
  vec2 getAttractorFlowField(vec2 pos, float time) {
    // Normalize position to attractor space
    float scale = 0.1;
    float x = pos.x * scale;
    float y = pos.y * scale;
    
    // Standard De Jong Attractor formula
    // This computes the next position, which we use as flow direction
    float flowX = sin(uParamsA.x * y) - cos(uParamsA.y * x);
    float flowY = sin(uParamsB.x * x) - cos(uParamsB.y * y);
    
    // Add time-based animation by rotating the flow field
    // This creates smooth, organic movement
    float angle = time * 0.3;
    float cosA = cos(angle);
    float sinA = sin(angle);
    vec2 rotatedFlow = vec2(
      flowX * cosA - flowY * sinA,
      flowX * sinA + flowY * cosA
    );
    
    // Add multi-scale flow for richer patterns
    float scale2 = scale * 1.8;
    float x2 = pos.x * scale2;
    float y2 = pos.y * scale2;
    float flowX2 = sin(uParamsA.x * y2) - cos(uParamsA.y * x2);
    float flowY2 = sin(uParamsB.x * x2) - cos(uParamsB.y * y2);
    
    // Blend scales for smoother, more organic flow
    vec2 flow = rotatedFlow * 0.75 + vec2(flowX2, flowY2) * 0.25;
    
    // Return scaled flow direction
    return flow * uAttractorStrength;
  }

  // Calculate Z deformation based on position and flow field
  // This creates a more pronounced 3D effect
  float getZDeformation(vec2 pos, vec2 flow, float time) {
    // Use the flow magnitude as base
    float flowMag = length(flow);
    
    // Add position-based Z deformation using attractor formula directly
    float scale = 0.15;
    float x = pos.x * scale;
    float y = pos.y * scale;
    
    // Create Z deformation using attractor pattern
    float z1 = sin(uParamsA.x * y + time * 0.5) - cos(uParamsA.y * x + time * 0.3);
    float z2 = sin(uParamsB.x * x + time * 0.4) - cos(uParamsB.y * y + time * 0.6);
    
    // Combine Z components
    float zDeform = (z1 + z2) * 0.5;
    
    // Combine flow-based and position-based Z deformation
    float z = flowMag * 2.0 + zDeform * 3.0;
    
    return z;
  }

  void main() {
    vUv = uv;
    
    // Base position: vertex position in world space (before deformation)
    vec3 basePos = position;
    
    // Get world position for attractor calculation (use actual vertex position)
    // This ensures connected squares deform together smoothly
    vec2 worldPos = vec2(basePos.x, basePos.y);
    
    // Calculate attractor flow field deformation for this specific vertex
    // Each vertex deforms based on its position, keeping the grid connected
    float time = uTime * uAttractorSpeed;
    vec2 flow = getAttractorFlowField(worldPos, time);
    
    // Calculate Z deformation for pronounced 3D effect
    float zDeform = getZDeformation(worldPos, flow, time);
    
    // Apply flow field deformation to this vertex
    // This ensures connected squares "stretch" together as a continuous mesh
    float flowMag = length(flow);
    
    // Deform the vertex position - each vertex deforms based on its world position
    // This keeps squares connected and allows them to "stretch" together in 3D
    vec3 finalPos = vec3(
      basePos.x + flow.x,
      basePos.y + flow.y,
      basePos.z + zDeform // Add pronounced Z depth for true 3D deformation
    );
    
    // Calculate distortion intensity for coloring
    float dist = flowMag;
    vDistortion = dist;
    vPos = finalPos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
  }
`;

// Fragment Shader - Grid with borders and ring
const fragmentShader = `
  uniform float uTime;
  uniform float uLineThickness;
  uniform vec3 uColor;
  uniform float uGridWidth;
  uniform float uGridHeight;

  varying vec2 vUv;
  varying float vDistortion;

  void main() {
    // Standard UV 0..1
    vec2 uv = vUv;
    
    // Repeat UVs per grid cell so borders/rings tile seamlessly
    vec2 cellUV = fract(uv * vec2(uGridWidth, uGridHeight));
    
    // Line Thickness from uniform
    float thickness = uLineThickness;

    // Borders
    vec2 border = step(vec2(thickness), cellUV) * step(cellUV, vec2(1.0 - thickness));
    float isContent = border.x * border.y;
    float isBorder = 1.0 - isContent;

    // Quarter Ring calculation
    float dist = length(cellUV);
    float radius = 1.0; 
    
    // Make the ring consistent width
    float shape = 1.0 - smoothstep(thickness, thickness + 0.01, abs(dist - radius + thickness/2.0));
    
    // Combine Border and Ring
    float alpha = max(isBorder, shape);
    
    // Color #00D18E = rgb(0, 209, 142)
    vec3 color = vec3(0.0/255.0, 209.0/255.0, 142.0/255.0);

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
  const meshRef = useRef<THREE.Mesh | null>(null);
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

  // Update Geometry (single PlaneGeometry grid with shared vertices)
  useEffect(() => {
    if (!sceneSetupRef.current) return;
    const scene = sceneSetupRef.current.scene;

    // Dispose old mesh
    if (meshRef.current) {
      scene.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      (meshRef.current.material as THREE.Material).dispose();
    }

    // Grid deformation mode
    const width = parameters?.gridWidth ?? 40;
    const height = parameters?.gridHeight ?? 40;
    const segmentsX = Math.max(1, Math.floor(width * 12));
    const segmentsY = Math.max(1, Math.floor(height * 12));
    const geometry = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);

    // Shader Material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uGridWidth: { value: width },
        uGridHeight: { value: height },
        uColor: { value: new THREE.Color(0x00d18e) },
        uLineThickness: { value: parameters?.lineThickness ?? 0.02 },
        uParamsA: { 
          value: new THREE.Vector2(
            parameters?.paramA ?? 1.4, 
            parameters?.paramB ?? -1.55
          ) 
        },
        uParamsB: { 
          value: new THREE.Vector2(
            parameters?.paramC ?? 1.25, 
            parameters?.paramD ?? 1.35
          ) 
        },
        uAttractorStrength: { value: parameters?.attractorStrength ?? 8.50 },
        uAttractorSpeed: { value: parameters?.attractorSpeed ?? 0.25 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });

    uniformsRef.current = material.uniforms;

    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    meshRef.current = mesh;
  }, [
    parameters?.visualizationMode,
    parameters?.gridWidth,
    parameters?.gridHeight,
    parameters?.paramA,
    parameters?.paramB,
    parameters?.paramC,
    parameters?.paramD,
  ]);

  // Update Uniforms without re-creating mesh (only for grid deformation mode)
  useEffect(() => {
    if (uniformsRef.current && parameters && parameters.visualizationMode === "grid-deformation") {
      uniformsRef.current.uLineThickness.value = parameters.lineThickness ?? 0.02;
      if (parameters.paramA !== undefined && parameters.paramB !== undefined) {
        uniformsRef.current.uParamsA.value.set(parameters.paramA, parameters.paramB);
      }
      if (parameters.paramC !== undefined && parameters.paramD !== undefined) {
        uniformsRef.current.uParamsB.value.set(parameters.paramC, parameters.paramD);
      }
      if (parameters.attractorStrength !== undefined) {
        uniformsRef.current.uAttractorStrength.value = parameters.attractorStrength;
      }
      if (parameters.attractorSpeed !== undefined) {
        uniformsRef.current.uAttractorSpeed.value = parameters.attractorSpeed;
      }
    }
  }, [
    parameters?.visualizationMode,
    parameters?.lineThickness,
    parameters?.paramA,
    parameters?.paramB,
    parameters?.paramC,
    parameters?.paramD,
    parameters?.attractorStrength,
    parameters?.attractorSpeed,
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
