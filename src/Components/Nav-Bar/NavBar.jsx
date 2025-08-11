import React, { useState } from "react";
import "./Navbar.css"; // we'll add styles next

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Green Valley School</div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#">
            Departments ▼
          </a>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Science</a>
              <a href="#">Mathematics</a>
              <a href="#">Arts</a>
              <a href="#">Sports</a>
            </div>
          )}
        </li>

        <li><a href="#">Admissions</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
