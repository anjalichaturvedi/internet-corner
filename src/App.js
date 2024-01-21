import React from "react";
import "./App.css";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Button } from "@chakra-ui/react";
import ToggleButton from "./ToggleButton";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <div className="content-container">
            <div className="left-aligned">
              {/* Navigation Bar */}
              <Flex
                as="nav"
                align="center"
                justify="space-between"
                color="rgb(170, 170, 170);
                "
              >
                {/* Title/Brand */}
                <Link
                to="project-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} // Adjust this value to match your layout
                activeClass="active"
              >
                Projects
              </Link>

                {/* Navigation Links */}
                <Flex align="center">
                  {/* Dark Mode Toggle */}
                  <ToggleButton />
                </Flex>
              </Flex>
              <h1>Hi, I am Anjali Chaturvedi</h1>
              <p>
                I am passionate about using technology as an enabler for
                empowering organizations, communities and individuals.
              </p>

              {/* Other content goes here */}

              <div className="resume-download">
                <a href="/files/Resume_Anjali_Chaturvedi.pdf"
                  download="Resume_Anjali_Chaturvedi.pdf">
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
              <div className="projects-section" id="project-section">
                <hr className="projects-hr" />
                <h2>Projects</h2>
                <div className="project-item">
                  <h3>
                    Project Name 1
                    <span className="project-tag">Mini Project</span>
                  </h3>
                  <p>Project description goes here...</p>
                  <p className="project-year">2023</p>
                  <a href="/path-to-project" className="view-project-link">
                    View Project →
                  </a>
                </div>
                <div className="project-item">
                  <h3>
                    Project Name 2
                    <span className="project-tag">Mini Project</span>
                  </h3>
                  <p>Project description goes here...</p>
                  <p className="project-year">2022</p>
                  <a href="/path-to-project" className="view-project-link">
                    View Project →
                  </a>
                </div>
                {/* Add more project items as needed */}
              </div>

              <hr className="spacer-hr" />
              <div className="footer">
                <div className="footer-columns">
                  <div className="footer-column">
                    <p>© Anjali Chaturvedi</p>
                    {/* Add more content for the first column as needed */}
                  </div>
                  <div className="footer-column1">
                    <p>
                      <a href="https://www.github.com/anjalichaturvedi"> GitHub</a>
                      <a href="https://www.linkedin.com/in/anjali-chaturvedi" style={{ marginLeft: "20px" }}>
                        {""}
                        LinkedIn{""}
                      </a>
                    </p>
                    {/* Add more content for the second column as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
