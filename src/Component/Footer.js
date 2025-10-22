import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 My Portfolio | Designed by Me</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/Teven.Teben" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/Stevennn7815" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
