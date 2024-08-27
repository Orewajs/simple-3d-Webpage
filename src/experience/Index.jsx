import { Environment, Sparkles } from "@react-three/drei";
import Shapes from "./Shapes";

const Index = () => {
  return (
    <>
      <Environment preset="city" />
      <color attach={"background"} args={["#182122"]} />
      <Shapes />
      <Sparkles scale={5} count={1000} />
    </>
  );
};

export default Index;
