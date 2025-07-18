import React from 'react';
import './Global.css';
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
        <button href="mailto:anjaliichaturvedi@gmail.com" className="action-button">
          Say "Hello"
        </button>
      </div>

      {/* --- Tools & Technologies Box --- */}
      <div className="info-box tools">
        <h3>Tools & Technologies</h3>
        <div className="tools-grid">
          <DiJsBadge title="JavaScript" />
          <DiReact title="React" />
          <DiNodejsSmall title="Node.js" />
          <DiHtml5 title="HTML5" />
          <DiCss3 title="CSS3" />
          <DiGit title="Git" />
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