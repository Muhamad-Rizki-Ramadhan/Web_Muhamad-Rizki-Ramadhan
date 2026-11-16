import { certificates, portfolioData } from '../data/portfolioData.ts';

function AboutPage() {
  return (
    <div className="page-shell inner-page about-page">
      <section className="section about-intro" aria-labelledby="about-heading">
        <div className="section-heading">
          <h1 id="about-heading" className="section-title">About <span>Me</span></h1>
          <p className="section-description">A little context about my background, interests, and the skills I&apos;m building.</p>
        </div>
        <div className="about-grid">
          <article className="bio-panel glass-card">
            <span className="mono-label">PROFILE</span>
            <h2>{portfolioData.name}</h2>
            <p>{portfolioData.description}</p>
            <div className="about-interest-tags">
              {portfolioData.interests.map((interest) => <span className="tech-tag" key={interest}>{interest}</span>)}
            </div>
          </article>
          <article className="education-card glass-card">
            <span className="mono-label">EDUCATION / CURRENT</span>
            <span className="timeline-marker" />
            <p className="education-degree">{portfolioData.education.degree}</p>
            <h2>{portfolioData.education.institution}</h2>
            <p className="education-program">{portfolioData.education.program}</p>
            <dl className="education-details">
              <div><dt>GPA</dt><dd>{portfolioData.education.gpa}</dd></div>
              <div><dt>EXPECTED GRADUATION</dt><dd>{portfolioData.education.graduation}</dd></div>
              <div><dt>RELEVANT COURSEWORK</dt><dd>{portfolioData.education.coursework}</dd></div>
            </dl>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <h2 id="skills-heading" className="section-title">Skills &amp; <span>Learning</span></h2>
        </div>
        <div className="skill-groups">
          {portfolioData.skillGroups.map((group, index) => (
            <article className="skill-group glass-card" key={group.title}>
              <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
              <div className="tag-list">{group.skills.map((skill) => <span className={skill.includes('Placeholder') ? 'tech-tag placeholder-tag' : 'tech-tag'} key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="journey-layout">
          <div>
            <h3 className="journey-title">Always <span>Learning</span></h3>
          </div>
          <ol className="journey-timeline">
            {portfolioData.learningJourney.map((step, index) => (
              <li key={`${step.title}-${index}`}>
                <span className="journey-index">0{index + 1}</span>
                <div><h4>{step.title}</h4><p>{step.detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section certificate-section" id="certificates" aria-labelledby="certificates-heading">
        <div className="section-heading section-heading-row">
          <div>
            <h2 id="certificates-heading" className="section-title">Certificates &amp; <span>Achievements</span></h2>
          </div>
          <span className="credential-count">{String(certificates.length).padStart(2, '0')} RECORDS</span>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card glass-card" key={certificate.id}>
              <div className="certificate-pdf-frame">
                {certificate.pdfPath ? (
                  <iframe
                    src={`${certificate.pdfPath}#view=FitH&toolbar=0&navpanes=0`}
                    title={`Certificate PDF: ${certificate.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="certificate-pdf-empty">
                    <span className="pdf-mark">PDF</span>
                    <span>PDF FILE NOT ADDED</span>
                  </div>
                )}
              </div>
              <div className="certificate-copy">
                <span className="mono-label">{certificate.id}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <span className="certificate-date">{certificate.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
