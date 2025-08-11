import React, { useState } from "react";
import "./Navbar.css"; // we'll add styles next
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="logo">
      <Link to="/" className="logo-link">
        <div className="logo-icon">🏗️</div>
        <div className="logo-text">
          <div className="logo-title">ETCH107</div>
          <div className="logo-subtitle">Facilitating</div>
          <div className="logo-subtitle">Creativity (0–8)</div>
        </div>
      </Link>
    </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
      

        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#"> Curriculum ▼</a>

          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/art">Arts</Link>
              <Link to="/drama">Drama</Link>
              <Link to="/music">Movement & Music</Link>
              <Link to="/language">language and literacy</Link>{" "}
              <Link to="/science">Science</Link>
              <Link to="/engineering">Engineering</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/mathematics">Maths & numeracy</Link>
              <Link to="/humanities">Humanities & Social Science</Link>
              <Link to="/curriculum">Curriculum</Link>
               
              {/* Add this route if you have a Sports page */}
            </div>
          )}
        </li>

        <li>
          <a href="/references">References</a>
        </li>
        <li>
          {/* <a href="#">Contact</a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
