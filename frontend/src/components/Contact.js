import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import "./Background.css";

function Contact() {
  return (
    <div className="contact-container">
      <Navbar />

      <div className="contact-info">
        <ul>
          <li>
            <h2>Deidra Zamonski-Blake</h2>
            <a href="deidra.zamonskiblake@gmail.com" className="email-link">
              Send E-mail
            </a>
          </li>
          <li>
            <h2>Ross McDonald:</h2>
            <a href="mailto:Ross_McDonald@outlook.com" className="email-link">
              Send E-mail
            </a>
          </li>
          <li>
            <h2>Katlyn Locke</h2>
            <a href="mailto:katlynlocke1028@gmail.com" className="email-link">
              Send E-Mail
            </a>
          </li>
        </ul>
        <div className="content">
          <div className="nav-bar">
            <nav>
              <ul>
                <li className="nav-item">Explore</li>
                <li className="nav-item">
                  <a href="Funnies.js" className="link">
                    Funnies
                  </a>
                </li>
                <li className="nav-item">
                  <a href="Contact.js" className="link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="About.js" className="link">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contact-info">
            <h1 className="contact-header">Contact Us!</h1>
            <div className="contact-list">
              <ul>
                <li className="contact-item">
                  Deidra Zamonski-Blake:
                  <a
                    href="deidra.zamonskiblake@gmail.com"
                    className="email-link"
                  >
                    Send E-mail
                  </a>
                </li>
                <li className="contact-item">
                  Ross McDonald:
                  <a
                    href="mailto:Ross_McDonald@outlook.com"
                    className="email-link"
                  >
                    Send E-mail
                  </a>
                </li>
                <li className="contact-item">
                  Katlyn Locke:
                  <a
                    href="mailto:katlynlocke1028@gmail.com"
                    className="email-link"
                  >
                    Send E-Mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
