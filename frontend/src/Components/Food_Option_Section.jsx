import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// ✅ Food Images (replace these imports with actual images)
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

// Additional images for items 11–20 (replace with actual images)
import Ice_Cream from "../assets/Png/Food_Option/Ice_Cream.png";
import Chicken_Burger from "../assets/Png/Food_Option/Chicken_Burger.png";
import Veggie_Burger from "../assets/Png/Food_Option/Veggie_Burger.png";
// import Chocolate_Cake from "../assets/Png/Food_Option/Chocolate_Cake.png";
// import Grilled_Sandwich from "../assets/Png/Food_Option/Grilled_Sandwich.png";
// import Lemonade from "../assets/Png/Food_Option/Lemonade.png";
// import Pancakes from "../assets/Png/Food_Option/Pancakes.png";
// import Fried_Rice from "../assets/Png/Food_Option/Fried_Rice.png";
// import Hotdog from "../assets/Png/Food_Option/Hotdog.png";
// import Mozzarella_Sticks from "../assets/Png/Food_Option/Mozzarella_Sticks.png";

// ✅ Food Items
const foodItems = [
  { id: 1, name: "Margherita Pizza", description: "Classic cheese & tomato delight 🍕", img: Margherita_Pizza, gradient: "from-yellow-100 to-red-100", textColor: "text-red-600", subTextColor: "text-red-400" },
  { id: 2, name: "BBQ Chicken Wings", description: "Spicy, smoky & finger-licking good 🍗", img: BBQ_Chicken_Wings, gradient: "from-orange-100 to-red-200", textColor: "text-orange-600", subTextColor: "text-orange-400" },
  { id: 3, name: "Strawberry Smoothie", description: "Fresh strawberries blended to perfection 🍓🥤", img: Strawberry_Smoothie, gradient: "from-pink-100 to-red-200", textColor: "text-pink-600", subTextColor: "text-pink-400" },
  { id: 4, name: "Veggie Pizza", description: "Light, colorful, and topped with fresh veggies 🌿🍕", img: Veggie_Pizza, gradient: "from-green-100 to-emerald-200", textColor: "text-emerald-700", subTextColor: "text-emerald-500" },
  { id: 5, name: "Spicy Tacos", description: "Hot, crunchy & flavorful 🌮", img: Spicy_Tacos, gradient: "from-yellow-100 to-orange-200", textColor: "text-yellow-600", subTextColor: "text-yellow-500" },
  { id: 6, name: "Pasta Alfredo", description: "Creamy pasta with tender bites 🍝", img: Pasta_Alfredo, gradient: "from-amber-100 to-orange-100", textColor: "text-amber-700", subTextColor: "text-amber-500" },
  { id: 7, name: "Chocolate Donut", description: "Soft, sweet & chocolaty 🍩", img: Chocolate_Donut, gradient: "from-yellow-100 to-amber-200", textColor: "text-amber-800", subTextColor: "text-amber-500" },
  { id: 8, name: "Caesar Salad", description: "Fresh green with tangy dressing 🥗", img: Caesar_Salad, gradient: "from-green-100 to-emerald-200", textColor: "text-emerald-700", subTextColor: "text-emerald-500" },
  { id: 9, name: "Sushi Platter", description: "Fresh fish with perfect rice 🍣", img: Sushi_Platter, gradient: "from-blue-100 to-cyan-200", textColor: "text-cyan-700", subTextColor: "text-cyan-500" },
  { id: 10, name: "French Fries", description: "Crispy & golden brown 🍟", img: French_Fries, gradient: "from-yellow-100 to-orange-100", textColor: "text-yellow-600", subTextColor: "text-yellow-500" },

  // New items 11–20
  { id: 11, name: "Ice Cream", description: "Cold, creamy & delightful 🍨", img: Ice_Cream, gradient: "from-pink-100 to-purple-200", textColor: "text-pink-600", subTextColor: "text-purple-400" },
  { id: 12, name: "Chicken Burger", description: "Juicy grilled chicken burger 🍔", img: Chicken_Burger, gradient: "from-orange-100 to-red-200", textColor: "text-orange-600", subTextColor: "text-red-400" },
  { id: 13, name: "Veggie Burger", description: "Healthy & delicious 🌱", img: Veggie_Burger, gradient: "from-green-100 to-lime-200", textColor: "text-emerald-700", subTextColor: "text-lime-500" },
  // { id: 14, name: "Chocolate Cake", description: "Rich, moist & chocolaty 🍰", img: Chocolate_Cake, gradient: "from-amber-100 to-yellow-200", textColor: "text-amber-800", subTextColor: "text-yellow-500" },
  // { id: 15, name: "Grilled Sandwich", description: "Crispy, cheesy & warm 🥪", img: Grilled_Sandwich, gradient: "from-amber-100 to-orange-200", textColor: "text-amber-700", subTextColor: "text-orange-500" },
  // { id: 16, name: "Lemonade", description: "Refreshing & zesty 🍋🥤", img: Lemonade, gradient: "from-yellow-100 to-green-100", textColor: "text-yellow-600", subTextColor: "text-green-500" },
  // { id: 17, name: "Pancakes", description: "Fluffy pancakes with syrup 🥞", img: Pancakes, gradient: "from-yellow-100 to-orange-200", textColor: "text-yellow-600", subTextColor: "text-orange-500" },
  // { id: 18, name: "Fried Rice", description: "Savory & flavorful 🍚", img: Fried_Rice, gradient: "from-amber-100 to-red-100", textColor: "text-amber-700", subTextColor: "text-red-400" },
  // { id: 19, name: "Hotdog", description: "Classic street food 🌭", img: Hotdog, gradient: "from-red-100 to-orange-100", textColor: "text-red-600", subTextColor: "text-orange-500" },
  // { id: 20, name: "Mozzarella Sticks", description: "Cheesy & crispy 🧀", img: Mozzarella_Sticks, gradient: "from-yellow-100 to-amber-200", textColor: "text-amber-700", subTextColor: "text-yellow-500" },
];

