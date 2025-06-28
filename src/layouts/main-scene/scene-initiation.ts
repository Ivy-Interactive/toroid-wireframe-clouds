import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  blob: THREE.Object3D;
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
  // Define square corners
  const size = 1.5;
  const p0 = new THREE.Vector3(-size, -size, 0);
  const p1 = new THREE.Vector3(size, -size, 0);
  const p2 = new THREE.Vector3(size, size, 0);
  const p3 = new THREE.Vector3(-size, size, 0);

  // Curved diagonal: from p0 to p2, with a control point for the curve
  const curveSegments = 32;
  const curve = new THREE.QuadraticBezierCurve3(
    p0,
    new THREE.Vector3(0, size * 1.2, 0), // control point above center
    p2
  );
  const curvePoints = curve.getPoints(curveSegments);

  // Build geometry: 4 sides + curved diagonal
  const vertices = [
    p0, p1, p1, p2, p2, p3, p3, p0, // square edges
    ...curvePoints.slice(0, -1).flatMap((pt, i) => [pt, curvePoints[i + 1]]) // curve as line segments
  ];
  const positions = new Float32Array(vertices.length * 3);
  vertices.forEach((v, i) => {
    positions[i * 3] = v.x;
    positions[i * 3 + 1] = v.y;
    positions[i * 3 + 2] = v.z;
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Use LineSegments for wireframe look
  const material = new THREE.LineBasicMaterial({ color: 0x00ff99 });
  const mesh = new THREE.LineSegments(geometry, material);
  scene.add(mesh);

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
    geometry.dispose();
    material.dispose();
    controls.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    blob: mesh,
    animate,
    cleanup,
  };
};
