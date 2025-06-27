import React, { useState } from "react";
import { ThreeScene } from "../../components/three-scene";
import { SceneForm, type SceneParameters } from "../../components/scene-form";

export const MainScene: React.FC = () => {
  const [sceneParameters, setSceneParameters] = useState<SceneParameters>({
    dotCount: 1000,
    wireframeMode: true,
    cloudDensity: 0.5,
  });

  const handleParametersChange = (params: SceneParameters) => {
    setSceneParameters(params);
    // TODO: Pass parameters to Three.js scene
  };

  return (
    <div className="flex w-screen h-screen bg-secondary text-white">
      <div className="flex-1 relative min-w-0">
        <ThreeScene className="w-full h-full" parameters={sceneParameters} />
      </div>
      <div className="w-64 bg-secondary border-l border-primary/20 p-6 flex-shrink-0">
        <SceneForm onParametersChange={handleParametersChange} />
      </div>
    </div>
  );
};
