import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaSearch,
  FaLock,
  FaGithub,
  FaLinkedin,
  FaFileAlt 
} from 'react-icons/fa';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-section left">
        <button className="nav-arrow-btn"><FaChevronLeft /></button>
        <button className="nav-arrow-btn disabled"><FaChevronRight /></button>
      </div>

      <div className="navbar-section center">
        <Link to="/" className="home-btn"><FaHome /></Link>
        <form className="search-bar-container" onSubmit={handleSearch}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to search?"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="navbar-section right">
        <Link to="/blog" className="nav-action-link">Blog</Link>
        <a href="/files/AnjaliChaturvedi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link-btn"><FaFileAlt /></a>
        <a href="https://github.com/anjalichaturvedi" target="_blank" rel="noopener noreferrer" className="social-link-btn"><FaGithub /></a>
        <a href="https://linkedin.com/in/anjali-chaturvedi" target="_blank" rel="noopener noreferrer" className="social-link-btn"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;
