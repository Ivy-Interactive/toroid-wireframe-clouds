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
    <div className="main-scene-layout">
      <div className="scene-container">
        <ThreeScene className="three-scene" parameters={sceneParameters} />
      </div>
      <div className="controls-panel">
        <SceneForm onParametersChange={handleParametersChange} />
      </div>
    </div>
  );
};
