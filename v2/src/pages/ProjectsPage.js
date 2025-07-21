import React, { useState } from 'react';
import { allProjectsData } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.js';
import '../Global.css';

const ProjectsPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">All Projects</h1>
      <div className="projects-full-grid">
        {allProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => handleToggleProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;