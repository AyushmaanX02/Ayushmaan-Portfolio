import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'B.E. Computer Science Engineering',
    institution: 'Chandigarh University',
    period: '2022 – Present',
    score: '7.14 / 10 CGPA',
    icon: '🎓',
    status: 'Ongoing',
    highlights: [
      'Focus on Java Backend Development & Spring ecosystem',
      'Projects in ML, Hardware, and Web Development',
      'Completed 6-week Full Stack in-house training',
      'Science Exhibition participant',
    ],
  },
  {
    degree: 'Class XII — CBSE',
    institution: "St. Anselm's Sr. Sec. School",
    period: '2021 – 2022',
    score: '75%',
    icon: '📚',
    status: 'Completed',
    highlights: [
      'Competed in district-level badminton tournaments',
      'Performed as guitarist in school band',
    ],
  },
  {
    degree: 'Class X — CBSE',
    institution: "St. Anselm's Sr. Sec. School",
    period: '2019 – 2020',
    score: '86%',
    icon: '📖',
    status: 'Completed',
    highlights: [
      'Strong academic foundation in Science and Mathematics',
    ],
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-inner">
        <p className="section-tag">Academic background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Building a strong technical foundation through formal education and continuous learning.
        </p>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div key={i} className={`card edu-card ${i === 0 ? 'edu-card--primary' : ''}`}>
              <div className="edu-card-top">
                <span className="edu-icon">{edu.icon}</span>
                <span className={`edu-status ${edu.status === 'Ongoing' ? 'edu-status--ongoing' : 'edu-status--done'}`}>
                  {edu.status}
                </span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>

              <div className="edu-meta">
                <span className="edu-period">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                  {edu.period}
                </span>
                <span className="edu-score badge">{edu.score}</span>
              </div>

              <ul className="edu-highlights">
                {edu.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="edu-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
