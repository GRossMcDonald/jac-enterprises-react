import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Background from "./Background";

function About() {
  return (
    <div className="bio-container">
      <Navbar />
      <Background />
      <h1>Meet Our Team!</h1>
      <div className="Deidra">
        <h2>Deidra Zamonski-Blake</h2>
        <p>Bio filler</p>
      </div>
      <div className="Ross">
        <h2>Ross McDonald</h2>
        <p>Bio Filler</p>
      </div>
      <div className="Kate">
        <h2>Kate Locke</h2>
        <p>Bio Filler</p>
      </div>
    </div>
  );
}

export default About;
