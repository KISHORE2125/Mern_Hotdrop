import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import useSplashTimeout from "../Hooks/SplashScreen_Hooks";

import Order_Now from "../assets/Animation/Order_Now.json";

const SplashScreen = ({ onFinish, fade = true }) => {
  // Call onFinish after 2 seconds
  useSplashTimeout(onFinish, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <AnimatePresence>
      {fade && (
        <motion.div
          className="relative h-screen w-screen flex items-center justify-center overflow-hidden animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Main Lottie Animation */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[90%] max-h-[90%] z-10"
          >
            <Lottie animationData={Order_Now} loop={false} speed={2} />
          </motion.div>

          {/* Gradient background animation */}
          <style jsx>{`
            .animate-gradient {
              background-size: 400% 400%;
              animation: gradientBG 2s ease forwards;
            }

            @keyframes gradientBG {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
