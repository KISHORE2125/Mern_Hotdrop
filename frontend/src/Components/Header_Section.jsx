import React from "react";
import { motion } from "framer-motion";
import Burger_Video from "../assets/Header_Video/Burger.mp4";

// Variants for motion animations
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeaderSection = React.memo(() => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/Header_Video/BurgerPoster.jpg"
        aria-hidden="true"
      >
        <source src={Burger_Video} type="video/mp4" />
        <source src="/assets/Header_Video/Burger.webm" type="video/webm" />
      </video>

      {/* Overlay with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Craving Something Special?
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          Hot meals delivered to your doorstep — fresh, fast, and full of flavor.
        </motion.p>

        <motion.button
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Explore our menu"
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Explore Menu 🚀
        </motion.button>
      </motion.div>
    </header>
  );
});

export default HeaderSection;
