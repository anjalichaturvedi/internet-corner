// src/components/FooterPlayer.js

import React from 'react';
import { 
  FaPlay, FaStepBackward, FaStepForward, FaRandom, FaRedo, 
  FaGithub, FaLinkedin, FaFileAlt 
} from 'react-icons/fa';
import './Global.css'; // Assuming you are using the global CSS

const FooterPlayer = () => {
  return (
    <footer className="footer-player-container">
      {/* Left Section: Current Status */}
      <div className="player-left">
        <img 
          src="https://placehold.co/56x56/6a5acd/FFFFFF?text=AC" // Replace with your photo or a logo
          alt="Anjali Chaturvedi" 
          className="profile-art" 
        />
        <div className="status-info">
          <h4>Open to Opportunities</h4>
          <p>Anjali Chaturvedi • Frontend & PM</p>
        </div>
      </div>

      {/* Center Section: Decorative Controls */}
      <div className="player-center">
        <div className="player-controls-top">
          <button className="control-btn-small"><FaRandom /></button>
          <button className="control-btn-small"><FaStepBackward /></button>
          <a href="mailto:your-email@example.com" className="control-btn-large play">
            <FaPlay />
          </a>
          <button className="control-btn-small"><FaStepForward /></button>
          <button className="control-btn-small"><FaRedo /></button>
        </div>
        <div className="progress-bar-container">
          <span className="time">0:00</span>
          <div className="progress-bar-bg"><div className="progress-bar-fg"></div></div>
          <span className="time">2:30</span>
        </div>
      </div>

      {/* Right Section: Social & Resume Links */}
      <div className="player-right">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="control-btn-small"><FaGithub /></a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="control-btn-small"><FaLinkedin /></a>
        <a href="YOUR_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="control-btn-small"><FaFileAlt /></a>
      </div>
    </footer>
  );
};

export default FooterPlayer;