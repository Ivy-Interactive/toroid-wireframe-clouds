import React, { useEffect, useRef, useState } from "react";
import { createScene } from "../../layouts/main-scene";
import type { SceneSetup } from "../../layouts/main-scene";
import { StatsOverlay } from "../stats-overlay";
import { DrawCallsOverlay } from "../draw-calls-overlay";
import Stats from "stats.js";

interface ThreeSceneProps {
  className?: string;
  // parameters?: SceneParameters; // Remove parameters prop
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({
  className,
  // parameters, // Remove parameters usage
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneSetupRef = useRef<SceneSetup | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [drawCalls, setDrawCalls] = useState(0);
  const statsRef = useRef<Stats | null>(null);

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

  // Remove parameter-driven mesh update logic

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
