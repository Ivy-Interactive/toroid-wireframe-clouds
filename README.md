# Toroid Wireframe Clouds

A React + TypeScript + Vite application that generates dynamic 3D wireframe mesh visualizations. This project creates animated  that serve as an engaging background for our company website.

## Project Overview

This application renders interactive 3D plane-mesh wireframe structures with cloud-like formations, providing a modern and visually appealing background element. The mesh is built using Three.js and features:

- Dynamic wireframe plane-mesh geometry
- Real-time animation and interaction
- Responsive design for various screen sizes
- Performance-optimized rendering

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

The built files will be in the `dist` directory, ready for deployment.

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