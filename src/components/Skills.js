import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Spring Security', level: 75 },
      { name: 'Hibernate / JPA', level: 78 },
      { name: 'RESTful APIs', level: 82 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 78 },
      { name: 'SQL (Infosys Certified)', level: 80 },
      { name: 'MVC Architecture', level: 82 },
      { name: 'Git & GitHub', level: 75 },
    ],
  },
  {
    title: 'Frontend / Other',
    icon: '🌐',
    skills: [
      { name: 'HTML & CSS', level: 72 },
      { name: 'JavaScript', level: 65 },
      { name: 'Python (ML)', level: 60 },
      { name: 'Arduino / C', level: 55 },
      { name: '.NET (Coursera)', level: 58 },
    ],
  },
];

const techBadges = [
  'Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA',
  'MySQL', 'REST APIs', 'MVC', 'BCrypt', 'HTML', 'CSS', 'JavaScript',
  'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Arduino', '.NET', 'Git',
];

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ '--w': `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <p className="section-tag">What I work with</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical toolkit — from backend architecture to databases and beyond.
        </p>

        {/* Category cards */}
        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div key={cat.title} className="card skill-category">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map(s => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges cloud */}
        <div className="tech-cloud">
          <p className="tech-cloud-label">All technologies</p>
          <div className="tech-cloud-badges">
            {techBadges.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
