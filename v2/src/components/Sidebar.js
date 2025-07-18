import React from 'react';
import './Global.css';
import { FiPlus } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import { 
  DiReact, 
  DiNodejsSmall, 
  DiJsBadge, 
  DiHtml5, 
  DiCss3, 
  DiGit 
} from 'react-icons/di';

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
        <h3>Anjali Chaturvedi</h3>
        <p>
          I'm a passionate full-stack developer with a love for creating clean, 
          intuitive, and performant user interfaces. Let's build something amazing together.
        </p>
        <button className="action-button">
          Get In Touch
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
        <a href="#">Legal</a>
        <a href="#">Safety & Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
      </div>

      {/* --- Language Button --- */}
      <button className="lang-button">
        <TbWorld />
        <span>English</span>
      </button>
    </aside>
  );
};

export default Sidebar;