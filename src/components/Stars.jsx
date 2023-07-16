import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { w } from "maath/dist/misc-7d870b3c.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#FF69B4'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => { 
  return (
    <div className='w-full h-[100vh] fixed bg-black z-[-1]'>
      <Canvas  camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        {/* {window.innerWidth > 800 ?  <OrbitControls/> : <></>} */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;