import React, { useState } from "react";
import { ThreeScene } from "../../components/three-scene";
import { SceneForm, type SceneParameters } from "../../components/scene-form";

export const MainScene: React.FC = () => {
  const [sceneParameters, setSceneParameters] = useState<SceneParameters>({
    wireframeMode: true,
    torusRadius: 1.5,
    tubeRadius: 0.5,
    radialSegments: 128,
    tubularSegments: 64,
    twistStrengthX: 0.0,
    twistStrengthY: 1.0,
    twistStrengthZ: 0.0,
    twistFrequency: 1.0,
    twistPhase: 0.0,
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
