import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'User Login System',
    subtitle: 'Spring Boot Auth',
    year: '2024',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'BCrypt', 'MVC'],
    description:
      'A secure authentication system built with Spring Boot featuring user registration, login, and session management. Implements BCrypt password hashing, JPA with MySQL for persistent storage, and follows clean MVC architecture.',
    highlights: [
      'RESTful API with full validation & exception handling',
      'Spring Security integration with BCrypt encryption',
      'Hibernate (JPA) + MySQL for persistence',
      'MVC architecture for modular code',
    ],
    github: 'https://github.com/AyushmaanX02',
    color: '#7c6af7',
    icon: '🔐',
    featured: true,
  },
  {
    id: 2,
    title: 'Banking System REST API',
    subtitle: 'Java, Spring Boot',
    year: 'Nov 2025 – 2026',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Docker'],
    description:
      'Developed a secure banking backend application using Java 17, Spring Boot, Spring Security, and MySQL. Implemented JWT-based authentication and Role-Based Access Control (RBAC) for ADMIN and CUSTOMER roles.',
    highlights: [
      'JWT-based authentication with Role-Based Access Control (RBAC)',
      'Account, beneficiary, deposits, withdrawals, and fund transfer modules',
      'Layered architecture (Controller-Service-Repository) with DTO pattern',
      'Transaction rollback using @Transactional for data consistency',
      'Global exception handling, request validation, and audit logging',
      'Swagger/OpenAPI documentation and Docker support',
    ],
    github: 'https://github.com/AyushmaanX02',
    color: '#4a90e2',
    icon: '🏦',
    featured: false,
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    subtitle: 'React, JavaScript, CSS',
    year: '2025',
    tags: ['React', 'JavaScript', 'CSS', 'Vercel', 'Git', 'CI/CD'],
    description:
      'Developed a responsive portfolio website using React and modern UI practices. Deployed on Vercel with Git-based CI/CD workflow and ensured cross-device compatibility.',
    highlights: [
      'Responsive design with modern React practices',
      'Deployed on Vercel with Git-based CI/CD',
      'Cross-device compatibility and performance optimization',
      'Clean component-based architecture',
    ],
    github: 'https://github.com/AyushmaanX02/banking_system-with-Deployment-',
    color: '#6366f1',
    icon: '💼',
    featured: false,
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <p className="section-tag">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects showcasing backend development, machine learning, and hardware engineering.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card card ${project.featured ? 'project-card--featured' : ''}`}
              style={{ '--project-color': project.color }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {project.featured && (
                <div className="featured-tag">⭐ Featured</div>
              )}

              <div className="project-card-inner">
                {/* Left */}
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-icon">{project.icon}</span>
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle} · {project.year}</p>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <ul className="project-highlights">
                    {project.highlights.map(h => (
                      <li key={h}>
                        <span className="highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {project.tags.map(t => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: links */}
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  <div className="project-number">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
