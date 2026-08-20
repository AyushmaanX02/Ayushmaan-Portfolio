import React from 'react';
import './Certifications.css';

const certs = [
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. (Forage)',
    icon: '🏦',
    color: '#003087',
    description: 'Completed JPMorgan Chase\'s Software Engineering virtual experience — set up a dev environment, fixed broken code, and used the Perspective data visualization library to build a live financial data graph.',
    year: '2025',
  },
  {
    title: '.NET Full Stack Developer Specialization',
    issuer: 'Coursera',
    icon: '🏅',
    color: '#0078d4',
    description: 'Completed a comprehensive .NET full stack development specialization covering C#, ASP.NET, and related technologies.',
    year: '2024',
  },
  {
    title: 'Database and SQL',
    issuer: 'Infosys Springboard',
    icon: '🗄️',
    color: '#ff7043',
    description: 'Mastered relational database concepts, SQL queries, joins, transactions, and database design principles.',
    year: '2024',
  },
  {
    title: 'Data Structures & Algorithms using Java',
    issuer: 'Infosys Springboard',
    icon: '⚙️',
    color: '#43a047',
    description: 'Strengthened core DSA concepts including arrays, linked lists, trees, graphs, and algorithm complexity using Java.',
    year: '2024',
  },
  {
    title: 'Full Stack Development Training',
    issuer: 'Chandigarh University',
    icon: '🎓',
    color: '#7c6af7',
    description: 'Successfully completed 6-week in-house summer training in full stack web development.',
    year: '2025',
  },
];

function Certifications() {
  return (
    <section className="section certs-section" id="certifications">
      <div className="section-inner">
        <p className="section-tag">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Continuous learning through professional certifications and training programs.
        </p>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div key={i} className="card cert-card" style={{ '--cert-color': cert.color }}>
              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-year badge">{cert.year}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
