import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <span className="brand-mark">P</span>
          <span className="brand-name">PropertyPilot</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/how-it-works" className={navClass}>
            How It Works
          </NavLink>

          <NavLink to="/solutions" className={navClass}>
            Solutions
          </NavLink>

          <NavLink to="/features" className={navClass}>
            Features
          </NavLink>

          <NavLink to="/pricing" className={navClass}>
            Pricing
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <a
            href="https://anibandon898.github.io/end-to-end-real-estate-bot/"
            className="nav-link"
          >
            BOT Page
          </a>
        </nav>

        <NavLink
          to="/demo"
          className={({ isActive }) =>
            isActive ? "nav-cta nav-cta-active" : "nav-cta"
          }
        >
          Book a Demo
          <span>↗</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;