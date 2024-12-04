import React from "react";
import "../../style.css";

const NavBar = () => {
  // Navigation items
  const navItems = [
    { label: "HOME", link: "#" },
    { label: "Services", link: "#services" },
    { label: "Categories", link: "#categories" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Menu Checkbox */}
        <input type="checkbox" id="menu-toggle" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        {/* Navigation Menu */}
        <ul className="menu-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Logo Section */}
        <h6 className="logo">
          DARB AL SHAHEEN <br />
          TECHNICAL <br /> S E R V I C E S E S T.
        </h6>
      </div>
    </nav>
  );
};

export default NavBar;
