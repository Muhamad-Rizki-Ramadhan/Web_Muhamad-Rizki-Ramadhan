import { Outlet } from 'react-router-dom';
import { portfolio } from '../data/portfolio.js';
import Navbar from './Navbar.jsx';

const currentYear = new Date().getFullYear();

function ContactFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let&apos;s connect.</h2>
          <p>
            Tertarik berdiskusi tentang teknologi, cybersecurity, atau
            kolaborasi? Hubungi saya melalui informasi yang tersedia.
          </p>
        </div>
        <div className="contact-list" aria-label="Informasi kontak">
          {portfolio.contacts.map(({ label, value, href }) => (
            <div className="contact-item" key={label}>
              <span className="contact-label">{label}</span>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer">{value}</a>
              ) : (
                <span className="contact-placeholder">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="copyright">
        © {currentYear} {portfolio.name}. Built with React.
      </p>
    </footer>
  );
}

function SiteLayout() {
  return (
    <>
      <Navbar />
      <main className="page-content"><Outlet /></main>
      <ContactFooter />
    </>
  );
}

export default SiteLayout;
