import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
