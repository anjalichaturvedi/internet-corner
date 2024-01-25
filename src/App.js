import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  ColorModeProvider
} from "@chakra-ui/react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import ToggleButton from "./ToggleButton";
import theme from './theme'; // Import the custom theme

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={`App ${theme}`}>
    <ChakraProvider theme={theme}>
       <ColorModeProvider>
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
                className="link"
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
                <IconButton
                  icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                />
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
                  <li>Organizing an all-women hackathon, fostering a supportive and inclusive environment for female participation in technology.</li>
                  <li>Admitted into Codess Cafe mentorship program focused on elevating women in tech</li>
                  <li>Initiated machine learning research to optimize resource allocation in IoT networks</li>
                </ul>
              </div>
              {/* Projects Section */}
              <div className="projects-section" id="project-section">
                <hr className="projects-hr" />
                <h2>Projects</h2>
                <div className="project-item">
                  <h3>
                    Internet Corner (this website)
                    <span className="project-tag">Project</span>
                  </h3>
                  <p>A React-powered personal website featuring project showcases and a resume, designed with precision to deliver an engaging and dynamic user experience.</p>
                  <p className="project-year">2024</p>
                  <a href="https://github.com/anjalichaturvedi/anjalichaturvedi.github.io" className="view-project-link">
                    View Source Code →
                  </a>
                </div>
                <div className="project-item">
                  <h3>
                    Smart Scheduler
                    <span className="project-tag">Project</span>
                  </h3>
                  <p>A web application developed in PHP, SQL, HTML/CSS, and JavaScript, providing a user-friendly platform for administrators, teachers, and students to efficiently manage and view timetables in educational institutions.</p>
                  <p className="project-year">2023</p>
                  <a target="_blank"  href="https://smart-scheduler.000webhostapp.com/index.php" className="view-project-link">
                    View Project →
                  </a>
                </div>
                <div className="project-item">
                  <h3>
                    Markdown Generator
                    <span className="project-tag">Mini Project</span>
                  </h3>
                  <p>React-based web application for effortlessly creating, editing, and generating Markdown tables with a user-friendly interface.
</p>
                  <p className="project-year">2023</p>
                  <a target="_blank"  href="markdown-generator-phi.vercel.app" className="view-project-link">
                    View Project →
                  </a>
                </div>
                <div className="project-item">
                  <h3>
                    Password Generator
                    <span className="project-tag">Mini Project</span>
                  </h3>
                  <p>React-based password generator built with Chakra UI allows users to customize and generate secure passwords based on their preferences.
</p>
                  <p className="project-year">2023</p>
                  <a target="_blank" href="https://password-generator-rust-kappa.vercel.app" className="view-project-link">
                    View Project →
                  </a>
                </div>
                <div className="project-item">
                  <h3>
                    Blood Bank System
                    <span className="project-tag">Mini Project</span>
                  </h3>
                  <p>A blood bank management system created with PHP and SQL, connecting users and hospitals for seamless blood donation coordination and efficient inventory management.
</p>
                  <p className="project-year">2023</p>
                  <a target="_blank" href="https://github.com/anjalichaturvedi/template-blood-bank" className="view-project-link">
                    View Source Code →
                  </a>
                </div>
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
                      <a href="https://www.linkedin.com/in/anjali-chaturvedi" style={{ marginLeft: "30px" }}>
                        {""}
                        LinkedIn{""}
                      </a>
                      <a href="mailto:contact@anjalichaturvedi.tech" style={{ marginLeft: "30px" }}>
                        {""}
                        Email{""}
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
      </ColorModeProvider>
    </ChakraProvider>
    </div>
  );
}

export default App;
