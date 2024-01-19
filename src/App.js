import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <div className="left-aligned">
            <h1>Hi, I am Anjali Chaturvedi</h1>
            <p>I am passionate about using technology as an enabler for empowering organizations, communities and individuals.</p>

            {/* Other content goes here */}

            <div className="resume-download">
              <a href="/path/to/your/resume.pdf" download>
                Download Resume →
              </a>
            </div>
            {/* Recently Section */}
            <div className="recently-section">
              <div className="recently-heading">
                <hr className="recently-hr" />
                <h2>Recently</h2>
              </div>
              <ul className="recently-list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            {/* Projects Section */}
            <div className="projects-section">
              <h2>Projects</h2>
              <hr className="projects-hr" />
              <div className="project-item">
              <h3>Project Name 1<span className="project-tag">Mini Project</span>
                </h3>
                <p>Project description goes here...</p>
                <p className="project-year">2023</p>
                <a href="/path-to-project" className="view-project-link">
                  View Project →
                </a>
              </div>
              <div className="project-item">
              <h3>Project Name 2<span className="project-tag">Mini Project</span>
                </h3>
                <p>Project description goes here...</p>
                <p className="project-year">2022</p>
                <a href="/path-to-project" className="view-project-link">
                  View Project →
                </a>
              </div>
              {/* Add more project items as needed */}
            </div>
          </div>
        </div>
      </header>
      
    </div>
    </ChakraProvider>
  );
}

export default App;
