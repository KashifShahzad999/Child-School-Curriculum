import React from "react";
import NavBar from "./Components/Nav-Bar/NavBar";
import Services from "./Components/Services/Services";
// import Categories from "./Components/Categories/Categorie";
import Contact from "./Components/Contact-Us/Contact";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Teams from "./Components/Team-members/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <>
    
      <NavBar />
 <Home/>
 <Art/>
 <Drama/>
 <Music/>
 <Language/>
 <Science/>
 <Engineering/>
 <Technologies/>
 <Mathematics/>
 <Humanities/>
 <Curriculum/>
    </>
  );
}

export default App;
