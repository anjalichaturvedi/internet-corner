import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import '../Global.css';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const { title, subtitle, description, color, liveUrl, githubUrl, rationale } = project;

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      <div className="card-art" style={{ backgroundColor: color }}>
        <div className="card-header-content">
          <h3>{title}</h3>
          <p className="card-art-subtitle">{subtitle}</p>
        </div>
        
        <div className="action-buttons">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-action-btn github" onClick={handleLinkClick}>
            <FiGithub />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-action-btn play" onClick={handleLinkClick}>
            <FaPlay />
          </a>
        </div>
      </div>
      
      <p className="card-description">{description}</p>
      <div className="project-details">
        <h5>Why I Built This</h5>
        <p>{rationale}</p>
      </div>
    </div>
  );
};

export default ProjectCard;