import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// ✅ Food Images (10 provided)
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

// ✅ Food Items (20 total)
const foodItems = [
  { id: 1, name: "Margherita Pizza", description: "Classic cheese & tomato delight 🍕", img: Margherita_Pizza },
  { id: 2, name: "BBQ Chicken Wings", description: "Spicy, smoky & finger-licking good 🍗", img: BBQ_Chicken_Wings },
  { id: 3, name: "Strawberry Smoothie", description: "Fresh strawberries blended to perfection 🍓🥤", img: Strawberry_Smoothie },
  { id: 4, name: "Veggie Pizza", description: "Loaded with fresh vegetables 🍕", img: Veggie_Pizza },
  { id: 5, name: "Spicy Tacos", description: "Hot, crunchy & flavorful 🌮", img: Spicy_Tacos },
  { id: 6, name: "Pasta Alfredo", description: "Creamy pasta with tender bites 🍝", img: Pasta_Alfredo },
  { id: 7, name: "Chocolate Donut", description: "Soft, sweet & chocolaty 🍩", img: Chocolate_Donut },
  { id: 8, name: "Caesar Salad", description: "Fresh greens with tangy dressing 🥗", img: Caesar_Salad },
  { id: 9, name: "Sushi Platter", description: "Fresh fish with perfect rice 🍣", img: Sushi_Platter },
  { id: 10, name: "French Fries", description: "Crispy & golden brown 🍟", img: French_Fries },

  // Extra 10 Items (reusing images)
  { id: 11, name: "Cheeseburger", description: "Juicy beef patty with melted cheese 🍔", img: BBQ_Chicken_Wings },
  { id: 12, name: "Grilled Sandwich", description: "Crispy, cheesy & delicious 🥪", img: Veggie_Pizza },
  { id: 13, name: "Mango Smoothie", description: "Tropical sweetness in a glass 🥭🥤", img: Strawberry_Smoothie },
  { id: 14, name: "Pepperoni Pizza", description: "Savory pepperoni & melted cheese 🍕", img: Margherita_Pizza },
  { id: 15, name: "Hot Dog", description: "Classic street food favorite 🌭", img: French_Fries },
  { id: 16, name: "Ice Cream Sundae", description: "Cool, creamy & indulgent 🍨", img: Chocolate_Donut },
  { id: 17, name: "Grilled Salmon", description: "Perfectly cooked & seasoned 🐟", img: Sushi_Platter },
  { id: 18, name: "Garlic Bread", description: "Crispy, buttery & garlicky 🥖", img: Pasta_Alfredo },
  { id: 19, name: "Chicken Biryani", description: "Aromatic rice with tender chicken 🍛", img: BBQ_Chicken_Wings },
  { id: 20, name: "Falafel Wrap", description: "Crispy falafel in pita bread 🥙", img: Veggie_Pizza },
];

// ✅ Floating Animations
const animations = [
  { y: [0, -10, 0], rotate: [0, 2, -2, 0] },
  { y: [0, -15, 0], scale: [1, 1.05, 1] },
  { x: [0, 8, -8, 0], rotate: [0, -3, 3, 0] },
];

// ✅ Shimmer Animation
const shimmerAnimation = {
  x: [0, 50, 0],
  transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
};

const FoodOptions = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden rounded-3xl"
      style={{
        background: "linear-gradient(270deg, #ff758c, #ff7eb3, #ff758c)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        boxShadow:
          "0 60px 150px rgba(0,0,0,0.35), 0 25px 80px rgba(0,0,0,0.2), inset 0 0 30px rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl">
          Explore Our Delicious Menu 🍽️
        </h2>
        <p className="text-white/90 mt-2 text-lg">
          Scroll through our favorites • From our kitchen to your door
        </p>
      </motion.div>

      {/* Horizontal Scroll Cards */}
      <motion.div
        ref={scrollRef}
        style={{ x }}
        className="flex gap-8 px-6 md:px-12 cursor-grab"
      >
        {foodItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.1,
              rotateX: 5,
              rotateY: -5,
              boxShadow:
                "0 60px 150px rgba(255,99,132,0.6), 0 25px 80px rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex-shrink-0 w-72 md:w-80 bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-[0_35px_100px_rgba(0,0,0,0.35),0_15px_50px_rgba(0,0,0,0.2)] relative"
          >
            {/* Floating Image with Neon Glow */}
            <motion.div
              className="w-44 h-44 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-white relative"
              animate={animations[index % animations.length]}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{
                  boxShadow: `0 0 40px 20px rgba(255, 99, 132, 0.4)`,
                }}
              />
            </motion.div>

            {/* Food Info */}
            <div className="flex flex-col items-center justify-between text-center flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-2 drop-shadow-lg">
                {item.name}
              </h3>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                {item.description}
              </p>

              {/* Order Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0 15px 35px rgba(239,68,68,0.7)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
                className="relative overflow-hidden flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 font-medium"
              >
                Order Now <FiArrowRight />
                <motion.div
                  className="absolute top-0 left-0 w-16 h-full bg-white/30 transform -skew-x-12"
                  animate={shimmerAnimation}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default FoodOptions;
