import React from "react";
import { useState } from "react";
import "./components/Home.css";
import "./components/Funnies.css";
import Funnies from "./components/Funnies";
import Home from "./components/Home";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [nasaTitle, setTitle] = useState("");
  const [nasaImage, setImage] = useState("");
  const [nasaCaption, setCaption] = useState("");

  return (
    <>
      <div className="background-container"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funnies" element={<Funnies />} />
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

          {/* 
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
             */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
