import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  blob: THREE.Mesh;
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

  // Torus parameters
  const torusRadius = 1.5;
  const tubeRadius = 0.5;
  const radialSegments = 128;
  const tubularSegments = 64;
  const twistAmount = Math.PI / 3; // moderate twist

  // Create torus geometry
  const torusGeometry = new THREE.TorusGeometry(
    torusRadius,
    tubeRadius,
    radialSegments,
    tubularSegments
  );

  // Apply initial twist to the torus
  for (let i = 0; i < torusGeometry.attributes.position.count; i++) {
    const pos = new THREE.Vector3().fromBufferAttribute(
      torusGeometry.attributes.position,
      i
    );
    // Twist along the torus ring
    const angle = (pos.x + pos.y) * twistAmount * 0.1;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    // Apply twist to z/y
    const y = pos.y * cos - pos.z * sin;
    const z = pos.y * sin + pos.z * cos;
    torusGeometry.attributes.position.setY(i, y);
    torusGeometry.attributes.position.setZ(i, z);
  }
  torusGeometry.attributes.position.needsUpdate = true;

  // Create wireframe material
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff99,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  });

  const torus = new THREE.Mesh(torusGeometry, wireframeMaterial);
  scene.add(torus);


  // Add some ambient light to make it more visible
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  // Position camera
  camera.position.z = 5;

  // --- OrbitControls setup ---
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  // Animation function: mutate torus vertices for blobby effect
  const animate = () => {
    const time = performance.now() * 0.001;
    const positions = torusGeometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      // Get original position (approximate by using initial torus math)
      const u = (i % tubularSegments) / tubularSegments * Math.PI * 2;
      const v = Math.floor(i / tubularSegments) / radialSegments * Math.PI * 2;
      // Animate radius with a sine wave for blobby effect
      const blob = 0.08 * Math.sin(4 * u + time * 2 + 2 * Math.cos(v + time)) +
                   0.04 * Math.cos(6 * v + time * 1.5);
      const r = tubeRadius + blob;
      // Torus parametric equations
      const x = (torusRadius + r * Math.cos(v)) * Math.cos(u);
      const y = (torusRadius + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);
      positions.setXYZ(i, x, y, z);
    }
    positions.needsUpdate = true;
    controls.update(); // update orbit controls
    renderer.render(scene, camera);
  };

  // Cleanup function
  const cleanup = () => {
    container.removeChild(renderer.domElement);
    renderer.dispose();
    torusGeometry.dispose();
    wireframeMaterial.dispose();
    controls.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    blob: torus,
    animate,
    cleanup,
  };
};
