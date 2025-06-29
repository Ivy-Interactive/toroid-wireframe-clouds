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

export interface SceneParameters {
  gridWidth: number;
  gridHeight: number;
  arcReach: number;
  twistX: number;
  twistY: number;
  twistZ: number;
  twistNoise: number;
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
  currentCameraState 
}) => {
  const [parameters, setParameters] = useState<SceneParameters>({
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

  const [copyStatus, setCopyStatus] = useState<string>("");
  const [pasteStatus, setPasteStatus] = useState<string>("");

  // Sync camera parameters when current camera state changes
  useEffect(() => {
    if (currentCameraState) {
      setParameters(prev => ({
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

  const handleChange = (
    key: keyof SceneParameters,
    value: number
  ) => {
    const newParameters = { ...parameters, [key]: value };
    setParameters(newParameters);
    onParametersChange(newParameters);
    
    // Immediately apply camera changes if it's a camera parameter
    if (key.startsWith('camera') && onCameraStateChange) {
      const cameraState: CameraState = {
        position: {
          x: key === 'cameraPositionX' ? value : newParameters.cameraPositionX,
          y: key === 'cameraPositionY' ? value : newParameters.cameraPositionY,
          z: key === 'cameraPositionZ' ? value : newParameters.cameraPositionZ
        },
        rotation: { x: 0, y: 0, z: 0 }, // Will be calculated from position and target
        target: {
          x: key === 'cameraTargetX' ? value : newParameters.cameraTargetX,
          y: key === 'cameraTargetY' ? value : newParameters.cameraTargetY,
          z: key === 'cameraTargetZ' ? value : newParameters.cameraTargetZ
        }
      };
      onCameraStateChange(cameraState);
    }
  };

  const copyToClipboard = async () => {
    try {
      const dataToCopy = {
        sceneParameters: parameters,
        cameraState: currentCameraState
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
        'gridWidth', 'gridHeight', 'arcReach', 'twistX', 'twistY', 'twistZ', 'twistNoise',
        'cameraPositionX', 'cameraPositionY', 'cameraPositionZ',
        'cameraTargetX', 'cameraTargetY', 'cameraTargetZ'
      ];
      
      for (const param of requiredParams) {
        if (typeof newParameters[param as keyof SceneParameters] !== 'number') {
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
      
      {/* Scene Parameters */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">Grid Settings</h4>
        <div className="space-y-1">
          <label htmlFor="gridWidth" className="block text-sm font-medium text-white/80">
            Grid Width: {parameters.gridWidth}
          </label>
          <input
            id="gridWidth"
            type="range"
            min="1"
            max="100"
            step="1"
            value={parameters.gridWidth}
            onChange={(e) => handleChange("gridWidth", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="gridHeight" className="block text-sm font-medium text-white/80">
            Grid Height: {parameters.gridHeight}
          </label>
          <input
            id="gridHeight"
            type="range"
            min="1"
            max="100"
            step="1"
            value={parameters.gridHeight}
            onChange={(e) => handleChange("gridHeight", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="arcReach" className="block text-sm font-medium text-white/80">
            Arc Reach: {parameters.arcReach.toFixed(2)}
          </label>
          <input
            id="arcReach"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.arcReach}
            onChange={(e) => handleChange("arcReach", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="twistX" className="block text-sm font-medium text-white/80">
            Twist X: {parameters.twistX}°
          </label>
          <input
            id="twistX"
            type="range"
            min="-180"
            max="180"
            step="1"
            value={parameters.twistX}
            onChange={(e) => handleChange("twistX", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="twistY" className="block text-sm font-medium text-white/80">
            Twist Y: {parameters.twistY}°
          </label>
          <input
            id="twistY"
            type="range"
            min="-180"
            max="180"
            step="1"
            value={parameters.twistY}
            onChange={(e) => handleChange("twistY", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="twistZ" className="block text-sm font-medium text-white/80">
            Twist Z: {parameters.twistZ}°
          </label>
          <input
            id="twistZ"
            type="range"
            min="-180"
            max="180"
            step="1"
            value={parameters.twistZ}
            onChange={(e) => handleChange("twistZ", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="twistNoise" className="block text-sm font-medium text-white/80">
            Twist Noise: {parameters.twistNoise.toFixed(2)}
          </label>
          <input
            id="twistNoise"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.twistNoise}
            onChange={(e) => handleChange("twistNoise", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Camera Parameters */}
      <div className="space-y-3">
        <h4 className="text-md font-medium text-white/90">Camera Settings</h4>
        <div className="space-y-1">
          <label htmlFor="cameraPositionX" className="block text-sm font-medium text-white/80">
            Camera X: {parameters.cameraPositionX.toFixed(2)}
          </label>
          <input
            id="cameraPositionX"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionX}
            onChange={(e) => handleChange("cameraPositionX", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="cameraPositionY" className="block text-sm font-medium text-white/80">
            Camera Y: {parameters.cameraPositionY.toFixed(2)}
          </label>
          <input
            id="cameraPositionY"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionY}
            onChange={(e) => handleChange("cameraPositionY", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="cameraPositionZ" className="block text-sm font-medium text-white/80">
            Camera Z: {parameters.cameraPositionZ.toFixed(2)}
          </label>
          <input
            id="cameraPositionZ"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraPositionZ}
            onChange={(e) => handleChange("cameraPositionZ", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="cameraTargetX" className="block text-sm font-medium text-white/80">
            Target X: {parameters.cameraTargetX.toFixed(2)}
          </label>
          <input
            id="cameraTargetX"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetX}
            onChange={(e) => handleChange("cameraTargetX", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="cameraTargetY" className="block text-sm font-medium text-white/80">
            Target Y: {parameters.cameraTargetY.toFixed(2)}
          </label>
          <input
            id="cameraTargetY"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetY}
            onChange={(e) => handleChange("cameraTargetY", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="cameraTargetZ" className="block text-sm font-medium text-white/80">
            Target Z: {parameters.cameraTargetZ.toFixed(2)}
          </label>
          <input
            id="cameraTargetZ"
            type="range"
            min="-20"
            max="20"
            step="0.1"
            value={parameters.cameraTargetZ}
            onChange={(e) => handleChange("cameraTargetZ", parseFloat(e.target.value))}
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
