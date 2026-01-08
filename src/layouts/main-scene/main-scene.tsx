import React, { useState } from "react";
import { ThreeScene } from "../../components/three-scene";
import {
  SceneForm,
  type SceneParameters,
  type CameraState,
} from "../../components/scene-form";

export const MainScene: React.FC = () => {
  const [sceneParameters, setSceneParameters] = useState<SceneParameters>({
    visualizationMode: "grid-deformation",
    gridWidth: 60,
    gridHeight: 100,
    lineThickness: 0.02,
    paramA: 1.7,
    paramB: 1.7,
    paramC: 0.6,
    paramD: 1.2,
    attractorStrength: 8.5,
    attractorSpeed: 0.5,
    cameraPositionX: 0,
    cameraPositionY: -30,
    cameraPositionZ: 80,
    cameraTargetX: 0,
    cameraTargetY: 0,
    cameraTargetZ: 0,
  });

  const [currentCameraState, setCurrentCameraState] = useState<
    CameraState | undefined
  >();

  const handleParametersChange = (params: SceneParameters) => {
    setSceneParameters(params);
    // TODO: Pass parameters to Three.js scene
  };

  const handleCameraStateChange = (cameraState: CameraState) => {
    setCurrentCameraState(cameraState);
  };

  return (
    <div className="flex w-screen h-screen bg-secondary text-white overflow-hidden">
      <div className="flex-1 relative min-w-0">
        <ThreeScene
          className="w-full h-full"
          parameters={sceneParameters}
          onCameraStateChange={handleCameraStateChange}
          currentCameraState={currentCameraState}
        />
      </div>
      <div className="w-64 bg-secondary border-l border-primary/20 p-6 flex-shrink-0 overflow-y-auto">
        <SceneForm
          onParametersChange={handleParametersChange}
          onCameraStateChange={handleCameraStateChange}
          currentCameraState={currentCameraState}
        />
      </div>
    </div>
  );
};
