import React from 'react';
import './About.css';

const stats = [
  { value: '7.14', label: 'CGPA', suffix: '/10' },
  { value: '3+', label: 'Projects Built', suffix: '' },
  { value: '6', label: 'Weeks Training', suffix: 'wk' },
  { value: '4+', label: 'Certifications', suffix: '' },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          {/* Left: avatar / visual */}
          <div className="about-visual">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-box">
                <span className="avatar-initials">AK</span>
              </div>
              <div className="avatar-badge">
                <span>☕</span> Java Dev
              </div>
            </div>
            {/* Stats */}
            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="stat-card card">
                  <span className="stat-value">
                    {s.value}<span className="stat-suffix">{s.suffix}</span>
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="about-text">
            <p className="section-tag">Who I am</p>
            <h2 className="section-title">
              Passionate about<br />
              <span className="highlight">backend engineering</span>
            </h2>

            <p className="about-para">
              I'm Ayushmaan Kapoor, a Computer Science Engineering student at Chandigarh University
              focused on building clean, secure, and scalable backend applications. My core expertise
              lies in <strong>Java</strong> and the <strong>Spring Boot</strong> ecosystem — from
              RESTful API design to database integration and security.
            </p>

            <p className="about-para">
              I believe great software is built on strong foundations: good architecture, tested code,
              and clear documentation. I've hands-on experience with <strong>Spring Security</strong>,
              <strong> Hibernate/JPA</strong>, <strong>MySQL</strong>, and MVC design patterns.
            </p>

            <p className="about-para">
              Outside of code, I've competed in <strong>district-level badminton</strong> tournaments
              and played guitar in my school band — discipline and teamwork that carry over to
              everything I build.
            </p>

            <div className="about-ctas">
              <a
                href="mailto:ayushmaankapoor02@gmail.com"
                className="btn btn-primary"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/ayushmaankapoor02"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
