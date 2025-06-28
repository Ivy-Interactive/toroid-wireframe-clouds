import React, { useEffect, useRef, useState } from "react";
import { createScene } from "../../layouts/main-scene";
import type { SceneSetup } from "../../layouts/main-scene";
import { StatsOverlay } from "../stats-overlay";
import { DrawCallsOverlay } from "../draw-calls-overlay";
import Stats from "stats.js";
import type { SceneParameters } from "../scene-form";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
  parameters?: SceneParameters;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({
  className,
  parameters,
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

  // Grid instancing effect
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
    // Merge all grid cell geometries into one
    const width = parameters?.gridWidth ?? 1;
    const height = parameters?.gridHeight ?? 1;
    const size = 1.5;
    const spacing = 3.0;
    const curveSegments = 32;
    const cellVertexCount = 8 + curveSegments * 2; // 4 sides (8 verts) + curve (curveSegments*2 verts)
    const totalCells = width * height;
    const totalVertices = totalCells * cellVertexCount;
    const mergedPositions = new Float32Array(totalVertices * 3);
    let vtxOffset = 0;
    for (let ix = 0; ix < width; ix++) {
      for (let iy = 0; iy < height; iy++) {
        // --- Custom mesh: curved diagonal square ---
        const p0 = new THREE.Vector3(-size, -size, 0);
        const p1 = new THREE.Vector3(size, -size, 0);
        const p2 = new THREE.Vector3(size, size, 0);
        const p3 = new THREE.Vector3(-size, size, 0);
        const curve = new THREE.QuadraticBezierCurve3(
          p0,
          new THREE.Vector3(0, size * 1.2, 0),
          p2
        );
        const curvePoints = curve.getPoints(curveSegments);
        const vertices = [
          p0, p1, p1, p2, p2, p3, p3, p0,
          ...curvePoints.slice(0, -1).flatMap((pt, i) => [pt, curvePoints[i + 1]])
        ];
        // Offset all vertices by grid position
        const offsetX = ix * spacing;
        const offsetY = iy * spacing;
        vertices.forEach((v) => {
          mergedPositions[vtxOffset++] = v.x + offsetX;
          mergedPositions[vtxOffset++] = v.y + offsetY;
          mergedPositions[vtxOffset++] = v.z;
        });
      }
    }
    const mergedGeometry = new THREE.BufferGeometry();
    mergedGeometry.setAttribute('position', new THREE.BufferAttribute(mergedPositions, 3));
    const material = new THREE.LineBasicMaterial({ color: 0x00ff99 });
    const mergedMesh = new THREE.LineSegments(mergedGeometry, material);
    // Center the merged mesh
    mergedMesh.position.x = -((width - 1) * spacing) / 2;
    mergedMesh.position.y = -((height - 1) * spacing) / 2;
    // Add to scene as a group for cleanup compatibility
    const group = new THREE.Group();
    group.add(mergedMesh);
    scene.add(group);
    gridGroupRef.current = group;
  }, [parameters?.gridWidth, parameters?.gridHeight]);

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
