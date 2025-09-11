import { useState, useEffect } from "react";

export const useNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const toggleSearch = () => setSearchOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { mobileMenuOpen, toggleMobileMenu, searchOpen, toggleSearch, scrolled };
};
