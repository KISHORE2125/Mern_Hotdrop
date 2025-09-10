import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// ✅ Food Images
import Margherita_Pizza from "../assets/Png/Food_Option/Margherita_Pizza.png";
import BBQ_Chicken_Wings from "../assets/Png/Food_Option/BBQ_Chicken_Wings.png";
import Strawberry_Smoothie from "../assets/Png/Food_Option/Strawberry_Smoothie.png";
import Veggie_Pizza from "../assets/Png/Food_Option/Veggie_Pizza.png";
import Spicy_Tacos from "../assets/Png/Food_Option/Spicy_Tacos.png";
import Pasta_Alfredo from "../assets/Png/Food_Option/Pasta_Alfredo.png";
import Chocolate_Donut from "../assets/Png/Food_Option/Chocolate_Donut.png";
import Caesar_Salad from "../assets/Png/Food_Option/Caesar_Salad.png";
import Sushi_Platter from "../assets/Png/Food_Option/Sushi_Platter.png";
import French_Fries from "../assets/Png/Food_Option/French_Fries.png";
import Ice_Cream from "../assets/Png/Food_Option/Ice_Cream.png";
import Chicken_Burger from "../assets/Png/Food_Option/Chicken_Burger.png";
import Veggie_Burger from "../assets/Png/Food_Option/Veggie_Burger.png";

// ✅ Food Items
const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese & tomato delight 🍕",
    img: Margherita_Pizza,
    gradient: "from-yellow-100 to-red-100",
    textColor: "text-red-600",
    subTextColor: "text-red-400",
  },
  {
    id: 2,
    name: "BBQ Chicken Wings",
    description: "Spicy, smoky & finger-licking good 🍗",
    img: BBQ_Chicken_Wings,
    gradient: "from-orange-100 to-red-200",
    textColor: "text-orange-600",
    subTextColor: "text-orange-400",
  },
  {
    id: 3,
    name: "Strawberry Smoothie",
    description: "Fresh strawberries blended to perfection 🍓🥤",
    img: Strawberry_Smoothie,
    gradient: "from-pink-100 to-red-200",
    textColor: "text-pink-600",
    subTextColor: "text-pink-400",
  },
  {
    id: 4,
    name: "Veggie Pizza",
    description: "Light, colorful, and topped with fresh veggies 🌿🍕",
    img: Veggie_Pizza,
    gradient: "from-green-100 to-emerald-200",
    textColor: "text-emerald-700",
    subTextColor: "text-emerald-500",
  },
  {
    id: 5,
    name: "Spicy Tacos",
    description: "Hot, crunchy & flavorful 🌮",
    img: Spicy_Tacos,
    gradient: "from-yellow-100 to-orange-200",
    textColor: "text-yellow-600",
    subTextColor: "text-yellow-500",
  },
  {
    id: 6,
    name: "Pasta Alfredo",
    description: "Creamy pasta with tender bites 🍝",
    img: Pasta_Alfredo,
    gradient: "from-amber-100 to-orange-100",
    textColor: "text-amber-700",
    subTextColor: "text-amber-500",
  },
  {
    id: 7,
    name: "Chocolate Donut",
    description: "Soft, sweet & chocolaty 🍩",
    img: Chocolate_Donut,
    gradient: "from-yellow-100 to-amber-200",
    textColor: "text-amber-800",
    subTextColor: "text-amber-500",
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Fresh green with tangy dressing 🥗",
    img: Caesar_Salad,
    gradient: "from-green-100 to-emerald-200",
    textColor: "text-emerald-700",
    subTextColor: "text-emerald-500",
  },
  {
    id: 9,
    name: "Sushi Platter",
    description: "Fresh fish with perfect rice 🍣",
    img: Sushi_Platter,
    gradient: "from-blue-100 to-cyan-200",
    textColor: "text-cyan-700",
    subTextColor: "text-cyan-500",
  },
  {
    id: 10,
    name: "French Fries",
    description: "Crispy & golden brown 🍟",
    img: French_Fries,
    gradient: "from-yellow-100 to-orange-100",
    textColor: "text-yellow-600",
    subTextColor: "text-yellow-500",
  },
  {
    id: 11,
    name: "Ice Cream",
    description: "Cold, creamy & delightful 🍨",
    img: Ice_Cream,
    gradient: "from-pink-100 to-purple-200",
    textColor: "text-pink-600",
    subTextColor: "text-purple-400",
  },
  {
    id: 12,
    name: "Chicken Burger",
    description: "Juicy grilled chicken burger 🍔",
    img: Chicken_Burger,
    gradient: "from-orange-100 to-red-200",
    textColor: "text-orange-600",
    subTextColor: "text-red-400",
  },
  {
    id: 13,
    name: "Veggie Burger",
    description: "Healthy & delicious 🌱",
    img: Veggie_Burger,
    gradient: "from-green-100 to-lime-200",
    textColor: "text-emerald-700",
    subTextColor: "text-lime-500",
  },
];

