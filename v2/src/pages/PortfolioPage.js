// src/pages/PortfolioPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import FeaturedWork from '../components/FeaturedWork';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import FooterPlayer from '../components/FooterPlayer';
import '../App.css';
const PortfolioPage = () => {
  return (
    <div className="app-body">
      <Sidebar />
      <main className="main-content">
        <FeaturedWork />
        <WorkExperience />
        <Education />
      </main>
      <FooterPlayer />
    </div>
    
  );
};

export default PortfolioPage;