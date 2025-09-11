// HomePage.jsx
import React from "react";
import SpecialOffers from "../Components/SpecialOffers_Section";
import Testimonials from "../Components/Testimonials_Section";
import HeaderSection from "../Components/Header_Section";

const HomePage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section id="home">
        <HeaderSection />
      </section>

      {/* Offers Section */}
      <section id="offers">
        <SpecialOffers />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

    </div>
  );
};

export default HomePage;
