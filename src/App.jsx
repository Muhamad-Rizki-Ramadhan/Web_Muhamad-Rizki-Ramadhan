
import './App.css';

// Data portofolio
const portfolio = {
  name: 'Muhamad Rizki Ramadhan Siregar',
  role: 'Informatics Student | Aspiring Cybersecurity Analyst',
  description:
    'Saya mahasiswa S1 Informatika di UPN Veteran Jakarta yang memiliki ketertarikan pada cybersecurity, artificial intelligence, dan network security. Saya terus mengembangkan kemampuan untuk memahami sistem dan bagaimana cara melindunginya.',
  education: 'S1 Informatika — UPN Veteran Jakarta',
  interests: [
    'Cybersecurity',
    'Artificial Intelligence',
    'Network Security',
  ],
  skills: ['Python', 'JavaScript'],
  projects: [],
};

// Navbar component
function Navbar() {
  const menus = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Contact',
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Rizki<span>.</span>
      </a>

      <div className="nav-links">
        {menus.map((menu) => (
          <a
            key={menu}
            href={`#${menu.toLowerCase()}`}
          >
            {menu}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  );
}

// Hero component
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          HELLO, WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Rizki.</span>
        </h1>

        <h2>{portfolio.role}</h2>

        <p className="hero-description">
          {portfolio.description}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore My Work ↗
          </a>

          <a href="#about" className="secondary-button">
            More About Me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-icon">R.</div>
        <p className="card-label">FOCUS AREA</p>
        <h3>Cybersecurity</h3>
        <p className="card-description">
          Learning, building, and exploring technology.
        </p>

        <div className="status">
          <span></span>
          Open to learning opportunities
        </div>
      </div>
    </section>
  );
}

// About component
function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-grid">
        <div>
          <p className="section-description">
            {portfolio.description}
          </p>
        </div>

        <div className="info-card">
          <p className="card-label">EDUCATION</p>
          <h3>{portfolio.education}</h3>

          <p className="card-label">INTERESTS</p>
          <div className="tags">
            {portfolio.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills component
function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {portfolio.skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span className="skill-dot"></span>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects component
function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">MY WORK</p>
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      {portfolio.projects.length > 0 ? (
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <div className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-project">
          <h3>Projects coming soon.</h3>
          <p>
            Project showcases will be added here as
            they become available.
          </p>
        </div>
      )}
    </section>
  );
}

// Contact component
function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2 className="section-title">
        Let's <span>Connect.</span>
      </h2>
      <p className="section-description">
        Interested in technology, cybersecurity, or
        collaborating on a project? Feel free to connect.
      </p>
    </section>
  );
}

// Main App
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        © 2026 Rizki. Built with React.
      </footer>
    </>
  );
}

export default App;
