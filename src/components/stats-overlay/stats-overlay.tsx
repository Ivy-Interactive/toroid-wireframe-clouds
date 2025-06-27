import React, { useEffect, useRef } from "react";
import Stats from "stats.js";

export interface StatsOverlayProps {
  statsRef: React.MutableRefObject<Stats | null>;
}

export const StatsOverlay: React.FC<StatsOverlayProps> = ({ statsRef }) => {
  const localRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0); // 0: fps
    stats.dom.style.position = "absolute";
    stats.dom.style.top = "0px";
    stats.dom.style.left = "0px";
    localRef.current?.appendChild(stats.dom);
    statsRef.current = stats;
    return () => {
      if (stats.dom.parentNode) stats.dom.parentNode.removeChild(stats.dom);
      statsRef.current = null;
    };
  }, [statsRef]);

  return <div ref={localRef} style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }} />;
}