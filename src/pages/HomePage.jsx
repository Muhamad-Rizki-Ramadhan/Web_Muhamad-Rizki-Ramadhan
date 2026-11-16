import { Link } from 'react-router-dom';
import ProfilePhoto from '../components/ProfilePhoto.jsx';
import { portfolio } from '../data/portfolio.js';

function HomePage() {
  return (
    <>
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1 id="hero-title">Hi, I&apos;m <span>Rizki.</span></h1>
          <h2>{portfolio.role}</h2>
          <p className="hero-description">{portfolio.description}</p>
          <div className="hero-actions">
            <a href="#about" className="primary-button">About Me <span aria-hidden="true">↘</span></a>
            <a href="#contact" className="secondary-button">Contact</a>
          </div>
        </div>
        <ProfilePhoto />
      </section>

      <section className="section page-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>
        <div className="about-grid">
          <p className="section-description">{portfolio.description}</p>
          <div className="info-card">
            <p className="card-label">EDUCATION</p>
            <h3>{portfolio.education}</h3>
            <p className="card-label interests-label">INTERESTS</p>
            <div className="tags">
              {portfolio.interests.map((interest) => <span key={interest}>{interest}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell" id="skills">
        <div className="section-heading">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">My <span>Skills</span></h2>
        </div>
        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-index">0{index + 1}</span>
              <span className="skill-dot" aria-hidden="true" />
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
        <Link to="/projects" className="text-link">Lihat halaman Projects <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}

export default HomePage;
