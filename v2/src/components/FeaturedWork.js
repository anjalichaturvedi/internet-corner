import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Global.css';

const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    subtitle: "React & Node.js",
    description: "Full-stack retail platform built for scale.",
    color: "#602894",
    liveUrl: "#",
    githubUrl: "#",
    rationale: "To master full-stack development and understand the complexities of state management, authentication, and payment gateway integration in a real-world application." // <-- Add the 'why'
  },
  {
    id: 2,
    title: "Data Dashboard",
    subtitle: "Python & D3.js",
    description: "Interactive visualizations for business intelligence.",
    color: "#B42838",
    liveUrl: "#",
    githubUrl: "#",
    rationale: "I was fascinated by data storytelling and wanted to build a tool that could turn raw numbers into clear, actionable insights for decision-makers."
  },
];

const FeaturedWork = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="featured-work-section">
      <div className="section-header">
        <h2>Featured Work</h2>
        <a href="#" className="show-all-link">Show all</a>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
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