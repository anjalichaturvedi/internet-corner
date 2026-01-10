import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import '../Global.css';

const experienceData = [
  {
    id: 1,
    jobTitle: "Founder & Lead",
    companyName: "Nodebrew",
    dates: "Sept 2020 – Present",
    logo: "/images/nodebrew.png",
    details: [
      "Built a global tech community from zero to 10,000+ members across 36 countries by defining programs, growth channels, and long-term strategy.",
      "Led a 35-member cross-functional team across product, engineering, design, and partnerships to deliver hackathons, mentorship cohorts, and bootcamps.",
      "Owned end-to-end program design and execution for 3 hackathons, 5 mentorship cohorts, and 20+ bootcamps, driving sustained engagement.",
      "Formed partnerships with 19 sponsors including Jane Street, Balsamiq, and Linode, securing $30,000 in sponsorship to fund community initiatives.",
    ],
  },
  {
    id: 2,
    jobTitle: "Engineering Intern",
    companyName: "Intervue.io",
    dates: "Sept 2024 – Apr 2025",
    logo: "/images/intervue.jpeg",
    details: [
      "Identified inconsistencies in technical interview scoring and redesigned rubric structures to enable clearer, fairer assessments.",
      "Structured 20+ rubrics across 5 engineering domains, reducing reviewer ambiguity and improving hiring decision consistency.",
      "Automated rubric formatting and version updates using Google Apps Script, improving turnaround time for rubric deployment.",
    ],
  },
  {
    id: 3,
    jobTitle: "Product Growth Intern",
    companyName: "SkillArena",
    dates: "May 2024 – Jul 2024",
    logo: "/images/skillarena.jpeg",
    details: [
      "Led campus acquisition across 30 colleges, onboarding 4,000 users and supporting activation experiments that drove 101% month-over-month growth.",
      "Diagnosed fragmented outreach workflows and built a centralized outreach tracker with reusable templates, reducing manual coordination overhead.",
      "Supported funnel analysis and iteration across onboarding and activation flows.",
    ],
  },
  {
    id: 4,
    jobTitle: "Product Management Intern",
    companyName: "Instaprep AI",
    dates: "Jun 2023 – Aug 2023",
    logo: "/images/instapreps.png",
    details: [
      "Analyzed learner behavior data to identify friction points and early drop-offs in the practice journey.",
      "Proposed UX changes that simplified the practice flow and improved session completion for new learners.",
      "Authored PRDs and worked closely with engineering to translate insights into shipped product changes.",
    ],
  },
  {
    id: 5,
    jobTitle: "Software Engineering Intern",
    companyName: "Rehabilitation Society for the Visually Impaired",
    dates: "May 2021 – Jul 2021",
    logo: "/images/rsvi.webp",
    details: [
      "Built and shipped an accessible web platform using React and CSS, enabling the organization to move key resources online.",
      "Owned frontend development from wireframes to deployment, integrating APIs for dynamic content delivery.",
      "Delivered the product within a three-month timeline while adhering to accessibility standards.",
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