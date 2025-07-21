import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { allProjectsData } from '../data/projects';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProjects = allProjectsData.filter(project =>
    project.title.toLowerCase().includes(query) ||
    project.subtitle.toLowerCase().includes(query) ||
    project.description.toLowerCase().includes(query) ||
    project.rationale.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-page" style={{ padding: "24px" }}>
      <h2>Search Results for “{query}”</h2>
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="card-art" style={{ background: project.background }}>
                <h3>{project.title}</h3>
                <p className="card-art-subtitle">{project.subtitle}</p>
              </div>
              <p className="card-description">{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "20px", color: "#b3b3b3" }}>No results found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
