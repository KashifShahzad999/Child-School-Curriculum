import React from "react";
import NavBar from "./Components/Nav-Bar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/HomePage/Home";
import Art from "./Components/Art/Art";
import Drama from "./Components/Drama/Drama";
import Music from "./Components/Movement & Music/Music";
import Language from "./Components/Language and Literacy/Language";
import Science from "./Components/Science/Science";
import Engineering from "./Components/Engineering/Engineering";
import Technologies from "./Components/Technologies/Technologies";
import Mathematics from "./Components/Mathematics/Mathematics";
import Humanities from "./Components/Humanities/Humanities";
import Curriculum from "./Components/Curriculum/Curriculum";
import References from "./Components/References/References";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/music" element={<Music />} />
        <Route path="/language" element={<Language />} />
        <Route path="/science" element={<Science />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/humanities" element={<Humanities />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}

export default App;
