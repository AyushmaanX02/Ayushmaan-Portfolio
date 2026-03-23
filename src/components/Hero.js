import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Java Backend Developer',
  'Spring Boot Engineer',
  'RESTful API Builder',
  'Full Stack Learner',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Glows */}
      <div className="glow glow-1" aria-hidden="true" />
      <div className="glow glow-2" aria-hidden="true" />

      {/* Floating code snippets */}
      <div className="float-code float-code-1" aria-hidden="true">
        <pre>{`@RestController\npublic class AuthController {`}</pre>
      </div>
      <div className="float-code float-code-2" aria-hidden="true">
        <pre>{`spring.security\n  .BCrypt.encode()`}</pre>
      </div>
      <div className="float-code float-code-3" aria-hidden="true">
        <pre>{`@Entity\n@Table(name="users")`}</pre>
      </div>

      <div className="hero-content">
        {/* Status badge */}
        <div className="hero-status animate-fadeUp">
          <span className="status-dot" />
          Available for opportunities
        </div>

        {/* Greeting */}
        <p className="hero-greeting animate-fadeUp delay-1">
          Hey there, I'm
        </p>

        {/* Name */}
        <h1 className="hero-name animate-fadeUp delay-2">
          Ayushmaan<br />
          <span className="name-accent">Kapoor</span>
        </h1>

        {/* Typing role */}
        <div className="hero-role animate-fadeUp delay-3">
          <span className="role-prefix">{'>'}_</span>
          <span className="role-text">{displayed}</span>
          <span className="cursor" />
        </div>

        {/* Description */}
        <p className="hero-desc animate-fadeUp delay-4">
          CSE student passionate about building secure, scalable backend systems
          with <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>RESTful APIs</strong>.
          Currently at Chandigarh University, turning ideas into production-ready code.
        </p>

        {/* CTAs */}
        <div className="hero-ctas animate-fadeUp delay-5">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3z"/><path d="m9 9 6 6m0-6-6 6"/>
            </svg>
            View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
          <a
            href="https://github.com/AyushmaanX02"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Tech stack pills */}
        <div className="hero-stack animate-fadeUp delay-5">
          {['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST APIs', 'Spring Security'].map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <div className="scroll-wheel" />
      </button>
    </section>
  );
}

export default Hero;
