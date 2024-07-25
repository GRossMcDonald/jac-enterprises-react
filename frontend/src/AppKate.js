import React from "react";
import "./App.css";
import Contact from "Contact.js";
import About from "About.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  <Router>
    <nav>
      <ul>
        <li>
          <a href="About.js">About</a>
        </li>
        <li>
          <a href="Contact.js">Contact</a>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    ;
  </Router>;
}

export default App;
