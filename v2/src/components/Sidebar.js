import React from 'react';
import '../Global.css';
import { TbWorld } from 'react-icons/tb';
import { 
  DiReact, 
  DiNodejsSmall, 
  DiJsBadge, 
  DiHtml5, 
  DiCss3, 
  DiGit 
} from 'react-icons/di';
import { FiPlus, FiFigma, FiType } from 'react-icons/fi';
import { IoTriangleOutline } from 'react-icons/io5';
import { FiCpu, FiClipboard, FiUsers, FiFileText, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';
import { DiPython } from 'react-icons/di';
import { FiDatabase } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      {/* --- Header --- */}
      <div className="sidebar-header">
        <h2>Your Library</h2>
        <button className="icon-button">
          <FiPlus />
        </button>
      </div>

      {/* --- About Me Box --- */}
      <div className="info-box about-me">
        <h3>Hi, I am Anjali Chaturvedi</h3>
        <p>
          I am a frontend + product enthusiast. I love building products that make life easier and are user-first. 
          <br /> <br/> Currently, doing everything and anything at <a 
            href="https://www.nodebrew.org" 
            style={{ 
                color: 'inherit', 
                textDecoration: 'underline' 
            }}
        >
            Nodebrew
        </a>.
        </p>
        <a href="mailto:anjaliichaturvedi@gmail.com" className="action-button">
          Say "Hello"
        </a>
      </div>

      {/* --- Tools & Technologies Box --- */}
<div className="info-box tools">
  <h3>Skills & Technologies</h3>

  <div className="tools-grid">
    <div className="tool-icon-wrapper">
      <DiReact />
      <span className="tooltip">React</span>
    </div>
    <div className="tool-icon-wrapper">
      <DiJsBadge />
      <span className="tooltip">JavaScript</span>
    </div>
    <div className="tool-icon-wrapper">
      <DiHtml5 />
      <span className="tooltip">HTML5</span>
    </div>
    <div className="tool-icon-wrapper">
      <DiCss3 />
      <span className="tooltip">CSS3</span>
    </div>
  </div>

  <div className="tools-grid">
    <div className="tool-icon-wrapper">
      <DiPython />
      <span className="tooltip">Python</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiDatabase />
      <span className="tooltip">SQL</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiCpu />
      <span className="tooltip">Scikit-learn</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiClipboard />
      <span className="tooltip">Pandas</span>
    </div>
  </div>

  <div className="tools-grid">
    <div className="tool-icon-wrapper">
      <FiUsers />
      <span className="tooltip">User Research</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiFileText />
      <span className="tooltip">PRD Authoring</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiTrendingUp />
      <span className="tooltip">Data Analytics</span>
    </div>
    <div className="tool-icon-wrapper">
      <FiTarget />
      <span className="tooltip">GTM Strategy</span>
    </div>
  </div>
</div>

      {/* --- Footer Links --- */}
      <div className="sidebar-footer">
        <ul className="colophon-list">
          <li><FiFigma /> Designed in <strong>Figma</strong></li>
          <li><DiReact /> Built with <strong>React & CSS Grid</strong></li>
          <li><FiType /> Typography in <strong>Inter</strong></li>
          <li><IoTriangleOutline /> Hosted on <strong>Vercel</strong></li>
        </ul>
      </div>

      {/* --- Language Button --- */}
      <button className="lang-button">
        <span>📍 New Delhi, India</span>
      </button>
    </aside>
  );
};

export default Sidebar;