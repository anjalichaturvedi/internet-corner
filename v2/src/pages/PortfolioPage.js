import React from 'react';
import Sidebar from '../components/Sidebar';
import FeaturedWork from '../components/FeaturedWork';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import { useOutletContext } from 'react-router-dom';

const PortfolioPage = () => {
  const { searchQuery } = useOutletContext(); // This can be used later to filter content on this page too

  return (
    <div className="app-body">
      <Sidebar />
      <main className="main-content">
        <FeaturedWork />
        <WorkExperience />
        <Education />
      </main>
    </div>
  );
};

export default PortfolioPage;