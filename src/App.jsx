import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";

const AppContent = () => {
  const location = useLocation();

  // Check if we're on the dashboard route
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Show Navbar only if NOT on /dashboard */}
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
