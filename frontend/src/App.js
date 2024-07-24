import { useState } from "react";
import React from "react";
import "./App.css";
import Funnies from "./components/Funnies";
import Explore from "./components/Explore";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  const [nasaTitle, setTitle] = useState("");
  const [nasaImage, setImage] = useState("");
  const [nasaCaption, setCaption] = useState("");
  const [favorites, setFavorites] = useState([]);

  return (
      <Router>
        <div className="App">
          <div className="navbar">
            <div className="homelink-container titillium-title relative no-user-select">
              <Link to="/">
                <p>COSMONAUTICA</p>
              </Link>
            </div>
            <div className="navlinks-container relative">
              <ul className="navlinks no-user-select">
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/funnies">Funnies</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li id="last-navlink">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tagline white-text no-user-select">
            <p>tour the universe</p>
          </div>
          <Routes>
            <Route
              path="/explore"
              element={
                <Explore
                  setTitle={setTitle}
                  setImage={setImage}
                  setCaption={setCaption}
                  nasaTitle={nasaTitle}
                  nasaImage={nasaImage}
                  nasaCaption={nasaCaption}
                />
              }
            />
            <Route path="/funnies" element={<Funnies />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
