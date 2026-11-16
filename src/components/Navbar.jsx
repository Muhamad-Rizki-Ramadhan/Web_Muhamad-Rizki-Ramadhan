import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Primary navigation">
        <NavLink to="/" className="logo" aria-label="Rizki, home">
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
        <span className="availability-pill"><i /> Open to opportunities</span>
      </nav>
    </header>
  );
}

export default Navbar;
