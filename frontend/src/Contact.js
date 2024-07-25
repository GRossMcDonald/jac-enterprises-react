import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
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
              <a href="deidra.zamonskiblake@gmail.com" className="email-link">
                Send E-mail
              </a>
            </li>
            <li className="contact-item">
              Ross McDonald:
              <a href="mailto:Ross_McDonald@gmail.com" className="email-link">
                Send E-mail
              </a>
            </li>
            <li className="contact-item">
              Katlyn Locke:
              <a href="mailto:katlynlocke1028@gmail.com" className="email-link">
                Send E-Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
