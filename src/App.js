import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Leader from "./pages/Leader";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Chatbot from "./pages/Chatbot";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Leader" element={<Leader />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </>
  );
};

export default App;
