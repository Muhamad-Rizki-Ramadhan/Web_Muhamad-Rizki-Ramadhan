import { Link } from 'react-router-dom';
import FocusIcon from '../components/FocusIcon.jsx';
import ProfilePhoto from '../components/ProfilePhoto.jsx';
import { portfolioData, projects } from '../data/portfolioData.ts';

const focusAreas = [
  { icon: 'shield', title: 'Cybersecurity', description: 'Security concepts, system protection, and responsible practice.' },
  { icon: 'network', title: 'Network Security', description: 'Understanding how networks communicate and can be protected.' },
  { icon: 'code', title: 'Software Development', description: 'Building useful software with clear, maintainable code.' },
];

function HomePage() {
  return (
    <>
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow"><span className="terminal-prompt">&gt;</span> HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1 id="hero-title">Hi, I&apos;m <span>Rizki.</span></h1>
          <p className="hero-role">{portfolioData.role}</p>
          <p className="hero-description">{portfolioData.description}</p>
          <div className="hero-actions">
            <Link to="/projects" className="primary-button">Explore Projects <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/about" className="secondary-button">About Me</Link>
          </div>
          <div className="hero-meta"><span className="signal-dot" /> INFORMATICS / SECURITY / AI</div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <ProfilePhoto />
          <div className="telemetry-chip chip-campus"><span className="chip-marker" /> UPN VETERAN JAKARTA</div>
          <div className="telemetry-chip chip-focus"><span className="chip-marker blue" /> CYBERSECURITY &amp; AI</div>
          <span className="hud-coordinate">06.31&deg; S / 106.82&deg; E</span>
        </div>
      </section>

      <section className="section page-shell" aria-labelledby="focus-heading">
        <div className="section-heading">
          <p className="eyebrow">// 01. CORE FOCUS</p>
          <h2 id="focus-heading" className="section-title">Areas I&apos;m <span>Exploring</span></h2>
          <p className="section-description">Four connected interests that shape my learning journey in technology.</p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className="focus-card spotlight-card" key={area.title}>
              <div className="focus-card-top"><FocusIcon name={area.icon} /><span>0{index + 1}</span></div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <span className="card-corner" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell featured-section" aria-labelledby="featured-heading">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">// 02. FEATURED WORK</p>
            <h2 id="featured-heading" className="section-title">Selected <span>Projects</span></h2>
          </div>
          <Link to="/projects" className="text-link">View all projects <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project) => (
            <Link to="/projects" className="featured-card spotlight-card" key={project.id}>
              <div className="featured-meta"><span>{project.category}</span><span>PROJECT // {project.id}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="featured-open">Explore case study <span aria-hidden="true">&#8599;</span></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
