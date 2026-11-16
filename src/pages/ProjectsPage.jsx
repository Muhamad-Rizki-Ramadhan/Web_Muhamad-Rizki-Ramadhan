import { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/portfolioData.ts';

const categories = ['All', 'Cybersecurity', 'Software Development'];

function CaseStudyDialog({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('dialog-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('dialog-open');
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section
        className="case-dialog glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="dialog-topline"><span className="mono-label">CASE STUDY / {project.id}</span><button className="icon-button" type="button" aria-label="Close case study" onClick={onClose}>X</button></div>
        <span className="category-badge">{project.category}</span>
        <h2 id="case-dialog-title">{project.title}</h2>
        <p className="dialog-summary">{project.summary}</p>
        <div className="case-study-grid">
          <article><span className="mono-label">01 / PROBLEM</span><p>{project.caseStudy.problem}</p></article>
          <article><span className="mono-label">02 / APPROACH</span><p>{project.caseStudy.approach}</p></article>
          <article><span className="mono-label">03 / TAKEAWAYS</span><p>{project.caseStudy.takeaways}</p></article>
        </div>
        <div className="tag-list">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
        {(project.repositoryUrl || project.demoUrl) && (
          <div className="dialog-links">
            {project.repositoryUrl && <a className="outline-button" href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub &#8599;</a>}
            {project.demoUrl && <a className="outline-button" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo &#8599;</a>}
          </div>
        )}
      </section>
    </div>
  );
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="page-shell inner-page projects-page">
      <section className="section collection-page" aria-labelledby="projects-heading">
        <div className="section-heading">
          <h1 id="projects-heading" className="section-title">Projects<span className="title-period"></span></h1>
          <p className="section-description">A growing collection of work across security and software development. Select a card to explore its case-study structure.</p>
        </div>
        <div className="filter-row">
          <div className="filter-list" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button className={`filter-button${activeCategory === category ? ' active' : ''}`} key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>
                {category === 'All' ? 'All projects' : category}
              </button>
            ))}
          </div>
          <span className="result-count">{String(filteredProjects.length).padStart(2, '0')} PROJECTS</span>
        </div>
        <div className="projects-grid" aria-live="polite">
          {filteredProjects.map((project) => (
            <article className="project-card spotlight-card" key={project.id}>
              <div className="project-card-header"><span className="category-badge">{project.category}</span><span className="project-number">PROJECT / {project.id}</span></div>
              <button type="button" className="project-card-main" onClick={() => setSelectedProject(project)}>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <span className="case-link">Open case study <span aria-hidden="true">&#8599;</span></span>
              </button>
              <div className="tag-list">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
              {(project.repositoryUrl || project.demoUrl) && (
                <div className="project-card-footer">
                  {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub &#8599;</a>}
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo &#8599;</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      {selectedProject && <CaseStudyDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default ProjectsPage;
