import * as THREE from "three";

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  cube: THREE.Mesh;
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
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 1);
  container.appendChild(renderer.domElement);

  // Create cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position camera
  camera.position.z = 5;

  // Animation function
  const animate = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  // Cleanup function
  const cleanup = () => {
    container.removeChild(renderer.domElement);
    renderer.dispose();
    geometry.dispose();
    material.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    cube,
    animate,
    cleanup,
  };
};
