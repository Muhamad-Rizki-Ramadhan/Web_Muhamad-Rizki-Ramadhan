import { Outlet, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData.ts';
import Navbar from './Navbar.jsx';

const currentYear = new Date().getFullYear();

function ContactFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-shell">
        <div className="footer-intro">
          <p className="eyebrow"></p>
          <h2>Let&apos;s connect<span>.</span></h2>
          <p>
            Interested in cybersecurity, technology, or a future collaboration?
            Find my contact details on the contact page.
          </p>
        </div>
        <p className="footer-coordinate">JAKARTA, INDONESIA <span>|</span> {currentYear}</p>
      </div>
      <p className="copyright">
        &copy; {currentYear} {portfolioData.name}. Designed with intention.
      </p>
    </footer>
  );
}

function SiteLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="page-content" key={location.pathname}><Outlet /></main>
      <ContactFooter />
    </>
  );
}

export default SiteLayout;
