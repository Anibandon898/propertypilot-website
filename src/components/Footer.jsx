import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="propertypilot-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">P</span>
            <span>PropertyPilot</span>
          </Link>

          <p>
            AI-powered automation for modern real estate businesses.
            Turn property enquiries into opportunities.
          </p>

          <Link to="/demo" className="footer-demo-link">
            Book a Demo
            <span>↗</span>
          </Link>
        </div>

        <div className="footer-column">
          <span className="footer-heading">PLATFORM</span>

          <Link to="/how-it-works">How It Works</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="footer-column">
          <span className="footer-heading">COMPANY</span>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/demo">Book a Demo</Link>
        </div>

        <div className="footer-column footer-contact">
          <span className="footer-heading">CONNECT</span>

          <a href="mailto:hello@propertypilot.ai">
            hello@propertypilot.ai
          </a>

          <span>AI + AUTOMATION + REAL ESTATE</span>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PropertyPilot. All rights reserved.</span>

        <span>BUILT FOR THE FUTURE OF PROPERTY SALES.</span>

        <span>AI · AUTOMATION · PROPERTY</span>
      </div>
    </footer>
  );
}

export default Footer;