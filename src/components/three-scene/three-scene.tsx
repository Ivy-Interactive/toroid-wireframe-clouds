import React, { useEffect, useRef, useState } from "react";
import { createScene } from "../../layouts/main-scene";
import type { SceneSetup } from "../../layouts/main-scene";
import type { SceneParameters } from "../scene-form";
import { StatsOverlay } from "../stats-overlay";
import { DrawCallsOverlay } from "../draw-calls-overlay";
import Stats from "stats.js";
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
  // Track the current torus mesh for disposal
  const torusMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the Three.js scene
    sceneSetupRef.current = createScene(containerRef.current);
    torusMeshRef.current = sceneSetupRef.current.blob;

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
        
        // Update camera aspect ratio
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        // Update renderer size (both internal and CSS)
        renderer.setSize(width, height, false);
        
        // Update canvas CSS size - ensure it matches container exactly
        const canvas = renderer.domElement;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.maxWidth = `${width}px`;
        canvas.style.maxHeight = `${height}px`;
        canvas.style.minWidth = `${width}px`;
        canvas.style.minHeight = `${height}px`;
        
        // Force a re-render to ensure everything is updated
        renderer.render(sceneSetupRef.current.scene, camera);
      }
    };

    // Initial resize call
    handleResize();

    // Set up ResizeObserver for more responsive resizing
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Debounced window resize handler
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 16); // ~60fps
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup function
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

  // Update torus mesh when parameters change
  useEffect(() => {
    if (!parameters || !sceneSetupRef.current) return;
    const { scene } = sceneSetupRef.current;
    // Remove and dispose old mesh
    if (torusMeshRef.current) {
      scene.remove(torusMeshRef.current);
      if (torusMeshRef.current.geometry) torusMeshRef.current.geometry.dispose();
      if (Array.isArray(torusMeshRef.current.material)) {
        torusMeshRef.current.material.forEach((m) => m.dispose());
      } else {
        torusMeshRef.current.material.dispose();
      }
    }
    // Clamp segment and frequency values to safe minimums
    const radialSegments = Math.max(3, parameters.radialSegments);
    const tubularSegments = Math.max(3, parameters.tubularSegments);
    const twistFrequency = Math.max(0.01, parameters.twistFrequency);
    // Create new geometry and mesh
    const geometry = new THREE.TorusGeometry(
      parameters.torusRadius,
      parameters.tubeRadius,
      radialSegments,
      tubularSegments
    );
    // Apply advanced twist along all axes
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const pos = new THREE.Vector3().fromBufferAttribute(
        geometry.attributes.position,
        i
      );
      // Calculate a parameter along the torus ring for frequency/phase
      const twistParam = twistFrequency * (pos.x + pos.y + pos.z) + parameters.twistPhase;
      // X axis twist
      const angleX = parameters.twistStrengthX * Math.sin(twistParam);
      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      const y1 = pos.y * cosX - pos.z * sinX;
      const z1 = pos.y * sinX + pos.z * cosX;
      // Y axis twist
      const angleY = parameters.twistStrengthY * Math.sin(twistParam);
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);
      const x2 = pos.x * cosY + z1 * sinY;
      const z2 = -pos.x * sinY + z1 * cosY;
      // Z axis twist
      const angleZ = parameters.twistStrengthZ * Math.sin(twistParam);
      const sinZ = Math.sin(angleZ);
      const cosZ = Math.cos(angleZ);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;
      // Only set if all are finite
      if (Number.isFinite(x3) && Number.isFinite(y3) && Number.isFinite(z2)) {
        geometry.attributes.position.setXYZ(i, x3, y3, z2);
      }
    }
    geometry.attributes.position.needsUpdate = true;
    // Use wireframe mode from parameters
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff99,
      wireframe: parameters.wireframeMode,
      transparent: true,
      opacity: 0.7,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    torusMeshRef.current = mesh;
    // Update the reference in the scene setup for animation
    sceneSetupRef.current.blob = mesh;
  }, [parameters]);

  // TODO: Use parameters to update the scene
  useEffect(() => {
    if (parameters && sceneSetupRef.current) {
      // Update scene based on parameters
    }
  }, [parameters]);

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