// ✅ Shimmer Animation
const shimmerAnimation = {
  x: [0, 50, 0],
  transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
};

// ✅ Food Card Component
const FoodCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const direction = index % 2 === 0 ? 1 : -1;
  const yImage = useTransform(scrollYProgress, [0, 1], [40 * direction, -40 * direction]);
  const yText = useTransform(scrollYProgress, [0, 1], [20 * direction, -20 * direction]);
  const rotate = useTransform(scrollYProgress, [0, 1], [direction * 4, direction * -4]);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className={`flex-shrink-0 w-72 md:w-80 min-h-[26rem] bg-gradient-to-br ${item.gradient}
                  rounded-3xl p-6 flex flex-col items-center
                  shadow-[0_25px_80px_rgba(0,0,0,0.25)] relative snap-center
                  border border-white/40 backdrop-brightness-110 contrast-125 saturate-125
                  transition-all duration-500 ease-out hover:shadow-[0_40px_120px_rgba(0,0,0,0.35)]`}
    >
      {/* Image */}
      <motion.div
        style={{ y: yImage, rotate }}
        className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white mb-4"
      >
        <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
      </motion.div>

      {/* Text */}
      <motion.div style={{ y: yText }} className="flex flex-col items-center text-center mb-6">
        <h3 className={`text-xl md:text-2xl font-bold ${item.textColor} mb-1 drop-shadow-sm`}>
          {item.name}
        </h3>
        <p className={`${item.subTextColor} text-base md:text-lg leading-snug`}>
          {item.description}
        </p>
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow: "0 15px 45px rgba(0,0,0,0.35)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 220, damping: 15 }}
        className="relative overflow-hidden flex items-center justify-center gap-2
                   bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg
                   hover:bg-black font-medium transition-all duration-500 ease-out"
      >
        Order Now <FiArrowRight />
        <motion.div
          className="absolute top-0 left-0 w-16 h-full bg-white/30 transform -skew-x-12"
          animate={shimmerAnimation}
        />
      </motion.button>
    </motion.div>
  );
};

// ✅ Main FoodOptions Component
const FoodOptions = () => {
  return (
    <section
      className="relative py-20 md:py-32 rounded-3xl overflow-hidden
                 bg-white/30 backdrop-blur-3xl
                 shadow-[0_25px_60px_rgba(0,0,0,0.25),inset_0_1px_30px_rgba(255,255,255,0.5)]
                 border border-white/20"
    >
      {/* Glass Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2/3 h-1/3 bg-white/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/4 bg-white/10 blur-2xl rounded-full" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg">
          Explore Our Delicious Menu 🍽️
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Scroll through our favorites • From our kitchen to your door
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory relative z-10">
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