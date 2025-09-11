// Navbar_Hooks.jsx
import { useState, useEffect } from "react";

export const useNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    // Close search when opening menu
    if (!mobileMenuOpen) setSearchOpen(false);
  };

  // Toggle mobile search
  const toggleSearch = () => {
    setSearchOpen(prev => !prev);
    // Close menu when opening search
    if (!searchOpen) setMobileMenuOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    mobileMenuOpen,
    toggleMobileMenu,
    searchOpen,
    toggleSearch,
    scrolled,
  };
};
