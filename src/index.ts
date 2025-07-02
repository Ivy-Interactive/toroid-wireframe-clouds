// Main exports for the toroid-wireframe-clouds package

// Core components
export { MainScene } from './layouts/main-scene';
export { ThreeScene } from './components/three-scene';
export { SceneForm } from './components/scene-form';
export { StatsOverlay } from './components/stats-overlay';
export { DrawCallsOverlay } from './components/draw-calls-overlay';

// Scene creation and management
export { createScene } from './layouts/main-scene/scene-initiation';

// Types
export type { SceneSetup, CameraState } from './layouts/main-scene/scene-initiation';
export type { SceneParameters } from './components/scene-form';

// Re-export Three.js for convenience
export * as THREE from 'three'; 