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

    // Handle window resize
    const handleResize = () => {
      if (sceneSetupRef.current && containerRef.current) {
        const { camera, renderer } = sceneSetupRef.current;
        const container = containerRef.current;

        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (sceneSetupRef.current) {
        sceneSetupRef.current.cleanup();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // TODO: Use parameters to update the scene
  useEffect(() => {
    if (parameters && sceneSetupRef.current) {
      // Update scene based on parameters
      console.log("Scene parameters updated:", parameters);
    }
  }, [parameters]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    />
  );
};
