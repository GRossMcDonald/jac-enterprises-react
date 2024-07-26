import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="homelink-container titillium-title relative no-user-select flex">
        <Link to="/">
          <p>COSMONAUTICA</p>
        </Link>
      </div>
      <div className="navlinks-container relative flex">
        <ul className="navlinks no-user-select">
          <Link to="/explore">
            <li className="nav-item">Explore</li>
          </Link>
          <Link to="/funnies">
            <li className="nav-item">Funnies</li>
          </Link>
          <Link to="/contact">
            <li className="nav-item">Contact</li>
          </Link>
          <Link to="/about">
            <li className="nav-item" id="last-navlink">
              About
            </li>
          </Link>
        </ul>
      </div>
      <div className="hamburger no-user-select">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Navbar;
