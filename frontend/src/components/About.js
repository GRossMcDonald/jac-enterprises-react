import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import "./Background.css";

function About() {
  return (
    <div className="bio-container">
      <Navbar />
      <div className="about-info">
        <ul>
          <li>
            <h2>Deidra Zamonski-Blake</h2>
            <img className="bio-pic" src="../img/Deidra.png" alt="Deidra"></img>
            <p className="bio">
              Deidra is an entry-level full-stack web developer located in
              Columbus, OH. She and her husband of three years, Christopher, had
              their first child, Beorn, at the end of 2023 and she will soon be
              a new graduate of the trade school We Can Code It.
            </p>
          </li>
          <li>
            <h2>Ross McDonald</h2>
            <img
              className="bio-pic"
              src="./img/Ross.png"
              alt="Ross"
              width="200px"
            ></img>
            <p className="bio">
              Ross is a We Can Code It student with a background in political
              science. He graduated from OSU with a bachelors in political
              science. Since then he's aspired to become a video game developer.
              He's currently honing my skills in backend and frontend
              programming languages.
            </p>
          </li>
          <li>
            <h2>Kate Locke</h2>
            <p className="bio">
              Kate is a full-stack development student at We Can Code it with a
              background in communication studies. In 2017 she graduated from
              Kent State University and has since found an interest in
              programming. She is set to graduate from WCCI in August of 2024.
              She is hoping to find a career where she can dive more into
              front-end development in the gaming or entertainment industries.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
