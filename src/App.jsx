import React from "react";
import NavBar from "./Components/Nav-Bar/NavBar";
 import Services from "./Components/Services/Services";
 import Categories from "./Components/Categories/Categorie"
 import Contact from "./Components/Contact-Us/Contact"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
function App() {
  return (
    <div>
    <Home/>
 <NavBar/>
 <Categories/>
 <Services/>
 <Contact/>
 <About/> 
    </div>
  );
}

export default App;
