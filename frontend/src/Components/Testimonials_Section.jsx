import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Replace with your actual image paths
import User1 from "../assets/Png/Food_Option/Chicken_Burger.png";
import User2 from "../assets/Png/Food_Option/Chicken_Burger.png";
import User3 from "../assets/Png/Food_Option/Chicken_Burger.png";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The burger was juicy and flavorful! The limited-time offer made it even better. Will definitely order again.",
      rating: 5,
      image: User1,
    },
    {
      name: "Michael R.",
      text: "Fast delivery, amazing taste, and the discount sealed the deal. Highly recommend!",
      rating: 5,
      image: User2,
    },
    {
      name: "Aisha K.",
      text: "Loved the crispy edges on the burger. Plus, the deal felt like a steal! ⭐⭐⭐⭐⭐",
      rating: 5,
      image: User3,
    },
  ];

  return (
    <section className="mt-28 px-6 md:px-20 relative z-10">
      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl font-extrabold text-center mb-16
                   bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        What People Are Saying
      </h2>

      {/* Slider Container */}
      <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-6 scrollbar-hide">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="min-w-[300px] md:min-w-[400px] snap-center 
                       bg-gradient-to-b from-gray-900/70 to-black/80 
                       backdrop-blur-lg border border-yellow-500/30 
                       rounded-3xl p-8 shadow-lg flex flex-col items-center"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.6)]">
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review */}
            <p className="mt-6 text-gray-200 italic text-center leading-relaxed">
              “{review.text}”
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-400 text-lg drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                />
              ))}
            </div>

            {/* Name */}
            <span className="mt-4 text-yellow-300 font-bold text-lg tracking-wide drop-shadow-md">
              {review.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
