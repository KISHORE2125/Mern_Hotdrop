// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen_Section";
import Navbar from "./Components/Navbar_Section";
import useAppHooks from "./Hooks/App_Hooks";
import ScrollToTop from "./Hooks/ScrollTop_Hooks"   // ✅ new

// Pages
import HomePages from "./Pages/Home_Page";
import SignIn from "./Pages/SignIn_Page";
import SignUp from "./Pages/SignUp_Page";
import ForgotPassword from "./Pages/ForgotPassword_Page";
import MenuPage from "./Pages/Menu_Page";

const App = () => {
  const { showMainApp, fadeSplash } = useAppHooks(2000, 500);

  return (
    <Router>
      {!showMainApp && <SplashScreen fade={fadeSplash} />}

      {showMainApp && (
        <div className="relative min-h-screen bg-gray-50 bg-pink-100">
          <Navbar showAfterSplash={true} />

          {/* ✅ Always scroll to top when route changes */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
