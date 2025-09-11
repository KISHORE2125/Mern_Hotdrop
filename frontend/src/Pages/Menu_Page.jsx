// Pages/MenuPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

// ✅ Import Food Images
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
import Grilled_Salmon from "../assets/Png/Food_Option/Grilled_Salmon.png";
import Cheese_Sandwich from "../assets/Png/Food_Option/Cheese_Sandwich.png";
import Pancakes from "../assets/Png/Food_Option/Pancakes.png";
import Ramen_Bowl from "../assets/Png/Food_Option/Ramen_Bowl.png";
import Butter_Chicken from "../assets/Png/Food_Option/Butter_Chicken.png";
import Falafel_Wrap from "../assets/Png/Food_Option/Falafel_Wrap.png";
import Tiramisu from "../assets/Png/Food_Option/Tiramisu.png";

// ✅ Example Menu Data with matching glow colors
// ✅ Example Menu Data with matching glow colors
const menuItems = [
  // ---- Existing 20 Items ----
  { id: 1, name: "Margherita Pizza", category: "Pizza", price: 299, image: Margherita_Pizza, glow: "from-red-400/30 to-orange-400/30" },
  { id: 2, name: "BBQ Chicken Wings", category: "Chicken", price: 349, image: BBQ_Chicken_Wings, glow: "from-orange-500/30 to-red-500/30" },
  { id: 3, name: "Strawberry Smoothie", category: "Drinks", price: 149, image: Strawberry_Smoothie, glow: "from-pink-400/30 to-rose-400/30" },
  { id: 4, name: "Veggie Pizza", category: "Pizza", price: 329, image: Veggie_Pizza, glow: "from-green-400/30 to-lime-400/30" },
  { id: 5, name: "Spicy Tacos", category: "Mexican", price: 249, image: Spicy_Tacos, glow: "from-yellow-400/30 to-orange-400/30" },
  { id: 6, name: "Pasta Alfredo", category: "Pasta", price: 399, image: Pasta_Alfredo, glow: "from-yellow-300/30 to-amber-200/30" },
  { id: 7, name: "Chocolate Donut", category: "Dessert", price: 99, image: Chocolate_Donut, glow: "from-amber-700/30 to-yellow-600/30" },
  { id: 8, name: "Caesar Salad", category: "Salad", price: 199, image: Caesar_Salad, glow: "from-green-300/30 to-emerald-400/30" },
  { id: 9, name: "Sushi Platter", category: "Japanese", price: 899, image: Sushi_Platter, glow: "from-pink-300/30 to-yellow-300/30" },
  { id: 10, name: "French Fries", category: "Snacks", price: 129, image: French_Fries, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 11, name: "Ice Cream", category: "Dessert", price: 149, image: Ice_Cream, glow: "from-pink-200/30 to-purple-300/30" },
  { id: 12, name: "Chicken Burger", category: "Burgers", price: 249, image: Chicken_Burger, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 13, name: "Veggie Burger", category: "Burgers", price: 229, image: Veggie_Burger, glow: "from-green-400/30 to-lime-300/30" },
  { id: 14, name: "Grilled Salmon", category: "Seafood", price: 1199, image: Grilled_Salmon, glow: "from-orange-300/30 to-pink-300/30" },
  { id: 15, name: "Cheese Sandwich", category: "Snacks", price: 149, image: Cheese_Sandwich, glow: "from-yellow-200/30 to-amber-300/30" },
  { id: 16, name: "Pancakes", category: "Breakfast", price: 179, image: Pancakes, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 17, name: "Ramen Bowl", category: "Japanese", price: 499, image: Ramen_Bowl, glow: "from-red-300/30 to-orange-400/30" },
  { id: 18, name: "Butter Chicken", category: "Indian", price: 349, image: Butter_Chicken, glow: "from-orange-500/30 to-red-500/30" },
  { id: 19, name: "Falafel Wrap", category: "Middle Eastern", price: 229, image: Falafel_Wrap, glow: "from-green-300/30 to-emerald-400/30" },
  { id: 20, name: "Tiramisu", category: "Dessert", price: 299, image: Tiramisu, glow: "from-amber-400/30 to-yellow-300/30" },

  // ---- New Items (21–60) ----
  { id: 21, name: "Pepperoni Pizza", category: "Pizza", price: 349, image: Veggie_Pizza, glow: "from-red-500/30 to-yellow-400/30" },
  { id: 22, name: "Garlic Bread", category: "Snacks", price: 129, image: Cheese_Sandwich, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 23, name: "Mango Lassi", category: "Drinks", price: 99, image: Strawberry_Smoothie, glow: "from-yellow-300/30 to-orange-300/30" },
  { id: 24, name: "Cold Coffee", category: "Drinks", price: 149, image: Strawberry_Smoothie, glow: "from-brown-300/30 to-yellow-200/30" },
  { id: 25, name: "Blueberry Muffin", category: "Dessert", price: 89, image: Chocolate_Donut, glow: "from-purple-300/30 to-blue-300/30" },
  { id: 26, name: "Veg Hakka Noodles", category: "Indian", price: 179, image: Ramen_Bowl, glow: "from-green-300/30 to-orange-300/30" },
  { id: 27, name: "Chicken Biryani", category: "Indian", price: 299, image: Butter_Chicken, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 28, name: "Mutton Kebab", category: "Indian", price: 399, image: Butter_Chicken, glow: "from-red-400/30 to-orange-400/30" },
  { id: 29, name: "Onion Rings", category: "Snacks", price: 139, image: French_Fries, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 30, name: "Fish Tacos", category: "Mexican", price: 249, image: Spicy_Tacos, glow: "from-yellow-300/30 to-orange-400/30" },
  { id: 31, name: "Veg Spring Roll", category: "Snacks", price: 159, image: Falafel_Wrap, glow: "from-green-300/30 to-emerald-300/30" },
  { id: 32, name: "Club Sandwich", category: "Snacks", price: 189, image: Cheese_Sandwich, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 33, name: "Avocado Salad", category: "Salad", price: 219, image: Caesar_Salad, glow: "from-green-400/30 to-lime-400/30" },
  { id: 34, name: "Greek Salad", category: "Salad", price: 229, image: Caesar_Salad, glow: "from-green-400/30 to-blue-300/30" },
  { id: 35, name: "Fried Rice", category: "Indian", price: 199, image: Ramen_Bowl, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 36, name: "Dal Makhani", category: "Indian", price: 249, image: Butter_Chicken, glow: "from-orange-300/30 to-brown-300/30" },
  { id: 37, name: "Chole Bhature", category: "Indian", price: 229, image: Butter_Chicken, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 38, name: "Veg Pulao", category: "Indian", price: 199, image: Ramen_Bowl, glow: "from-green-300/30 to-yellow-200/30" },
  { id: 39, name: "Idli Sambar", category: "Breakfast", price: 99, image: Pancakes, glow: "from-orange-300/30 to-yellow-300/30" },
  { id: 40, name: "Masala Dosa", category: "Breakfast", price: 149, image: Pancakes, glow: "from-yellow-300/30 to-orange-400/30" },
  { id: 41, name: "Omelette", category: "Breakfast", price: 89, image: Pancakes, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 42, name: "French Toast", category: "Breakfast", price: 129, image: Pancakes, glow: "from-yellow-300/30 to-amber-300/30" },
  { id: 43, name: "Chicken Shawarma", category: "Middle Eastern", price: 249, image: Falafel_Wrap, glow: "from-red-300/30 to-yellow-300/30" },
  { id: 44, name: "Hummus with Pita", category: "Middle Eastern", price: 199, image: Falafel_Wrap, glow: "from-yellow-200/30 to-brown-300/30" },
  { id: 45, name: "Baklava", category: "Dessert", price: 299, image: Tiramisu, glow: "from-yellow-300/30 to-brown-400/30" },
  { id: 46, name: "Shish Kebab", category: "Middle Eastern", price: 349, image: Falafel_Wrap, glow: "from-red-300/30 to-orange-300/30" },
  { id: 47, name: "Tempura", category: "Japanese", price: 399, image: Sushi_Platter, glow: "from-yellow-200/30 to-red-300/30" },
  { id: 48, name: "Miso Soup", category: "Japanese", price: 149, image: Ramen_Bowl, glow: "from-green-200/30 to-yellow-200/30" },
  { id: 49, name: "Udon Noodles", category: "Japanese", price: 249, image: Ramen_Bowl, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 50, name: "Teriyaki Chicken", category: "Japanese", price: 349, image: Sushi_Platter, glow: "from-orange-300/30 to-red-400/30" },
  { id: 51, name: "Lobster Roll", category: "Seafood", price: 1399, image: Grilled_Salmon, glow: "from-orange-400/30 to-pink-400/30" },
  { id: 52, name: "Prawn Curry", category: "Seafood", price: 799, image: Grilled_Salmon, glow: "from-red-400/30 to-orange-400/30" },
  { id: 53, name: "Crab Cakes", category: "Seafood", price: 999, image: Grilled_Salmon, glow: "from-yellow-300/30 to-orange-300/30" },
  { id: 54, name: "Clam Chowder", category: "Seafood", price: 699, image: Grilled_Salmon, glow: "from-yellow-200/30 to-white/30" },
  { id: 55, name: "Cupcake", category: "Dessert", price: 99, image: Chocolate_Donut, glow: "from-pink-300/30 to-yellow-300/30" },
  { id: 56, name: "Brownie", category: "Dessert", price: 129, image: Chocolate_Donut, glow: "from-brown-300/30 to-yellow-200/30" },
  { id: 57, name: "Cheesecake", category: "Dessert", price: 199, image: Tiramisu, glow: "from-yellow-200/30 to-pink-200/30" },
  { id: 58, name: "Panna Cotta", category: "Dessert", price: 249, image: Tiramisu, glow: "from-red-200/30 to-yellow-200/30" },
  { id: 59, name: "Smoothie Bowl", category: "Breakfast", price: 179, image: Strawberry_Smoothie, glow: "from-purple-200/30 to-pink-200/30" },
  { id: 60, name: "Protein Shake", category: "Drinks", price: 199, image: Strawberry_Smoothie, glow: "from-yellow-200/30 to-brown-300/30" },
];


