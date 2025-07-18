import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import './Global.css';

const experienceData = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    companyName: "Tech Solutions Inc.",
    dates: "2022 - Present",
    logo: "https://placehold.co/80x80/602894/FFFFFF?text=TS",
    details: [
      "Led the development of a new design system using React and Storybook.",
      "Improved web performance metrics by 30% through code splitting and lazy loading.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    companyName: "Creative Minds LLC",
    dates: "2020 - 2022",
    logo: "https://placehold.co/80x80/B42838/FFFFFF?text=CM",
    details: [
        "Designed user flows, wireframes, and high-fidelity mockups in Figma.",
        "Conducted user research sessions to gather feedback for product iterations.",
        "Collaborated with engineers to ensure pixel-perfect implementation of designs.",
    ],
  },
];

const WorkExperience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="work-experience-section">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experienceData.map(job => (
          <ExperienceItem
            key={job.id}
            job={job}
            isExpanded={expandedId === job.id} 
            onToggleDetails={() => handleToggleDetails(job.id)} 
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;