import React from "react";
import SplashScreen from "./Components/Splash_Screen_Section";
import Navbar from "./Components/Navbar_Section";
import useAppHooks from "./Hooks/App_Hooks";
import HeaderSection from "./Components/Header_Section";
import FoodOptions from "./Components/Food_Option_Section";
import SpecialOffers from "./Components/Special_Offers_Section";
const App = () => {
  const { showMainApp, fadeSplash } = useAppHooks(2000, 500); // 2s splash, 0.5s fade

  return (
    <>
      {/* Splash Screen */}
      {!showMainApp && <SplashScreen fade={fadeSplash} />}

      {/* Navbar & Main App */}
      {showMainApp && (
        <div className="relative min-h-screen bg-gray-50  bg-pink-100">
          <Navbar showAfterSplash={true} />
          {/* Rest of your app goes here */}
          <HeaderSection/>
          <FoodOptions/>
          <SpecialOffers/>
        </div>
      )}
    </>
  );
};

export default App;
