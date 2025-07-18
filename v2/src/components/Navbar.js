import React from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaSearch,
  FaLock,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import './Global.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Navigation Arrows */}
      <div className="navbar-section left">
        <button className="nav-arrow-btn">
          <FaChevronLeft />
        </button>
        <button className="nav-arrow-btn disabled">
          <FaChevronRight />
        </button>
      </div>

      {/* Home Button and Search Bar */}
      <div className="navbar-section center">
        <button className="home-btn">
          <FaHome />
        </button>
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="search-input"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="navbar-section right">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="social-link-btn">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="social-link-btn">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;