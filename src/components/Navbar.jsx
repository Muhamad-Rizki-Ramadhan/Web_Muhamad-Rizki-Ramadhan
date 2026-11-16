import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Certificates', to: '/certificates' },
];

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigasi utama">
        <NavLink to="/" className="logo" aria-label="Muhamad Rizki Ramadhan Siregar, Home">
          Muhamad Rizki Ramadhan Siregar<span></span>
        </NavLink>
        <div className="nav-links">
          {links.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
