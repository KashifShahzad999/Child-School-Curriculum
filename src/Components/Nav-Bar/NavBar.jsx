import React from "react";
// import { Link } from "react-router-dom";
import "../../style.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
         <ul className="menu-items">
          <li>
         <a href="">HOME</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
 
          <li>
            <a href="">Contact</a>
          </li>
        </ul> 
        <h6 className="logo">
          DARB AL SHAHEEN <br />
          TECHNICAL <br />S E R V I C E S E S T.
        </h6>
      </div>
    </nav>
  );
}

export default NavBar;
