import React, { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={e => handleNav(e, '#hero')}>
          <span className="logo-bracket">&lt;</span>
          AK
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={e => handleNav(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/ayushmaankapoor02"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary navbar-cta"
        >
          Hire Me
        </a>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={e => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/ayushmaankapoor02"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
