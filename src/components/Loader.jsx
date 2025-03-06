import { Html } from "@react-three/drei";
import React from "react";
import { motion } from "framer-motion";

/**
 * Loader Component
 *
 * A simple spinning loader displayed while content is loading.
 * It uses @react-three/drei's Html component to overlay the loader
 * within a 3D scene and Framer Motion for fade-in animation.
 *
 * @component
 * @returns {JSX.Element} The loading animation component.
 */
const Loader = () => {
  return (
    <Html center>
      {/* Spinning loader animation */}
      <motion.div
        className="w-16 h-16 border-4 border-t-white border-gray-300 rounded-full"
        style={{
          animation: "spin 1s linear infinite", // CSS animation for rotation
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* CSS Keyframes for Spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;
