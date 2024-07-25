import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Background from "./Background";
import "./Background.css";

function Contact() {
  return (
    <div className="contact-container">
      <Navbar />
      <Background />
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
