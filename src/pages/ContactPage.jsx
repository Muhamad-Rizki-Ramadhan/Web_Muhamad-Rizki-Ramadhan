import { useState } from 'react';
import { portfolioData } from '../data/portfolioData.ts';

function ContactPage() {
  const [copyMessage, setCopyMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const email = portfolioData.contacts.email;

  async function copyEmail() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage('Email copied to clipboard.');
    } catch {
      setCopyMessage('Clipboard access is unavailable in this browser.');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage('Form validated. This demo does not send or store your message.');
    event.currentTarget.reset();
  }

  return (
    <div className="page-shell inner-page contact-page">
      <section className="section contact-layout" aria-labelledby="contact-heading">
        <div className="contact-copy">
          <h1 id="contact-heading">Let&apos;s <span>Connect</span></h1>
          <p className="section-description">For recruiters, collaborators, and people building thoughtful technology: I&apos;d be glad to hear from you.</p>
          <div className="contact-status"><span className="signal-dot" /> OPEN TO OPPORTUNITIES</div>
          <div className="contact-coordinate">JAKARTA, INDONESIA <span>/</span> UTC+7</div>
        </div>

        <div className="contact-details">
          <article className="contact-card glass-card">
            <span className="contact-icon">@</span>
            <div><span className="mono-label">EMAIL</span><p>{email || '[Email Placeholder]'}</p></div>
            <button className="copy-button" type="button" onClick={copyEmail} disabled={!email}>{email ? 'Copy email' : 'Add email to enable copy'}</button>
          </article>
          <article className="contact-card glass-card">
            <span className="contact-icon">in</span>
            <div><span className="mono-label">LINKEDIN</span><p>{portfolioData.contacts.linkedIn || '[LinkedIn Placeholder]'}</p></div>
            {portfolioData.contacts.linkedIn ? <a className="contact-open" href={portfolioData.contacts.linkedIn} target="_blank" rel="noreferrer">Open &#8599;</a> : <span className="disabled-link">Link not added</span>}
          </article>
          <article className="contact-card glass-card">
            <span className="contact-icon">GH</span>
            <div><span className="mono-label">GITHUB</span><p>{portfolioData.contacts.github || '[GitHub Placeholder]'}</p></div>
            {portfolioData.contacts.github ? <a className="contact-open" href={portfolioData.contacts.github} target="_blank" rel="noreferrer">Open &#8599;</a> : <span className="disabled-link">Link not added</span>}
          </article>
          {copyMessage && <p className="inline-feedback" role="status">{copyMessage}</p>}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
