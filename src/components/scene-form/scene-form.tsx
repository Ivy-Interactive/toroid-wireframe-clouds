import React, { useState, useEffect } from "react";

interface SceneFormProps {
  onParametersChange: (params: SceneParameters) => void;
  onCameraStateChange?: (cameraState: CameraState) => void;
  currentCameraState?: CameraState;
}

export interface CameraState {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
}

export type VisualizationMode = "grid-deformation";

export interface SceneParameters {
  // Visualization mode
  visualizationMode: VisualizationMode;
  // Grid parameters
  gridWidth: number;
  gridHeight: number;
  lineThickness: number; // Controls both Border and Ring thickness
  // Attractor parameters for GPU deformation
  paramA: number; // De Jong parameter a
  paramB: number; // De Jong parameter b
  paramC: number; // De Jong parameter c
  paramD: number; // De Jong parameter d
  attractorStrength: number; // How strong the deformation is
  attractorSpeed: number; // Animation speed
  // Camera parameters
  cameraPositionX: number;
  cameraPositionY: number;
  cameraPositionZ: number;
  cameraTargetX: number;
  cameraTargetY: number;
  cameraTargetZ: number;
}

export const SceneForm: React.FC<SceneFormProps> = ({
  onParametersChange,
  onCameraStateChange,
  currentCameraState,
}) => {
  const [parameters, setParameters] = useState<SceneParameters>({
    visualizationMode: "grid-deformation",
    gridWidth: 40,
    gridHeight: 100,
    lineThickness: 0.01,
    paramA: 1.4,
    paramB: -1.55,
    paramC: 1.25,
    paramD: 1.35,
    attractorStrength: 8.50,
    attractorSpeed: 0.25,
    cameraPositionX: 0,
    cameraPositionY: -30,
    cameraPositionZ: 90,
    cameraTargetX: 0,
    cameraTargetY: 0,
    cameraTargetZ: 0,
  });

  const [copyStatus, setCopyStatus] = useState<string>("");
  const [pasteStatus, setPasteStatus] = useState<string>("");

  // Initialize parameters on mount
  useEffect(() => {
    onParametersChange(parameters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Sync camera parameters when current camera state changes
  useEffect(() => {
    if (currentCameraState) {
      setParameters((prev) => ({
        ...prev,
        cameraPositionX: currentCameraState.position.x,
        cameraPositionY: currentCameraState.position.y,
        cameraPositionZ: currentCameraState.position.z,
        cameraTargetX: currentCameraState.target.x,
        cameraTargetY: currentCameraState.target.y,
        cameraTargetZ: currentCameraState.target.z,
      }));
    }
  }, [currentCameraState]);

  const handleChange = (key: keyof SceneParameters, value: number | boolean | VisualizationMode) => {
    const newParameters = { ...parameters, [key]: value };
    setParameters(newParameters);
    onParametersChange(newParameters);

    // Immediately apply camera changes if it's a camera parameter
    if (key.startsWith("camera") && onCameraStateChange && typeof value === "number") {
      const cameraState: CameraState = {
        position: {
          x: key === "cameraPositionX" ? value : newParameters.cameraPositionX,
          y: key === "cameraPositionY" ? value : newParameters.cameraPositionY,
          z: key === "cameraPositionZ" ? value : newParameters.cameraPositionZ,
        },
        rotation: { x: 0, y: 0, z: 0 }, // Will be calculated from position and target
        target: {
          x: key === "cameraTargetX" ? value : newParameters.cameraTargetX,
          y: key === "cameraTargetY" ? value : newParameters.cameraTargetY,
          z: key === "cameraTargetZ" ? value : newParameters.cameraTargetZ,
        },
      };
      onCameraStateChange(cameraState);
    }
  };

  const copyToClipboard = async () => {
    try {
      const dataToCopy = {
        sceneParameters: parameters,
        cameraState: currentCameraState,
      };
      await navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Failed to copy");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const pasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const parsedData = JSON.parse(clipboardText);

      // Handle both the full object format and just sceneParameters
      let newParameters: SceneParameters;
      let newCameraState: CameraState | undefined;

      if (parsedData.sceneParameters && parsedData.cameraState) {
        // Full format with both sceneParameters and cameraState
        newParameters = parsedData.sceneParameters;
        newCameraState = parsedData.cameraState;
      } else if (parsedData.sceneParameters) {
        // Just sceneParameters
        newParameters = parsedData.sceneParameters;
      } else if (parsedData.gridWidth !== undefined) {
        // Direct parameters object
        newParameters = parsedData;
      } else {
        throw new Error("Invalid format");
      }

      // Validate that all required parameters are present
      const requiredParams = [
        "visualizationMode",
        "gridWidth",
        "gridHeight",
        "lineThickness",
        "paramA",
        "paramB",
        "paramC",
        "paramD",
        "attractorStrength",
        "attractorSpeed",
        "cameraPositionX",
        "cameraPositionY",
        "cameraPositionZ",
        "cameraTargetX",
        "cameraTargetY",
        "cameraTargetZ",
      ];

      for (const param of requiredParams) {
        const value = newParameters[param as keyof SceneParameters];
        if (param === "visualizationMode") {
          if (value !== "grid-deformation") {
            throw new Error(`Invalid visualization mode: ${param}`);
          }
        } else if (typeof value !== "number") {
          throw new Error(`Missing or invalid parameter: ${param}`);
        }
      }

      // Apply the new parameters
      setParameters(newParameters);
      onParametersChange(newParameters);

      // Apply camera state if provided
      if (newCameraState && onCameraStateChange) {
        onCameraStateChange(newCameraState);
      }

      setPasteStatus("Pasted!");
      setTimeout(() => setPasteStatus(""), 2000);
    } catch (error) {
      console.error("Paste error:", error);
      setPasteStatus("Invalid format");
      setTimeout(() => setPasteStatus(""), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Scene Parameters</h3>
      </div>

      {/* Visualization Mode */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">Visualization Mode</h4>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-white/80">
            <input
              type="radio"
              name="visualizationMode"
              value="grid-deformation"
              checked={parameters.visualizationMode === "grid-deformation"}
              onChange={(e) => handleChange("visualizationMode", e.target.value as VisualizationMode)}
              className="mr-2"
            />
            Grid Deformation
          </label>
        </div>
      </div>

      {/* Scene Parameters */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">Grid Settings</h4>
        <div className="space-y-1">
          <label
            htmlFor="gridWidth"
            className="block text-sm font-medium text-white/80"
          >
            Grid Width: {parameters.gridWidth}
          </label>
          <input
            id="gridWidth"
            type="range"
            min="1"
            max="100"
            step="1"
            value={parameters.gridWidth}
            onChange={(e) =>
              handleChange("gridWidth", parseInt(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="gridHeight"
            className="block text-sm font-medium text-white/80"
          >
            Grid Height: {parameters.gridHeight}
          </label>
          <input
            id="gridHeight"
            type="range"
            min="1"
            max="100"
            step="1"
            value={parameters.gridHeight}
            onChange={(e) =>
              handleChange("gridHeight", parseInt(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="lineThickness"
            className="block text-sm font-medium text-white/80"
          >
            Line Thickness: {parameters.lineThickness.toFixed(3)}
          </label>
          <input
            id="lineThickness"
            type="range"
            min="0.001"
            max="0.1"
            step="0.001"
            value={parameters.lineThickness}
            onChange={(e) =>
              handleChange("lineThickness", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Attractor Parameters */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">GPU Attractor Deformation</h4>
        <div className="space-y-1">
          <label
            htmlFor="paramA"
            className="block text-sm font-medium text-white/80"
          >
            Parameter A: {parameters.paramA.toFixed(2)}
          </label>
          <input
            id="paramA"
            type="range"
            min="-3"
            max="3"
            step="0.01"
            value={parameters.paramA}
            onChange={(e) =>
              handleChange("paramA", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="paramB"
            className="block text-sm font-medium text-white/80"
          >
            Parameter B: {parameters.paramB.toFixed(2)}
          </label>
          <input
            id="paramB"
            type="range"
            min="-3"
            max="3"
            step="0.01"
            value={parameters.paramB}
            onChange={(e) =>
              handleChange("paramB", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="paramC"
            className="block text-sm font-medium text-white/80"
          >
            Parameter C: {parameters.paramC.toFixed(2)}
          </label>
          <input
            id="paramC"
            type="range"
            min="-3"
            max="3"
            step="0.01"
            value={parameters.paramC}
            onChange={(e) =>
              handleChange("paramC", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="paramD"
            className="block text-sm font-medium text-white/80"
          >
            Parameter D: {parameters.paramD.toFixed(2)}
          </label>
          <input
            id="paramD"
            type="range"
            min="-3"
            max="3"
            step="0.01"
            value={parameters.paramD}
            onChange={(e) =>
              handleChange("paramD", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="attractorStrength"
            className="block text-sm font-medium text-white/80"
          >
            Attractor Strength: {parameters.attractorStrength.toFixed(2)}
          </label>
          <input
            id="attractorStrength"
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={parameters.attractorStrength}
            onChange={(e) =>
              handleChange("attractorStrength", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="attractorSpeed"
            className="block text-sm font-medium text-white/80"
          >
            Attractor Speed: {parameters.attractorSpeed.toFixed(2)}
          </label>
          <input
            id="attractorSpeed"
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={parameters.attractorSpeed}
            onChange={(e) =>
              handleChange("attractorSpeed", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>


      {/* Camera Parameters */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">Camera Settings</h4>
        <div className="space-y-1">
          <label
            htmlFor="cameraPositionX"
            className="block text-sm font-medium text-white/80"
          >
            Camera X: {parameters.cameraPositionX.toFixed(2)}
          </label>
          <input
            id="cameraPositionX"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionX}
            onChange={(e) =>
              handleChange("cameraPositionX", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="cameraPositionY"
            className="block text-sm font-medium text-white/80"
          >
            Camera Y: {parameters.cameraPositionY.toFixed(2)}
          </label>
          <input
            id="cameraPositionY"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionY}
            onChange={(e) =>
              handleChange("cameraPositionY", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="cameraPositionZ"
            className="block text-sm font-medium text-white/80"
          >
            Camera Z: {parameters.cameraPositionZ.toFixed(2)}
          </label>
          <input
            id="cameraPositionZ"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionZ}
            onChange={(e) =>
              handleChange("cameraPositionZ", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="cameraTargetX"
            className="block text-sm font-medium text-white/80"
          >
            Target X: {parameters.cameraTargetX.toFixed(2)}
          </label>
          <input
            id="cameraTargetX"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetX}
            onChange={(e) =>
              handleChange("cameraTargetX", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="cameraTargetY"
            className="block text-sm font-medium text-white/80"
          >
            Target Y: {parameters.cameraTargetY.toFixed(2)}
          </label>
          <input
            id="cameraTargetY"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetY}
            onChange={(e) =>
              handleChange("cameraTargetY", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="cameraTargetZ"
            className="block text-sm font-medium text-white/80"
          >
            Target Z: {parameters.cameraTargetZ.toFixed(2)}
          </label>
          <input
            id="cameraTargetZ"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetZ}
            onChange={(e) =>
              handleChange("cameraTargetZ", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-2">
          <button
            onClick={pasteFromClipboard}
            className="w-full px-3 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
          >
            {pasteStatus || "Paste Parameters"}
          </button>
          <button
            onClick={copyToClipboard}
            className="w-full px-3 py-2 text-sm bg-primary hover:bg-primary/80 text-white rounded transition-colors"
          >
            {copyStatus || "Copy Parameters"}
          </button>
        </div>
      </div>
    </div>
  );
};
