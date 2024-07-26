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
          <li className="contact-item">
            <h1 className="contact-header">Contact Our Team!</h1>
          </li>
          <li className="contact-item">
            <a href="deidra.zamonskiblake@gmail.com" className="email-link">
              E-mail Deidra Zamonski-Blake
            </a>
          </li>
          <li className="contact-item">
            <a href="mailto:Ross_McDonald@outlook.com" className="email-link">
              E-mail Ross McDonald
            </a>
          </li>
          <li className="contact-item">
            <a href="mailto:katlynlocke1028@gmail.com" className="email-link">
              E-Mail Kate Locke
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
