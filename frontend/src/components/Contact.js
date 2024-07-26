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
            <h1 className="contact-header">Contact Our Team!</h1>
          </li>
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
      </div>
    </div>
  );
}
export default Contact;
