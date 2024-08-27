import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const transmissionConfig = {
  transmission: 0.9,
  transmissionBias: 0.5,
  thickness: 0.1,
  attenuationDistance: 20,
  ior: 1.5,
  scatterDistance: 0.1,
  color: "#fff",
  roughness: 0.1,
  metalness: 0,
};

const torus = [
  { x: 0.75, y: -0.25, rotation: Math.random() * Math.PI },
  { x: -0.25, y: 0.25, rotation: Math.random() * Math.PI },
];
const spheres = [
  { x: -0.75, y: 0.25, scale: 0.25 },
  { x: -0.7, y: -0.25, scale: 1 },
  { x: 0.1, y: -0.35, scale: 0.25 },
  { x: 0.65, y: 0.3, scale: 0.65 },
  { x: 0.9, y: 0.1, scale: 0.25 },
];
const Shapes = () => {
  const group = useRef();

  useFrame((state) => {
    group.current.children.forEach((child, index) => {
      child.rotation.x = torus[index].rotation + state.clock.getElapsedTime();
      child.rotation.y = torus[index].rotation + state.clock.getElapsedTime();
    });
  });
  return (
    <>
      <group ref={group}>
        {torus.map((torus, index) => {
          return (
            <mesh
              key={index}
              position={[torus.x, torus.y, 0]}
              rotation={[torus.rotation, torus.rotation, torus.rotation]}
            >
              <torusGeometry args={[0.2, 0.05, 64, 100]} />
              <MeshTransmissionMaterial {...transmissionConfig} />
            </mesh>
          );
        })}
      </group>
      {spheres.map((sphere, index) => {
        return (
          <mesh
            key={index}
            position={[sphere.x, sphere.y, 0]}
            scale={sphere.scale}
          >
            <sphereGeometry args={[0.2, 64, 64]} />
            <MeshTransmissionMaterial {...transmissionConfig} />
          </mesh>
        );
      })}
    </>
  );
};

export default Shapes;
