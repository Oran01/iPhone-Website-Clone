import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

/**
 * ModelView Component
 *
 * This component renders a 3D view of the iPhone using Three.js and react-three-fiber.
 * It includes lighting, orbit controls for interaction, and a loader fallback while the model is loading.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.index - Index of the view (1 for small, 2 for large)
 * @param {React.MutableRefObject} props.groupRef - Reference to the model group for animations
 * @param {string} props.gsapType - GSAP animation type identifier
 * @param {React.MutableRefObject} props.controlRef - Reference for OrbitControls to track user rotation
 * @param {Function} props.setRotationState - State setter for tracking rotation angle
 * @param {string} props.size - Current size of the model (small/large)
 * @param {Object} props.item - The selected model item containing color and texture data
 * @returns {JSX.Element} The 3D model view component.
 */
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light to softly illuminate the scene */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      {/* Orbit Controls for rotating the model */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false} // Disable zooming
        enablePan={false} // Disable panning
        rotateSpeed={0.4} // Control rotation speed
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} // Store rotation state
      />
      {/* 3D Model Group */}
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        {/* Fallback loader while the model loads */}
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} // Adjust scale based on index
            item={item} // Pass model item properties
            size={size} // Pass selected size
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
