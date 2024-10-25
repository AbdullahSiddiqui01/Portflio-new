// Navbar.js
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faUser, faGamepad, faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import the login icon
import logo from '../assets/images/port.png';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Abdullah's Portfolio</h1>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar} aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/game">
            Game
          </Link>
        </li>
        <li>
          <Link to="/login"> {/* New Login link */}
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
