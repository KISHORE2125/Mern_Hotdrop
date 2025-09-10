import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-28 relative z-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-14 grid md:grid-cols-4 gap-12">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400 mb-4"> Hot Drop!</h2>
          <p className="text-gray-400 leading-relaxed">
            Delicious bites, delivered fast. Grab your favorites with unbeatable offers every day.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#menu" className="hover:text-yellow-400 transition">Menu</a></li>
            <li><a href="#offers" className="hover:text-yellow-400 transition">Special Offers</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#faq" className="hover:text-yellow-400 transition">FAQ</a></li>
            <li><a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-yellow-400 transition">Terms & Conditions</a></li>
            <li><a href="#help" className="hover:text-yellow-400 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HotDrop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
