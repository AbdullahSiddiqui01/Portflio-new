// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faUser, faGamepad, faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import the login icon
import logo from '../assets/images/port.png';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Abdullah's Portfolio</h1>
      </div>
      <ul className="navbar-links">
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
