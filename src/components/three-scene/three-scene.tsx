import React, { useEffect, useRef, useState } from "react";
import { createScene } from "../../layouts/main-scene";
import type { SceneSetup } from "../../layouts/main-scene";
import { StatsOverlay } from "../stats-overlay";
import { DrawCallsOverlay } from "../draw-calls-overlay";
import Stats from "stats.js";
import type { SceneParameters, CameraState } from "../scene-form";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
  parameters?: SceneParameters;
  onCameraStateChange?: (cameraState: CameraState) => void;
  currentCameraState?: CameraState;
}

// Minimal 2D Perlin noise implementation
function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}
function grad(hash: number, x: number, y: number) {
  const h = hash & 3;
  const u = h < 2 ? x : y;
  const v = h < 2 ? y : x;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}
const perm = new Uint8Array(512);
for (let i = 0; i < 256; i++) perm[i] = i;
for (let i = 0; i < 256; i++) {
  const j = (Math.random() * 256) | 0;
  [perm[i], perm[j]] = [perm[j], perm[i]];
}
for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
function perlin2(x: number, y: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  const u = fade(x);
  const v = fade(y);
  const aa = perm[X + perm[Y]];
  const ab = perm[X + perm[Y + 1]];
  const ba = perm[X + 1 + perm[Y]];
  const bb = perm[X + 1 + perm[Y + 1]];
  return lerp(
    lerp(grad(aa, x, y), grad(ba, x - 1, y), u),
    lerp(grad(ab, x, y - 1), grad(bb, x - 1, y - 1), u),
    v
  );
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({
  className,
  parameters,
  onCameraStateChange,
  currentCameraState,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneSetupRef = useRef<SceneSetup | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [drawCalls, setDrawCalls] = useState(0);
  const statsRef = useRef<Stats | null>(null);
  const gridGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the Three.js scene
    sceneSetupRef.current = createScene(containerRef.current);

    // Start animation loop
    const animate = () => {
      if (sceneSetupRef.current) {
        statsRef.current?.begin();
        sceneSetupRef.current.animate();
        setDrawCalls(sceneSetupRef.current.renderer.info.render.calls);
        statsRef.current?.end();
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (sceneSetupRef.current && containerRef.current) {
        const { camera, renderer } = sceneSetupRef.current;
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        const canvas = renderer.domElement;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.maxWidth = `${width}px`;
        canvas.style.maxHeight = `${height}px`;
        canvas.style.minWidth = `${width}px`;
        canvas.style.minHeight = `${height}px`;
        renderer.render(sceneSetupRef.current.scene, camera);
      }
    };
    handleResize();
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 16);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (sceneSetupRef.current) {
        sceneSetupRef.current.cleanup();
      }
      window.removeEventListener("resize", debouncedResize);
      resizeObserver.disconnect();
    };
  }, []);

  // Handle camera state changes
  useEffect(() => {
    if (sceneSetupRef.current && currentCameraState) {
      sceneSetupRef.current.setCameraState(currentCameraState);
    }
  }, [currentCameraState]);

  // Extract camera state periodically and notify parent
  useEffect(() => {
    if (!sceneSetupRef.current || !onCameraStateChange) return;

    const interval = setInterval(() => {
      if (sceneSetupRef.current) {
        const cameraState = sceneSetupRef.current.getCameraState();
        onCameraStateChange(cameraState);
      }
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, [onCameraStateChange]);

  // Unified grid mesh generation
  useEffect(() => {
    if (!sceneSetupRef.current) return;
    const scene = sceneSetupRef.current.scene;
    // Remove old group if exists
    if (gridGroupRef.current) {
      scene.remove(gridGroupRef.current);
      gridGroupRef.current.children.forEach((child: THREE.Object3D) => {
        if ('geometry' in child && child.geometry) (child.geometry as THREE.BufferGeometry).dispose();
        if ('material' in child && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m: THREE.Material) => m.dispose());
          } else {
            (child.material as THREE.Material).dispose();
          }
        }
      });
    }
    // Unified grid mesh generation
    const width = parameters?.gridWidth ?? 1;
    const height = parameters?.gridHeight ?? 1;
    const twistX = (parameters?.twistX ?? 0) * Math.PI / 180;
    const twistY = (parameters?.twistY ?? 0) * Math.PI / 180;
    const twistZ = (parameters?.twistZ ?? 0) * Math.PI / 180;
    const twistNoise = parameters?.twistNoise ?? 0;
    const arcReach = parameters?.arcReach ?? 0.0;
    const cellSize = 3.0;
    const totalWidth = width * cellSize;
    const totalHeight = height * cellSize;
    const gridRows = height + 1;
    const gridCols = width + 1;
    // Build unified grid of vertices
    const vertices2D: THREE.Vector3[][] = [];
    for (let iy = 0; iy < gridRows; iy++) {
      const row: THREE.Vector3[] = [];
      for (let ix = 0; ix < gridCols; ix++) {
        // Normalized grid coordinates (0..1)
        const u = ix / (gridCols - 1);
        const v = iy / (gridRows - 1);
        // Plane position, centered
        const x = lerp(-totalWidth / 2, totalWidth / 2, u);
        const y = lerp(-totalHeight / 2, totalHeight / 2, v);
        const z = 0;
        const pos = new THREE.Vector3(x, y, z);
        // Progressive twist
        const t = v; // 0 at bottom, 1 at top
        const angleX = twistX * t;
        const angleY = twistY * t;
        const angleZ = twistZ * t;
        // Move to center
        pos.sub(new THREE.Vector3(0, 0, 0));
        // Z twist
        if (angleZ !== 0) {
          const cosZ = Math.cos(angleZ);
          const sinZ = Math.sin(angleZ);
          const px = pos.x * cosZ - pos.y * sinZ;
          const py = pos.x * sinZ + pos.y * cosZ;
          pos.x = px;
          pos.y = py;
        }
        // Y twist
        if (angleY !== 0) {
          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const px = pos.x * cosY + pos.z * sinY;
          const pz = -pos.x * sinY + pos.z * cosY;
          pos.x = px;
          pos.z = pz;
        }
        // X twist
        if (angleX !== 0) {
          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const py = pos.y * cosX - pos.z * sinX;
          const pz = pos.y * sinX + pos.z * cosX;
          pos.y = py;
          pos.z = pz;
        }
        // Move back from center
        pos.add(new THREE.Vector3(0, 0, 0));
        // Perlin noise
        if (twistNoise > 0) {
          const noise = perlin2(x * 0.5, y * 0.5);
          pos.z += noise * twistNoise * cellSize * 0.5;
        }
        row.push(pos);
      }
      vertices2D.push(row);
    }
    // Build line segments (horizontal and vertical)
    const lines: number[] = [];
    for (let iy = 0; iy < gridRows; iy++) {
      for (let ix = 0; ix < gridCols; ix++) {
        // Horizontal line (to right neighbor)
        if (ix < gridCols - 1) {
          const a = vertices2D[iy][ix];
          const b = vertices2D[iy][ix + 1];
          lines.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
        // Vertical line (to top neighbor)
        if (iy < gridRows - 1) {
          const a = vertices2D[iy][ix];
          const b = vertices2D[iy + 1][ix];
          lines.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    // Add arc/diagonal for each cell
    const arcSegments = 32;
    for (let iy = 0; iy < gridRows - 1; iy++) {
      for (let ix = 0; ix < gridCols - 1; ix++) {
        // Cell corners
        const p0 = vertices2D[iy][ix]; // bottom-left
        const p2 = vertices2D[iy + 1][ix + 1]; // top-right
        const p3 = vertices2D[iy + 1][ix]; // top-left
        // Quadratic Bézier control point: interpolate between diagonal midpoint and top-left
        const mid = new THREE.Vector3((p0.x + p2.x) / 2, (p0.y + p2.y) / 2, (p0.z + p2.z) / 2);
        const control = new THREE.Vector3(
          mid.x * (1 - arcReach) + p3.x * arcReach,
          mid.y * (1 - arcReach) + p3.y * arcReach,
          mid.z * (1 - arcReach) + p3.z * arcReach
        );
        // Sample points along the quadratic Bézier curve
        let prevPt: THREE.Vector3 | null = null;
        for (let i = 0; i <= arcSegments; i++) {
          const t = i / arcSegments;
          // Quadratic Bézier formula
          const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * control.x + t * t * p2.x;
          const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * control.y + t * t * p2.y;
          const z = (1 - t) * (1 - t) * p0.z + 2 * (1 - t) * t * control.z + t * t * p2.z;
          const arcPt = new THREE.Vector3(x, y, z);
          if (prevPt) {
            lines.push(prevPt.x, prevPt.y, prevPt.z, arcPt.x, arcPt.y, arcPt.z);
          }
          prevPt = arcPt;
        }
      }
    }
    const mergedPositions = new Float32Array(lines);
    const mergedGeometry = new THREE.BufferGeometry();
    mergedGeometry.setAttribute('position', new THREE.BufferAttribute(mergedPositions, 3));
    const material = new THREE.LineBasicMaterial({ color: 0x00ff99 });
    const mergedMesh = new THREE.LineSegments(mergedGeometry, material);
    // Add to scene as a group for cleanup compatibility
    const group = new THREE.Group();
    group.add(mergedMesh);
    scene.add(group);
    gridGroupRef.current = group;
  }, [parameters?.gridWidth, parameters?.gridHeight, parameters?.twistX, parameters?.twistY, parameters?.twistZ, parameters?.twistNoise, parameters?.arcReach]);

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
      <StatsOverlay statsRef={statsRef} />
      <DrawCallsOverlay drawCalls={drawCalls} />
    </div>
  );
};
