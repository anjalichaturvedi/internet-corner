import React from 'react';
import ExperienceItem from './ExperienceItem';
import '../Global.css';

const educationData = [
  {
    id: 1,
    degree: "BS, Computer Science",
    institution: "Jaypee Institute of Information Technology",
    year: "2022 - 2026",
    logo: "images/jiit.jpeg"
  },
  {
    id: 2,
    degree: "Senior Secondary Education (CBSE)",
    institution: "Delhi Public School, Vasant Kunj",
    year: "2020-2022",
    logo: "/images/dps.jpeg"
  },
]

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map(edu => (
          <ExperienceItem
            key={edu.id}
            job={{
              logo: edu.logo,
              jobTitle: edu.degree,
              companyName: edu.institution,
              dates: edu.year,
              details: [] 
            }}
            isExpanded={false}
            onToggleDetails={() => {}}
          />
        ))}
      </div>
    </section>
  );
};


export default Education;