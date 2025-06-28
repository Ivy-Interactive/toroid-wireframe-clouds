import React, { useState } from "react";

interface SceneFormProps {
  onParametersChange: (params: SceneParameters) => void;
}

export interface SceneParameters {
  gridWidth: number;
  gridHeight: number;
  arcReach: number;
  twistX: number;
  twistY: number;
  twistZ: number;
  twistNoise: number;
}

export const SceneForm: React.FC<SceneFormProps> = ({ onParametersChange }) => {
  const [parameters, setParameters] = useState<SceneParameters>({
    gridWidth: 1,
    gridHeight: 1,
    arcReach: 0.0,
    twistX: 0,
    twistY: 0,
    twistZ: 0,
    twistNoise: 0,
  });

  const [copyStatus, setCopyStatus] = useState<string>("");

  const handleChange = (
    key: keyof SceneParameters,
    value: number
  ) => {
    const newParameters = { ...parameters, [key]: value };
    setParameters(newParameters);
    onParametersChange(newParameters);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(parameters, null, 2));
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Failed to copy");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Scene Parameters</h3>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 text-sm bg-primary hover:bg-primary/80 text-white rounded transition-colors"
        >
          {copyStatus || "Copy Parameters"}
        </button>
      </div>
      <div className="space-y-3">
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
    </div>
  );
};
