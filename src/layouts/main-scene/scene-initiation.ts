import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export interface CameraState {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
}

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  blob: THREE.Object3D | undefined;
  animate: () => void;
  getCameraState: () => CameraState;
  setCameraState: (state: CameraState) => void;
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
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight, false);
  renderer.setClearColor(0x041209, 1);

  const canvas = renderer.domElement;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";

  container.appendChild(renderer.domElement);

  // --- Custom Curved Diagonal Square Geometry ---
  // (Removed all geometry, material, and mesh creation)

  // Add some ambient light to make it more visible
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  // Position camera to emphasize loops
  camera.position.set(0, -30, 90);
  camera.lookAt(0, 0, 0);

  // --- OrbitControls setup ---
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  // Get camera state
  const getCameraState = (): CameraState => {
    return {
      position: {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      },
      rotation: {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z,
      },
      target: {
        x: controls.target.x,
        y: controls.target.y,
        z: controls.target.z,
      },
    };
  };

  // Set camera state
  const setCameraState = (state: CameraState) => {
    camera.position.set(state.position.x, state.position.y, state.position.z);
    camera.rotation.set(state.rotation.x, state.rotation.y, state.rotation.z);
    controls.target.set(state.target.x, state.target.y, state.target.z);
    controls.update();
  };

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
    controls,
    blob: undefined,
    animate,
    getCameraState,
    setCameraState,
    cleanup,
  };
};
