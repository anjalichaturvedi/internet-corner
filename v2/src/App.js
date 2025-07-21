import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import Navbar from './components/Navbar';
import FooterPlayer from './components/FooterPlayer';
import './Global.css'; 

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="portfolio-container">
      <div className="mobile-notice">
        <h2>Desktop Experience Recommended</h2>
        <p>This portfolio is designed to be viewed on a larger screen. Please switch to a desktop for the full interactive experience!</p>
        <a 
          href="https://github.com/anjalichaturvedi/internet-corner" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-button"
        >
          View Source Code
        </a>
      </div>
      
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <FooterPlayer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;