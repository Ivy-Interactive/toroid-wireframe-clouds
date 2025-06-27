import React, { useEffect, useRef } from "react";
import { createScene } from "../../layouts/main-scene";
import type { SceneSetup } from "../../layouts/main-scene";
import type { SceneParameters } from "../scene-form";

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

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the Three.js scene
    sceneSetupRef.current = createScene(containerRef.current);

    // Start animation loop
    const animate = () => {
      if (sceneSetupRef.current) {
        sceneSetupRef.current.animate();
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
    />
  );
};
