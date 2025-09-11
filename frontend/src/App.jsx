// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Hooks
import useAppHooks from "./Hooks/App_Hooks";
import ScrollToTop from "./Hooks/Scrolltop_Hooks";
import ScrollToHashElement from "./Hooks/ScrollToHashElement";

// Components
import SplashScreen from "./Components/SplashScreen_Section";
import Navbar from "./Components/Navbar_Section";
import Footer from "./Components/Footer_Section";

// Pages
import HomePages from "./Pages/Home_Page";
import MenuPage from "./Pages/Menu_Page";
import SignIn from "./Pages/SignIn_Page";
import SignUp from "./Pages/SignUp_Page";
import ForgotPassword from "./Pages/ForgotPassword_Page";
import ContactPage from "./Pages/ContactPage";
import FAQPage from "./Pages/FAQPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsOfServicePage from "./Pages/TermsOfServicePage";
import HelpCenterPage from "./Pages/HelpCenterPage";

const App = () => {
  const { showMainApp, fadeSplash } = useAppHooks(2000, 500);

  return (
    <Router>
      {/* Splash screen before main app loads */}
      {!showMainApp && <SplashScreen fade={fadeSplash} />}

      {showMainApp && (
        <div className="relative min-h-screen bg-gray-50 bg-pink-100 flex flex-col">
          {/* Navbar */}
          <Navbar showAfterSplash={true} />

          {/* Scroll Handlers */}
          <ScrollToTop />
          <ScrollToHashElement />

          {/* Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePages />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/help" element={<HelpCenterPage />} />
            </Routes>
          </main>

          {/* Footer always visible */}
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
