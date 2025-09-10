import React from "react";

const ChefsSpecial = () => {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 text-center">
      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-extrabold 
                   bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
                   bg-clip-text text-transparent drop-shadow-lg mb-10"
      >
        Chef’s Special of the Day 👨‍🍳
      </h2>

      {/* Card */}
      <div
        className="max-w-4xl mx-auto bg-white/10 dark:bg-black/20 
                   backdrop-blur-2xl rounded-2xl shadow-xl p-8 
                   flex flex-col md:flex-row items-center gap-8 
                   border border-white/20"
      >
        {/* Image */}
        <img
          src="/assets/chefs_special.png"
          alt="Chef’s Special"
          className="w-48 h-48 md:w-60 md:h-60 rounded-2xl 
                     object-cover shadow-lg"
        />

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3">Truffle Alfredo Pasta 🍝</h3>
          <p className="text-white/80 mb-5">
            A luxurious creamy pasta infused with fresh truffles, topped with
            parmesan & herbs.
          </p>
          <button
            className="bg-gradient-to-r from-red-500 to-pink-500 
                       px-6 py-2.5 rounded-xl text-white font-semibold 
                       shadow-lg hover:scale-105 transition-transform"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecial;
