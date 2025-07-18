import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaSearch,
  FaLock,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-section left">
        <button className="nav-arrow-btn">
          <FaChevronLeft />
        </button>
        <button className="nav-arrow-btn disabled">
          <FaChevronRight />
        </button>
      </div>

      <div className="navbar-section center">
        <Link to="/" className="home-btn">
          <FaHome />
        </Link>
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="search-input"
          />
          <FaLock className="lock-icon" />
        </div>
      </div>

      <div className="navbar-section right">
        <Link to="/blog" className="nav-action-link">
          Blog
        </Link>
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