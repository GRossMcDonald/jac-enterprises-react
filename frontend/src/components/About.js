import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import "./Background.css";

function About() {
  return (
    <div className="bio-container">
      <Navbar />
      <div className="about-info">
        <div className="student">
          <img src={require("../img/Deidra.png")} alt="Deidra" width="200px" />
          <p className="bio">
            <h2>Deidra Zamonski-Blake</h2>
            Deidra is an entry-level full-stack web developer located in
            Columbus, OH. She and her husband of three years, Christopher, had
            their first child, Beorn, at the end of 2023 and she will soon be a
            new graduate of the trade school We Can Code It.
          </p>
        </div>
        <div className="student">
          <img src={require("../img/Ross.png")} alt="Ross" width="200px"></img>

          <p className="bio">
            <h2>Ross McDonald</h2>
            Ross is a We Can Code It student with a background in political
            science. He graduated from OSU with a bachelors in political
            science. Since then he's aspired to become a video game developer.
            He's currently honing my skills in backend and frontend programming
            languages.
          </p>
        </div>
        <div className="student">
          <img src={require("../img/Kate.jpg")} alt="Kate" width="200px" />
          <p className="bio">
            <h2>Kate Locke</h2>
            Kate is a full-stack development student at We Can Code it with a
            background in communication studies. In 2017 she graduated from Kent
            State University and has since found an interest in programming. She
            is set to graduate from WCCI in August of 2024. She is hoping to
            find a career where she can dive more into front-end development in
            the gaming or entertainment industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
