// src/App.js

import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import FeaturedWork from './components/FeaturedWork';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-container">
      {/* 1. The Navbar is now at the top of everything */}
      <Navbar />

      {/* 2. This new div wraps our two-column layout */}
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <FeaturedWork />
          <WorkExperience />
          <Education />
          {/* Other sections... */}
        </main>
      </div>
    </div>
  );
}

export default App;