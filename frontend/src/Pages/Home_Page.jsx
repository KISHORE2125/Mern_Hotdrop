// Pages/HomePages.jsx
import React from "react";
import HeaderSection from "../components/Header_Section";
import FoodOptions from "../Components/Food_Option_Section";
import SpecialOffers from "../components/Special_Offers_Section";
import Testimonials from "../components/Testimonials_Section";
import Footer from "../components/Footer_Section";

const HomePages = () => {
  return (
    <div className="relative overflow-hidden">
      <HeaderSection />
      <FoodOptions />
      <SpecialOffers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePages;
