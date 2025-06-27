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
    <div className="scene-form">
      <h3>Scene Parameters</h3>

      <div className="form-group">
        <label htmlFor="dotCount">Number of Dots:</label>
        <input
          id="dotCount"
          type="range"
          min="100"
          max="10000"
          step="100"
          value={parameters.dotCount}
          onChange={(e) => handleChange("dotCount", parseInt(e.target.value))}
        />
        <span>{parameters.dotCount}</span>
      </div>

      <div className="form-group">
        <label htmlFor="wireframeMode">
          <input
            id="wireframeMode"
            type="checkbox"
            checked={parameters.wireframeMode}
            onChange={(e) => handleChange("wireframeMode", e.target.checked)}
          />
          Wireframe Mode
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="cloudDensity">Cloud Density:</label>
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
        />
        <span>{parameters.cloudDensity}</span>
      </div>
    </div>
  );
};
