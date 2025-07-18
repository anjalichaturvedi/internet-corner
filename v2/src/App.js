// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

// Import Pages
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';

// Import Shared Components
import Navbar from './components/Navbar';
import FooterPlayer from './components/FooterPlayer';

// Import your global stylesheet
import './App.css'; 

// This component includes the shared layout (Navbar, Footer)
const AppLayout = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Outlet />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;