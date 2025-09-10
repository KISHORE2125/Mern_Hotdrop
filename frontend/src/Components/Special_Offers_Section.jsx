import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Replace with your actual promo image path
import OfferImage from "../assets/Png/Food_Option/Chicken_Burger.png";

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    let totalSeconds = 2 * 60 * 60; // 2 hours

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
        return;
      }
      totalSeconds--;

      const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const secs = String(totalSeconds % 60).padStart(2, "0");

      setTimeLeft(`${hrs}:${mins}:${secs}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Split time for digital box look
  const [hrs, mins, secs] = timeLeft.split(":");

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-28 px-6 md:px-20 relative z-10"
    >
      <div
        className="flex flex-col md:flex-row items-center overflow-hidden 
                   bg-gradient-to-r from-gray-900 to-black
                   border border-yellow-600/40 backdrop-blur-xl 
                   shadow-2xl rounded-3xl p-10 md:p-14 gap-10"
      >
        {/* Left Side - Smaller Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center md:w-1/2"
        >
          <img
            src={OfferImage}
            alt="Special Offer"
            className="w-64 h-64 md:w-72 md:h-72 object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          {/* Subtitle */}
          <span className="uppercase tracking-widest text-sm font-semibold text-yellow-400">
            ⏳ Limited Time Only
          </span>

          {/* Title */}
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Indulge in <span className="text-yellow-400">25% OFF</span> Today
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 max-w-md leading-relaxed">
            Experience gourmet flavors with a classic twist. Secure your discount before the clock hits zero!
          </p>

          {/* Countdown Timer - Flip Animation */}
          <div className="flex gap-4">
            {[hrs, mins, secs].map((unit, i) => (
              <motion.div
                key={i}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: [0, 180, 360] }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 59, // flips once per minute/second
                }}
                className="px-5 py-4 rounded-lg bg-gradient-to-b from-yellow-500 to-yellow-600 
                           text-black font-extrabold text-2xl shadow-lg min-w-[75px] text-center 
                           border-2 border-yellow-700 perspective-1000"
              >
                {unit}
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Golden Glow */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(250,204,21,0.8)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="mt-6 flex items-center gap-2 px-8 py-3 rounded-xl 
                       bg-gradient-to-r from-yellow-500 to-yellow-600 
                       text-black font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            Order Now <FiArrowRight className="text-xl" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