// ✅ Shimmer Animation
const shimmerAnimation = {
  x: [0, 140, 0],
  transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
};

// ✅ Food Card
const FoodCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const direction = index % 2 === 0 ? 1 : -1;
  const yImage = useTransform(scrollYProgress, [0, 1], [30 * direction, -30 * direction]);
  const yText = useTransform(scrollYProgress, [0, 1], [15 * direction, -15 * direction]);
  const rotate = useTransform(scrollYProgress, [0, 1], [direction * 3, direction * -3]);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.08,
        rotateX: 6,
        rotateY: -6,
        boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className={`flex-shrink-0 w-64 md:w-72 h-[21rem] bg-gradient-to-br ${item.gradient}
        rounded-3xl p-6 flex flex-col justify-between items-center snap-center
        border border-white/50 shadow-lg backdrop-brightness-110 contrast-125 saturate-125
        transition-all duration-500 ease-out`}
    >
      {/* Image */}
      <motion.div
        style={{ y: yImage, rotate }}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden 
                   shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-4 border-white/80 
                   bg-white/40 backdrop-blur-md"
      >
        <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
      </motion.div>

      {/* Text */}
      <motion.div style={{ y: yText }} className="flex flex-col items-center gap-1 px-2 text-center">
        <h3 className={`text-lg md:text-xl font-extrabold tracking-wide drop-shadow-sm ${item.textColor}`}>
          {item.name}
        </h3>
        <p className={`${item.subTextColor} text-sm md:text-base leading-snug opacity-90`}>
          {item.description}
        </p>
      </motion.div>

      {/* Button with Glossy Shimmer */}
      <motion.button
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 220, damping: 15 }}
        className="relative overflow-hidden flex items-center justify-center gap-2 
                   bg-black text-white px-5 py-2 rounded-xl shadow-lg 
                   hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)] font-semibold 
                   text-sm md:text-base transition-all duration-500 ease-out"
      >
        Order Now <FiArrowRight />
        <motion.div
          className="absolute top-0 left-0 w-20 h-full 
                     bg-gradient-to-r from-transparent via-white to-transparent
                     opacity-95 blur-md brightness-125 transform -skew-x-12"
          animate={shimmerAnimation}
        />
      </motion.button>
    </motion.div>
  );
};

// ✅ Main Component
const FoodOptions = () => {
  return (
    <section
      className="relative py-20 md:py-28 rounded-3xl overflow-hidden 
                 bg-white/10 backdrop-blur-3xl 
                 shadow-[0_25px_80px_rgba(0,0,0,0.35),inset_0_1px_20px_rgba(255,255,255,0.3)] 
                 border border-white/20"
    >
      {/* Gradient Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-50/10 pointer-events-none" />

      {/* Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2/3 h-1/3 bg-white/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/4 bg-yellow-200/10 blur-2xl rounded-full" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14 relative z-10"
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold 
                     bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-700 
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Explore Our Premium Menu ✨
        </h2>
        <p className="text-gray-700/80 mt-3 text-lg md:text-xl font-medium">
          Curated with passion • Served with elegance
        </p>
      </motion.div>

      {/* Cards */}
      <div
        className="flex gap-8 md:gap-10 px-6 md:px-16 overflow-x-auto 
                   scrollbar-hide snap-x snap-mandatory relative z-10"
      >
        {foodItems.map((item, index) => (
          <FoodCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
};

export default FoodOptions;
