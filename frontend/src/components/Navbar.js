import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="navbar">
      <div className="homelink-container titillium-title relative no-user-select flex">
        <Link to="/">
          <p>COSMONAUTICA</p>
        </Link>
      </div> {/***If isOpen=true then the class 'is-open' is added to this div***/}
      <div className={`navlinks-container ${isOpen ? 'is-open' : ''}`}>
        <ul className="navlinks">
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
            <li className="nav-item" id="last-navlink">About</li>
          </Link>
        </ul>
      </div> {/***If isOpen=true then the class 'active' is added to this div***/}
      <div className={`hamburger no-user-select ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

/**The only alternative to this is to place the hook in App.js and 
 * pass in the Navbar props to every single component page. I don't know what the standard is,
 * but that seems like a ridiculous way to go about this.**/

export default Navbar;
