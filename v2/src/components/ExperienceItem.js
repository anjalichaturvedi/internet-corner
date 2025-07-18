import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Global.css';

const ExperienceItem = ({ job, isExpanded, onToggleDetails }) => {
  const { logo, jobTitle, companyName, dates, details } = job;

  const handlePlayClick = (e) => {
    e.stopPropagation(); // Prevents any parent onClick handlers from firing
    onToggleDetails();
  };

  return (
    <div className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="experience-summary" onClick={onToggleDetails}>
        <img src={logo} alt={`${companyName} logo`} className="company-logo" />
        <div className="experience-details">
          <h4>{jobTitle}</h4>
          <p>{companyName} &bull; {dates}</p>
        </div>
        {/* The Play button appears on hover */}
        <button className="play-button" onClick={handlePlayClick}>
          <FaPlay />
        </button>
      </div>

      {/* The full details section that expands/collapses */}
      <div className="experience-full-details">
        <ul>
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;