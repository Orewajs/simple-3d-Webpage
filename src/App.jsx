import { Canvas } from "@react-three/fiber";
import Index from "./experience/Index";

function App() {
  const fov = window.innerHeight < 800 ? 20 : 35;

  return (
    <section className="fixed left-0 top-0  h-screen w-full ">
      <Canvas camera={{ position: [0, 0, 5], fov: fov, near: 0.1, far: 100 }}>
        <Index />
      </Canvas>
    </section>
  );
}

export default App;
