# Toroid Wireframe Clouds

A React + TypeScript + Vite application that generates dynamic 3D wireframe mesh visualizations. This project creates animated  that serve as an engaging background for our company website.

## Project Overview

This application renders interactive 3D plane-mesh wireframe structures with cloud-like formations, providing a modern and visually appealing background element. The mesh is built using Three.js and features:

- Dynamic wireframe plane-mesh geometry
- Real-time animation and interaction
- Responsive design for various screen sizes
- Performance-optimized rendering

## Using as a Package

### Import from Git (Recommended for Development)

You can import this package directly from Git without publishing to npm. The library is built and distributed from the `build` branch:

```bash
npm install git+https://github.com/Ivy-Interactive/toroid-wireframe-clouds.git#build
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "toroid-wireframe-clouds": "git+https://github.com/Ivy-Interactive/toroid-wireframe-clouds.git#build"
  }
}
```

### Usage Examples

#### Basic Scene Component

```tsx
import { MainScene } from 'toroid-wireframe-clouds';

function App() {
  return <MainScene />;
}
```

#### Custom Three.js Scene

```tsx
import { ThreeScene, type SceneParameters } from 'toroid-wireframe-clouds';

function MyScene() {
  const parameters: SceneParameters = {
    gridWidth: 10,
    gridHeight: 10,
    arcReach: 0.5,
    twistX: 45,
    twistY: 30,
    twistZ: 15,
    twistNoise: 0.2,
    cameraPositionX: 0,
    cameraPositionY: 0,
    cameraPositionZ: 10,
    cameraTargetX: 0,
    cameraTargetY: 0,
    cameraTargetZ: 0,
  };

  return (
    <ThreeScene 
      parameters={parameters}
      onCameraStateChange={(cameraState) => console.log('Camera:', cameraState)}
    />
  );
}
```

#### Programmatic Scene Creation

```tsx
import { createScene, type SceneSetup } from 'toroid-wireframe-clouds';

const container = document.getElementById('scene-container');
const sceneSetup: SceneSetup = createScene(container);

// Start animation loop
function animate() {
  sceneSetup.animate();
  requestAnimationFrame(animate);
}
animate();

// Cleanup when done
sceneSetup.cleanup();
```

### Available Exports

- **Components**: `MainScene`, `ThreeScene`, `SceneForm`, `StatsOverlay`, `DrawCallsOverlay`
- **Functions**: `createScene`
- **Types**: `SceneParameters`, `CameraState`, `SceneSetup`

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm package manager

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Building Library Distribution

```bash
npm run build:lib
```

The built files will be in the `dist` directory.

### Deploying to Build Branch

The library is automatically built and deployed to the `build` branch via GitHub Actions when you push to `main`. You can also manually trigger the build:

```bash
npm run deploy
```

This will:
1. Build the library
2. Switch to the `build` branch
3. Copy the built files to the root
4. Update package.json for distribution
5. Commit and push to the `build` branch

## Project Structure

```text
src/
├── components/          # React components
│   ├── draw-calls-overlay/    # Performance monitoring
│   ├── scene-form/           # Scene configuration controls
│   ├── stats-overlay/        # Performance statistics
│   └── three-scene/          # Main 3D scene component
├── layouts/             # Layout components
│   └── main-scene/      # Main scene layout
└── App.tsx             # Root application component
```