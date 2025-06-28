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
}

export const SceneForm: React.FC<SceneFormProps> = ({ onParametersChange }) => {
  const [parameters, setParameters] = useState<SceneParameters>({
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
    arcBulge: 0.0,
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
          <label htmlFor="torusRadius" className="block text-sm font-medium text-white/80">
            Torus Radius: {parameters.torusRadius.toFixed(2)}
          </label>
          <input
            id="torusRadius"
            type="range"
            min="0.5"
            max="3"
            step="0.01"
            value={parameters.torusRadius}
            onChange={(e) => handleChange("torusRadius", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="tubeRadius" className="block text-sm font-medium text-white/80">
            Tube Radius: {parameters.tubeRadius.toFixed(2)}
          </label>
          <input
            id="tubeRadius"
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={parameters.tubeRadius}
            onChange={(e) => handleChange("tubeRadius", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="radialSegments" className="block text-sm font-medium text-white/80">
            Radial Segments: {parameters.radialSegments}
          </label>
          <input
            id="radialSegments"
            type="range"
            min="8"
            max="256"
            step="1"
            value={parameters.radialSegments}
            onChange={(e) => handleChange("radialSegments", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="tubularSegments" className="block text-sm font-medium text-white/80">
            Tubular Segments: {parameters.tubularSegments}
          </label>
          <input
            id="tubularSegments"
            type="range"
            min="8"
            max="256"
            step="1"
            value={parameters.tubularSegments}
            onChange={(e) => handleChange("tubularSegments", parseInt(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="twistStrengthX" className="block text-sm font-medium text-white/80">
            Twist Strength X: {parameters.twistStrengthX.toFixed(2)}
          </label>
          <input
            id="twistStrengthX"
            type="range"
            min="-2"
            max="2"
            step="0.01"
            value={parameters.twistStrengthX}
            onChange={(e) => handleChange("twistStrengthX", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="twistStrengthY" className="block text-sm font-medium text-white/80">
            Twist Strength Y: {parameters.twistStrengthY.toFixed(2)}
          </label>
          <input
            id="twistStrengthY"
            type="range"
            min="-2"
            max="2"
            step="0.01"
            value={parameters.twistStrengthY}
            onChange={(e) => handleChange("twistStrengthY", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="twistStrengthZ" className="block text-sm font-medium text-white/80">
            Twist Strength Z: {parameters.twistStrengthZ.toFixed(2)}
          </label>
          <input
            id="twistStrengthZ"
            type="range"
            min="-2"
            max="2"
            step="0.01"
            value={parameters.twistStrengthZ}
            onChange={(e) => handleChange("twistStrengthZ", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="twistFrequency" className="block text-sm font-medium text-white/80">
            Twist Frequency: {parameters.twistFrequency.toFixed(2)}
          </label>
          <input
            id="twistFrequency"
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={parameters.twistFrequency}
            onChange={(e) => handleChange("twistFrequency", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="twistPhase" className="block text-sm font-medium text-white/80">
            Twist Phase: {parameters.twistPhase.toFixed(2)}
          </label>
          <input
            id="twistPhase"
            type="range"
            min="-6.283"
            max="6.283"
            step="0.01"
            value={parameters.twistPhase}
            onChange={(e) => handleChange("twistPhase", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="arcBulge" className="block text-sm font-medium text-white/80">
            Arc Bulge: {parameters.arcBulge.toFixed(2)}
          </label>
          <input
            id="arcBulge"
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={parameters.arcBulge}
            onChange={(e) => handleChange("arcBulge", parseFloat(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};
