import React, { useState } from "react";

interface SceneFormProps {
  onParametersChange: (params: SceneParameters) => void;
}

export interface SceneParameters {
  wireframeMode: boolean;
  torusRadius: number;
  tubeRadius: number;
  radialSegments: number;
  tubularSegments: number;
  twistStrengthX: number;
  twistStrengthY: number;
  twistStrengthZ: number;
  twistFrequency: number;
  twistPhase: number;
  arcBulge: number;
  gridWidth: number;
  gridHeight: number;
}

export const SceneForm: React.FC<SceneFormProps> = ({ onParametersChange }) => {
  const [parameters, setParameters] = useState<SceneParameters>({
    wireframeMode: false,
    torusRadius: 1,
    tubeRadius: 0.5,
    radialSegments: 32,
    tubularSegments: 32,
    twistStrengthX: 0,
    twistStrengthY: 0,
    twistStrengthZ: 0,
    twistFrequency: 1,
    twistPhase: 0,
    arcBulge: 0,
    gridWidth: 1,
    gridHeight: 1,
  });

  const handleChange = (
    key: keyof SceneParameters,
    value: number
  ) => {
    const newParameters = { ...parameters, [key]: value };
    setParameters(newParameters);
    onParametersChange(newParameters);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Scene Parameters</h3>
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
      </div>
    </div>
  );
};
