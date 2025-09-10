// Components/SignIn_Section.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ Import Link

const SignIn = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-8 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Sign in to continue ordering your favorites 🚀
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none shadow-sm text-sm"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none shadow-sm text-sm"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-red-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            {/* ✅ Use Link instead of anchor */}
            <Link to="/forgot-password" className="text-red-500 hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239,68,68,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
                       bg-red-500 hover:bg-red-600 text-white font-semibold text-base 
                       shadow-md transition-all"
          >
            Sign In <FiArrowRight />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500 text-xs">OR</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Social Sign In */}
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

        {/* Sign Up Redirect */}
        <p className="text-center text-gray-600 text-xs mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default SignIn;
