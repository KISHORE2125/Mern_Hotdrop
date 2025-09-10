// Components/SignUp_Section.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const typingVariants = {
    idle: { scale: 1, boxShadow: "0 0 0px rgba(239,68,68,0)" },
    typing: {
      scale: 1.02,
      boxShadow: "0 0 12px rgba(239,68,68,0.4)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 15px 35px rgba(239,68,68,0.25)",
        }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-8 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Sign up to start ordering your favorite meals 🍔🍟
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.name ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.email ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.password ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={formData.confirm}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.confirm ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(239,68,68,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
                       bg-red-500 hover:bg-red-600 text-white font-semibold text-base 
                       shadow-md transition-all"
          >
            Sign Up <FiArrowRight />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500 text-xs">OR</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Social Sign Up */}
        <div className="flex gap-3">
          {["Google", "Facebook"].map((provider) => (
            <motion.button
              key={provider}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium bg-gray-50 hover:bg-gray-100 shadow-sm"
            >
              {provider}
            </motion.button>
          ))}
        </div>

        {/* Sign In Redirect */}
        <p className="text-center text-gray-600 text-xs mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-red-500 hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUp;
