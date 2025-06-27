import React from "react";

interface DrawCallsOverlayProps {
  drawCalls: number;
}

export const DrawCallsOverlay: React.FC<DrawCallsOverlayProps> = ({ drawCalls }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      color: "#0f0",
      background: "rgba(0,0,0,0.6)",
      font: "12px monospace",
      padding: "2px 8px",
      zIndex: 10,
    }}
  >
    Draw Calls: {drawCalls}
  </div>
);