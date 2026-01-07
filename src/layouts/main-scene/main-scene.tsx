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
    gridWidth: 20,
    gridHeight: 20,
    lineThickness: 0.02,
    paramA: -2.24,
    paramB: 0.43,
    paramC: -0.65,
    paramD: -2.43,
    attractorStrength: 2.0,
    attractorSpeed: 0.5,
    cameraPositionX: 0,
    cameraPositionY: 0,
    cameraPositionZ: 50,
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
