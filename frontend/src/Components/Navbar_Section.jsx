// Navbar.jsx
import React from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Deliverylogo from "../assets/Logo/Delivery_Riding.json";
import { useNavbar } from "../Hooks/Navbar_Hooks";

const Navbar = ({ showAfterSplash = true }) => {
  const { mobileMenuOpen, toggleMobileMenu, searchOpen, toggleSearch, scrolled } = useNavbar();

  const variants = {
    linkItem: {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } },
      hoverX: { scale: 1.2, rotateX: 15 },
      hoverY: { scale: 1.15, rotateY: 12 },
    },
    mobileMenu: {
      hidden: { x: "100%", rotateY: 40, opacity: 0 },
      visible: { x: 0, rotateY: 0, opacity: 1, transition: { type: "tween", duration: 0.5, staggerChildren: 0.05 } },
      exit: { x: "100%", rotateY: 40, opacity: 0, transition: { type: "tween", duration: 0.3 } },
    },
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } },
  };

  return (
    <AnimatePresence>
      {showAfterSplash && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          className={`fixed top-0 left-0 w-full backdrop-blur-lg z-50 transition-all duration-500 ${
            scrolled ? "bg-pink-100 shadow-lg h-20" : "bg-pink-100 shadow-md h-24"
          }`}
          style={{ perspective: "1500px" }}
        >
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-full">

              {/* Logo */}
              <motion.div
                variants={variants.linkItem}
                whileHover={{ rotateY: 15, scale: 1.1 }}
                className="flex items-center cursor-pointer drop-shadow-lg"
              >
                <div className={`transition-all duration-500 ${scrolled ? "w-14 h-14" : "w-20 h-20"}`}>
                  <Lottie animationData={Deliverylogo} loop />
                </div>
                <span className={`font-bold text-red-600 ml-2 drop-shadow-lg transition-all duration-500 ${
                  scrolled ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
                }`}>
                  Hot Drop!
                </span>
              </motion.div>

              {/* Desktop Links */}
              <motion.div
                className="hidden md:flex flex-1 justify-center items-center space-x-8 text-black"
                variants={variants.container}
                initial="hidden"
                animate="visible"
              >
                {["Home", "Restaurants", "Offers", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-bold hover:text-red-500 transition-colors duration-300"
                    variants={variants.linkItem}
                    whileHover={variants.linkItem.hoverX}
                  >
                    {link}
                  </motion.a>
                ))}

                {/* Desktop Search */}
                <motion.div variants={variants.linkItem} whileHover={{ scale: 1.05 }} className="relative w-72">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-4 pr-10 py-3 rounded-full border border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg w-full text-lg"
                  />
                  <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl" />
                </motion.div>
              </motion.div>

              {/* Desktop Buttons */}
              <motion.div className="hidden md:flex items-center space-x-6">
                <motion.button
                  className="px-7 py-3 border border-red-500 text-red-600 font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-500 hover:text-white text-lg"
                  variants={variants.linkItem}
                  whileHover={variants.linkItem.hoverY}
                >
                  Sign Up
                </motion.button>
                <motion.button
                  className="px-7 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-600 text-lg"
                  variants={variants.linkItem}
                  whileHover={{ scale: 1.1, rotateY: -10 }}
                >
                  Sign In
                </motion.button>
              </motion.div>

              {/* Mobile Hamburger */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleSearch}
                  className="p-3 rounded-full bg-gray-100 hover:bg-pink-200 text-gray-700 hover:text-red-600 shadow-md"
                >
                  <FiSearch className="text-2xl" />
                </button>
                <button onClick={toggleMobileMenu} className="text-black text-4xl">
                  {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={variants.mobileMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden bg-pink-100 backdrop-blur-lg shadow-2xl fixed top-0 right-0 h-full w-3/4 z-50"
              >
                <div className="flex justify-end p-4">
                  <button onClick={toggleMobileMenu} className="text-3xl text-red-600 hover:text-red-800"><FiX /></button>
                </div>
                <div className="flex flex-col px-4 py-8 space-y-6 text-black text-2xl">
                  {["Home", "Restaurants", "Offers", "Contact"].map(link => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-red-500 font-bold transition-colors duration-300 drop-shadow-md"
                      variants={variants.linkItem}
                      whileHover={{ scale: 1.15, rotateX: 10 }}
                    >
                      {link}
                    </motion.a>
                  ))}
                  <motion.button
                    className="px-7 py-3 border border-red-500 text-red-600 font-semibold rounded-lg hover:bg-red-500 hover:text-white"
                    variants={variants.linkItem}
                    whileHover={{ scale: 1.15, rotateY: 8 }}
                  >
                    Sign Up
                  </motion.button>
                  <motion.button
                    className="px-7 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                    variants={variants.linkItem}
                    whileHover={{ scale: 1.15, rotateY: -8 }}
                  >
                    Sign In
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Search Overlay */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-lg"
                >
                  <div className="flex justify-end">
                    <button onClick={toggleSearch} className="text-gray-600 hover:text-red-600 text-2xl"><FiX /></button>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <FiSearch className="text-gray-500 text-2xl" />
                    <input
                      type="text"
                      placeholder="Search for food..."
                      className="flex-1 border-none outline-none text-lg placeholder-gray-400"
                      autoFocus
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
