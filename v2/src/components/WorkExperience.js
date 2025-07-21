import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import '../Global.css';

const experienceData = [
  {
    id: 1,
    jobTitle: "Founder & Lead",
    companyName: "Nodebrew",
    dates: "Sept 2020 - Present",
    logo: "/images/nodebrew.png",
    details: [
      "Founded and scaled a global tech community, impacting over 4,000 learners in 36 countries through hackathons, mentorship cohorts, and bootcamps.", 
      "Led cross-functional teams of 100+ individuals across product, engineering, design, and partnerships for over four years.", 
      "Shipped 5 fully redesigned versions of the Nodebrew website, constantly iterating based on user feedback, usability testing, and community growth metrics.", 
      "Secured over $30K in sponsorships from 19 top tech companies including Jane Street, MLH, and Balsamiq through strategic outreach.", 
    ],
  },
  {
    id: 2,
    jobTitle: "Rubric Engineering Intern",
    companyName: "Intervue.io",
    dates: "Oct 2024 - April 2025",
    logo: "/images/intervue.jpeg",
    details: [
      "Collaborated with clients like NPCI, Zomato, and NHPC to translate hiring needs into scalable coding rubrics.", 
      "Created over 30 structured coding rubrics using JavaScript, Google Apps Script, and Sheets-based tooling.",
      "Automated rubric generation workflows via custom scripting, reducing manual effort by over 25% and accelerating client onboarding.", 
    ],
  },
  {
    id: 3,
    jobTitle: "Product Growth Associate",
    companyName: "SkillArena",
    dates: "May 2024 - July 2024",
    logo: "/images/skillarena.jpeg",
    details: [
        "Designed and executed a Go-To-Market (GTM) strategy that onboarded over 30 colleges and 2,500 users in under 3 months.",
        "Optimized user acquisition funnels and feature flows using data analytics, contributing to a 110% month-over-month user growth.",
    ],
  },
  {
    id: 4,
    jobTitle: "Product Management Intern",
    companyName: "Instapreps AI at 7 Classes",
    dates: "Jun 2023 - Aug 2023", 
    logo: "/images/instapreps.png",
    details: [
       "Conducted over 50 user interviews to identify pain points, synthesizing feedback to shape user-centric product workflows.",
        "Authored 5+ detailed Product Requirement Documents (PRDs) and translated them into actionable wireframes and app logic with the engineering team.", 
        "Proposed, scoped, and helped bring a smart coach-scheduler feature to production to support confidence-based learning.", 
    ],
  },
  {
    id: 5,
    jobTitle: "Software Engineering Intern",
    companyName: "Rehabilitation Society for Visually Impaired",
    dates: "May 2021 - Jul 2021",
    logo: "/images/rsvi.webp",
    details: [
       "Designed and deployed an accessible, responsive website using ReactJS and Modular CSS.", 
        "Self-learned ReactJS and led end-to-end development, delivering a production-ready site within 3 months.", 
        "Documented detailed High-Level (HLD) and Low-Level Designs (LLD) to ensure compliance with accessibility standards.",
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