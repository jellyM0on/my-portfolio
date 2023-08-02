import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Dodecahedron, Sphere, OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, CanvasTexture } from 'three';

const createGradientTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
  
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, '#FB70D3');
  
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    return new CanvasTexture(canvas);
};

const Scene = () => {
    const gradientTexture = createGradientTexture(); 
    // Function to rotate the cube
    const rotateCube = (cube) => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    };
  
    // Use the useFrame hook to run the rotateCube function on each frame
    useFrame(({ scene }) => rotateCube(scene));
  
    return (
      <>
        <ambientLight intensity={0.1} />
        <directionalLight color='white'  position={[1, 5, 1]}/>
        <Dodecahedron args={[2.5,0]}>
            <meshStandardMaterial map={gradientTexture} wireframe={true}/>
        </Dodecahedron>
        <OrbitControls/>
    
      </>
    );
  };

  const Shape = () => {
    return (
      <Canvas>
        <Scene/>
      </Canvas>
    );
  };
  
  export default Shape;