const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 px-6 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-25">
        <h1 className=" text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Premium Menu ✨
        </h1>
        <p className="text-gray-700 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Experience luxury dining with fresh ingredients, crafted flavors, and a touch of elegance.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {["All","Pizza","Burgers","Chicken","Pasta","Dessert","Drinks","Snacks","Salad","Japanese","Mexican","Seafood","Breakfast","Indian","Middle Eastern"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all backdrop-blur-md ${
              activeCategory === cat
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg ring-2 ring-red-300/50"
                : "bg-white/70 border border-gray-200 text-gray-600 hover:bg-white shadow-sm"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
              className="relative bg-gradient-to-br from-white/90 via-gray-50 to-gray-100 backdrop-blur-xl rounded-3xl 
                         shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]
                         p-7 flex flex-col items-center text-center transform-gpu transition-all duration-500 border border-gray-100 group"
            >
              {/* Glow Accent */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700`}
              ></div>

              {/* Food Image */}
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-pink-100 to-red-200 
                              flex items-center justify-center shadow-[inset_0_8px_16px_rgba(255,255,255,0.6)] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                {/* Price Badge (₹ INR) */}
<span className="absolute bottom-2 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 
                 text-gray-900 px-3 py-1 text-xs font-bold rounded-full 
                 shadow-[0_6px_12px_rgba(0,0,0,0.25)] ring-2 ring-yellow-200">
  ₹{item.price.toLocaleString("en-IN")}
</span>


              </div>

              {/* Card Content */}
              <h3 className="mt-6 text-lg font-extrabold text-gray-900 tracking-tight drop-shadow-md">
                {item.name}
              </h3>
              <span className="text-xs mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 
                               text-gray-700 shadow-inner font-medium">
                {item.category}
              </span>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.2, boxShadow: "0px 12px 30px rgba(220,38,38,0.45)" }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 p-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 
                           hover:from-red-600 hover:to-red-700 text-white 
                           shadow-[0_10px_20px_rgba(0,0,0,0.25)] ring-2 ring-red-300/40 transition-all duration-300"
              >
                <FiShoppingCart className="w-6 h-6 drop-shadow-sm" />
              </motion.button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">No items found 😔</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
