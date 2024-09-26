import React from 'react';
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Abdullah Siddiqui. All Rights Reserved.</p>
        <nav className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-media">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/abdullah-shamshuddin-siddiqui-4469701b4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.instagram.com/Abdullahsidd01" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://github.com/Abdullah321222" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
