import { useMemo, useState } from 'react';
import { projects } from '../data/portfolio.js';

const categories = ['All', 'Cybersecurity', 'Software Development'];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = useMemo(
    () => activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="section page-shell collection-page">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h1 className="section-title">My <span>Projects</span></h1>
        <p className="section-description">Kumpulan project di bidang keamanan siber dan pengembangan software.</p>
      </div>
      <div className="filter-list" aria-label="Filter kategori project">
        {categories.map((category) => (
          <button
            className={`filter-button${activeCategory === category ? ' active' : ''}`}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredProjects.length ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="card-label">{project.category}</p>
              <h2>{project.name}</h2>
              <p className="card-description">{project.description}</p>
              {project.technologies?.length > 0 && (
                <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              )}
              <div className="project-links">
                {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository ↗</a>}
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo ↗</a>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-mark" aria-hidden="true">✳</span>
          <h2>Project belum ditambahkan</h2>
          <p>{activeCategory === 'All' ? 'Project nyata akan ditampilkan di sini setelah informasinya tersedia.' : `Belum ada project ${activeCategory} yang ditambahkan.`}</p>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
