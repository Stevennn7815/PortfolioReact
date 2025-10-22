import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <FaLaptopCode className="logo-icon" />
        Steven A. Tejero
      </h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
