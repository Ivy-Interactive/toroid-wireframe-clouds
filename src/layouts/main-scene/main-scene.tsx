import React, { useState } from "react";
import { ThreeScene } from "../../components/three-scene";
import { SceneForm, type SceneParameters, type CameraState } from "../../components/scene-form";

export const MainScene: React.FC = () => {
  const [sceneParameters, setSceneParameters] = useState<SceneParameters>({
    gridWidth: 1,
    gridHeight: 1,
    arcReach: 0.0,
    twistX: 0,
    twistY: 0,
    twistZ: 0,
    twistNoise: 0,
    cameraPositionX: 0,
    cameraPositionY: 0,
    cameraPositionZ: 5,
    cameraTargetX: 0,
    cameraTargetY: 0,
    cameraTargetZ: 0,
  });

  const [currentCameraState, setCurrentCameraState] = useState<CameraState | undefined>();

  const handleParametersChange = (params: SceneParameters) => {
    setSceneParameters(params);
    // TODO: Pass parameters to Three.js scene
  };

  const handleCameraStateChange = (cameraState: CameraState) => {
    setCurrentCameraState(cameraState);
  };

  return (
    <div className="flex w-screen h-screen bg-secondary text-white">
      <div className="flex-1 relative min-w-0">
        <ThreeScene 
          className="w-full h-full" 
          parameters={sceneParameters}
          onCameraStateChange={handleCameraStateChange}
          currentCameraState={currentCameraState}
        />
      </div>
      <div className="w-64 bg-secondary border-l border-primary/20 p-6 flex-shrink-0">
        <SceneForm 
          onParametersChange={handleParametersChange}
          onCameraStateChange={handleCameraStateChange}
          currentCameraState={currentCameraState}
        />
      </div>
    </div>
  );
};
