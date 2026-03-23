import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Development Trainee',
    company: 'Chandigarh University',
    type: 'In-House Summer Training',
    period: 'May 2025 – June 2025',
    duration: '6 Weeks',
    description:
      'Successfully completed a 6-week intensive Summer Training Program focused on Full Stack Mastery for building dynamic web applications.',
    bullets: [
      'Gained hands-on experience in backend development and full stack application architecture.',
      'Worked with modern web technologies and applied concepts to real-world projects.',
      'Training covered both frontend and backend integration for complete application development.',
      'Applied Java, Spring Boot, and database integration in a structured learning environment.',
    ],
    badge: 'Completed',
    badgeColor: 'green',
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner">
        <p className="section-tag">Work & Training</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Hands-on training and practical experience in software development.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />

              <div className="card experience-card">
                <div className="exp-header">
                  <div className="exp-header-left">
                    <div className="exp-company-icon">CU</div>
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company} · {exp.type}</p>
                    </div>
                  </div>
                  <div className="exp-header-right">
                    <span className={`exp-badge exp-badge--${exp.badgeColor}`}>{exp.badge}</span>
                    <p className="exp-period">{exp.period}</p>
                    <span className="badge">{exp.duration}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>
                      <svg width="14" height="14" fill="none" stroke="var(--accent)" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Looking for more */}
          <div className="timeline-item timeline-item--future">
            <div className="timeline-dot timeline-dot--future" />
            <div className="experience-card experience-card--future card">
              <p className="future-text">
                🚀 Open to internships and full-time Java Backend Developer roles
              </p>
              <a href="mailto:ayushmaankapoor02@gmail.com" className="btn btn-primary">
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
