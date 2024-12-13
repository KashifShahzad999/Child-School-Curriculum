import React from "react";
import NavBar from "./Components/Nav-Bar/NavBar";
import Services from "./Components/Services/Services";
import Categories from "./Components/Categories/Categorie";
import Contact from "./Components/Contact-Us/Contact";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Teams from "./Components/Team-members/Teams";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Categories />
      <About />
      <Teams />
      <Contact />
    </div>
  );
}

export default App;
