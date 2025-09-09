import React from "react";
import { motion } from "framer-motion";
import Burger_Video from "../assets/Header_Video/Burger.mp4"

const HeaderSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Burger_Video} // ✅ Must be inside public/
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // ✅ Helps smooth playback
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Craving Something Special?
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          Hot meals delivered to your doorstep — fresh, fast, and full of flavor.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg rounded-full shadow-lg"
        >
          Explore Menu 🚀
        </motion.button>
      </div>
    </section>
  );
};

export default HeaderSection;
