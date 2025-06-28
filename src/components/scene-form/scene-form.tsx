import React from "react";

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

export const SceneForm: React.FC<SceneFormProps> = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Scene Parameters</h3>
      {/* Controls removed for now. Section kept for future use. */}
      <div className="space-y-3 text-white/60 text-sm">
        (No controls yet)
      </div>
    </div>
  );
};
