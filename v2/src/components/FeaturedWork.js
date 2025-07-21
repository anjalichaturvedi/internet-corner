import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { allProjectsData } from '../data/projects.js';

const FeaturedWork = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const featuredProjects = allProjectsData.slice(0, 5);

  return (
    <section className="featured-work-section">
      <div className="section-header">
        <h2>Featured Work</h2>
        <Link to="/projects" className="show-all-link">Show all</Link>
      </div>
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => handleToggleProject(project.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;