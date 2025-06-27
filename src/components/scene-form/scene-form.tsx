import React, { useState } from "react";

interface SceneFormProps {
  onParametersChange: (params: SceneParameters) => void;
}

export interface SceneParameters {
  dotCount: number;
  wireframeMode: boolean;
  cloudDensity: number;
}

export const SceneForm: React.FC<SceneFormProps> = ({ onParametersChange }) => {
  const [parameters, setParameters] = useState<SceneParameters>({
    dotCount: 1000,
    wireframeMode: true,
    cloudDensity: 0.5,
  });

  const handleChange = (
    key: keyof SceneParameters,
    value: number | boolean
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
          <label htmlFor="dotCount" className="block text-sm font-medium text-white/80">
            Number of Dots: {parameters.dotCount}
          </label>
          <input
            id="dotCount"
            type="range"
            min="100"
            max="10000"
            step="100"
            value={parameters.dotCount}
            onChange={(e) => handleChange("dotCount", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            id="wireframeMode"
            type="checkbox"
            checked={parameters.wireframeMode}
            onChange={(e) => handleChange("wireframeMode", e.target.checked)}
            className="w-4 h-4 text-primary bg-primary/20 border-primary/30 rounded focus:ring-primary focus:ring-2"
          />
          <label htmlFor="wireframeMode" className="text-sm font-medium text-white/80 cursor-pointer">
            Wireframe Mode
          </label>
        </div>

        <div className="space-y-1">
          <label htmlFor="cloudDensity" className="block text-sm font-medium text-white/80">
            Cloud Density: {parameters.cloudDensity}
          </label>
          <input
            id="cloudDensity"
            type="range"
            min="0.1"
            max="1.0"
            step="0.1"
            value={parameters.cloudDensity}
            onChange={(e) =>
              handleChange("cloudDensity", parseFloat(e.target.value))
            }
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};
