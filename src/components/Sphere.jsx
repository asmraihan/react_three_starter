import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const SphereModel = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={"#2A3842"}
          attach={"material"}
          distort={0}
          speed={0.5}
        />
      </Sphere>
    </Canvas>
  );
};

export default SphereModel;
