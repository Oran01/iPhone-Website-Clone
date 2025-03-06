import { Environment, Lightformer } from "@react-three/drei";

/**
 * Lights Component
 *
 * This component sets up the lighting for a 3D scene using @react-three/drei.
 * It includes an environment with rectangular light sources and multiple spotlights
 * to enhance the scene's illumination.
 *
 * @component
 * @returns {JSX.Element} The lighting configuration for the 3D scene.
 */
const Lights = () => {
  return (
    <group name="lights">
      {/* Environment Lighting Setup */}
      <Environment resolution={256}>
        <group>
          {/* Rectangular light source positioned at different angles */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      {/* Spotlights for Additional Scene Lighting */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // Soft edge of the shadow cast by the spotlight
        decay={0} // Light intensity remains constant over distance
        intensity={Math.PI * 0.2} // Controls brightness of the spotlight
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1} // Light dims slightly over distance
        intensity={Math.PI * 3} // Stronger intensity compared to other lights
      />
    </group>
  );
};

export default Lights;
