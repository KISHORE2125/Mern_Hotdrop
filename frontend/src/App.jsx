  // App.jsx
  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  // Components
  import SplashScreen from "./Components/Splash_Screen_Section";
  import Navbar from "./Components/Navbar_Section";
  import useAppHooks from "./Hooks/App_Hooks";

  // Pages
  import HomePages from "./Pages/Home_Page";   // ✅ home page
  import SignIn from "./Pages/SignIn_Page";
  import SignUp from "./Pages/SignUp_Page";
  import ForgotPassword from "./Pages/ForgotPassword_Page"; 
  import MenuPage from "./Pages/Menu_Page";   // ✅ new menu page

  const App = () => {
    const { showMainApp, fadeSplash } = useAppHooks(2000, 500);

    return (
      <Router>
        {/* Splash Screen */}
        {!showMainApp && <SplashScreen fade={fadeSplash} />}

        {/* Navbar & Main App */}
        {showMainApp && (
          <div className="relative min-h-screen bg-gray-50 bg-pink-100">
            <Navbar showAfterSplash={true} />

            <Routes>
              {/* ✅ Official Home Page */}
              <Route path="/" element={<HomePages />} />

              {/* ✅ Menu Page */}
              <Route path="/menu" element={<MenuPage />} />

              {/* Auth Pages */}
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
