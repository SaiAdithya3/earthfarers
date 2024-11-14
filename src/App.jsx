import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return <>
    <div className="w-full flex items-center flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  </>;
}

export default App;
