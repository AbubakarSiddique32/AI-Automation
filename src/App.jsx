import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
