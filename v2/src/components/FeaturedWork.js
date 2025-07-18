import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Global.css';

const projectData = [
  {
    id: 1,
    title: "Internet Corner",
    subtitle: "ReactJS, Tailwind CSS, Figma",
    description: "A little home on the web.",
    color: "#602894",
    liveUrl: "#",
    githubUrl: "https://github.com/anjalichaturvedi/internet-corner",
  },
  {
    id: 2,
    title: "Campus Navigator",
    subtitle: "OpenStreetMap, Leaflet Routing, JS",
    description: "An open-source navigator made for JIIT with multi-routes.",
    color: "#B42838",
    liveUrl: "#",
    githubUrl: "https://github.com/anjalichaturvedi/campus-navigator",
  },
  {
    id: 3,
    title: "Comparly",
    subtitle: "Python, Requests, BeautifulSoup",
    description: "Compare your carts while shopping to find the cheapest.",
    color: "#2870b4ff",
    liveUrl: "#",
    githubUrl: "https://github.com/anjalichaturvedi/comparely",
  },
  {
    id: 4,
    title: "Recommerz",
    subtitle: "Python, Clustering, KNN-Model",
    description: "Predicts what will you buy next based on your shopping cart.",
    color: "#b46728ff",
    liveUrl: "#",
    githubUrl: "https://github.com/anjalichaturvedi/comparely",
  },
  {
    id: 5,
    title: "Ordrly",
    subtitle: "Java, Swing",
    description: "A desktop tool to organize files and folders.",
    color: "#b42865ff",
    liveUrl: "#",
    githubUrl: "https://github.com/anjalichaturvedi/ordrly",
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