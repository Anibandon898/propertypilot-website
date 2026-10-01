import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand" onClick={closeMobileMenu}>
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

        <button
          type="button"
          className="mobile-menu"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav">
          <NavLink
            to="/how-it-works"
            className={navClass}
            onClick={closeMobileMenu}
          >
            How It Works
          </NavLink>

          <NavLink
            to="/solutions"
            className={navClass}
            onClick={closeMobileMenu}
          >
            Solutions
          </NavLink>

          <NavLink
            to="/features"
            className={navClass}
            onClick={closeMobileMenu}
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            className={navClass}
            onClick={closeMobileMenu}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>

          <a
            href="https://anibandon898.github.io/end-to-end-real-estate-bot/"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            BOT Page
          </a>

          <NavLink
            to="/demo"
            className={({ isActive }) =>
              isActive ? "nav-cta nav-cta-active" : "nav-cta"
            }
            onClick={closeMobileMenu}
          >
            Book a Demo
            <span>↗</span>
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;