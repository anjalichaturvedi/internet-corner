// src/components/ProjectCard.js

import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import './Global.css'; // Make sure you are using the global CSS

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  // Destructure all the properties from the project object
  const { title, subtitle, description, color, liveUrl, githubUrl, rationale } = project;

  // This function prevents the card from toggling when you click a link
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The main wrapper, which can be expanded
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      {/* THIS IS THE KEY: A div that creates the colored square.
          We apply the background color directly here using an inline style. */}
      <div className="card-art" style={{ backgroundColor: color }}>
        <div className="card-header-content">
          <h3>{title}</h3>
          <p className="card-art-subtitle">{subtitle}</p>
        </div>
        
        {/* Action buttons that will appear on hover */}
        <div className="action-buttons">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-action-btn github" onClick={handleLinkClick}>
            <FiGithub />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-action-btn play" onClick={handleLinkClick}>
            <FaPlay />
          </a>
        </div>
      </div>
      
      {/* The description and expandable details below the card */}
      <p className="card-description">{description}</p>
      <div className="project-details">
        <h5>Why I Built This</h5>
        <p>{rationale}</p>
      </div>
    </div>
  );
};

export default ProjectCard;