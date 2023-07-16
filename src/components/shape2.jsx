import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, CanvasTexture } from 'three';

const createGradientTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
  
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
        <Sphere args={[1,16,8]}>
            <meshStandardMaterial map={gradientTexture} wireframe={true}/>
        </Sphere>
        <OrbitControls/>
    
      </>
    );
  };

  const Shape2 = () => {
    return (
      <Canvas>
        <Scene />
      </Canvas>
    );
  };
  
  export default Shape2;
