import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  blob: THREE.Object3D | undefined;
  animate: () => void;
  cleanup: () => void;
}

export const createScene = (container: HTMLElement): SceneSetup => {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight, false);
  renderer.setClearColor(0x1a1a2e, 1);
  
  const canvas = renderer.domElement;
  canvas.style.width = `${container.clientWidth}px`;
  canvas.style.height = `${container.clientHeight}px`;
  canvas.style.display = 'block';
  
  container.appendChild(renderer.domElement);

  // --- Custom Curved Diagonal Square Geometry ---
  // (Removed all geometry, material, and mesh creation)

  // Add some ambient light to make it more visible
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  // Position camera
  camera.position.z = 5;

  // --- OrbitControls setup ---
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  // Animation function: just render (no animation for now)
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
  };

  // Cleanup function
  const cleanup = () => {
    container.removeChild(renderer.domElement);
    renderer.dispose();
    controls.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    blob: undefined,
    animate,
    cleanup,
  };
};
