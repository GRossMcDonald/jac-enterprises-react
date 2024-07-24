import React from "react";
import "./components/Home.css";
import "./components/Funnies.css";
import Funnies from "./components/Funnies";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="background-container"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funnies" element={<Funnies />} />

          {/*
              <Route path="/explore" element={<Element />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
             */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
