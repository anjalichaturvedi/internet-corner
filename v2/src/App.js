import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import FeaturedWork from './components/FeaturedWork';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import FooterPlayer from './components/FooterPlayer';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <FeaturedWork />
          <WorkExperience />
          <Education />
        </main>
      </div>
      <FooterPlayer />
    </div>
  );
}

export default App;