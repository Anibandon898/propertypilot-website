const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            AI-Powered Real Estate Automation
          </div>

          <h1>
            Turn property enquiries
            <span> into opportunities.</span>
          </h1>

          <p className="hero-description">
            PropertyPilot helps real estate businesses capture leads,
            qualify prospects, automate follow-ups, and move more
            opportunities toward a sale.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Book a Demo
              <span>→</span>
            </a>

            <a href="#how-it-works" className="secondary-button">
              See How It Works
            </a>
          </div>

          <div className="hero-proof">
            <div className="proof-item">
              <strong>24/7</strong>
              <span>Lead Response</span>
            </div>

            <div className="proof-divider"></div>

            <div className="proof-item">
              <strong>AI</strong>
              <span>Lead Qualification</span>
            </div>

            <div className="proof-divider"></div>

            <div className="proof-item">
              <strong>Automated</strong>
              <span>Follow-Up</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div>
                <span className="dashboard-label">LIVE LEAD</span>
                <h3>New Property Enquiry</h3>
              </div>

              <span className="status-pill">Qualified</span>
            </div>

            <div className="lead-profile">
              <div className="profile-avatar">K</div>

              <div>
                <strong>Kufre Edet</strong>
                <span>Potential Buyer</span>
              </div>
            </div>

            <div className="lead-details">
              <div className="detail-box">
                <span>PROPERTY</span>
                <strong>3 Bedroom House</strong>
              </div>

              <div className="detail-box">
                <span>LOCATION</span>
                <strong>Lagos</strong>
              </div>

              <div className="detail-box">
                <span>BUDGET</span>
                <strong>₦50M</strong>
              </div>

              <div className="detail-box">
                <span>TIMELINE</span>
                <strong>2 Months</strong>
              </div>
            </div>

            <div className="automation-flow">
              <div className="flow-title">
                <span>Automation Flow</span>
                <span className="flow-live">LIVE</span>
              </div>

              <div className="flow-step completed">
                <span className="flow-number">01</span>
                <div>
                  <strong>AI Conversation</strong>
                  <span>Lead captured</span>
                </div>
                <span className="flow-check">✓</span>
              </div>

              <div className="flow-line"></div>

              <div className="flow-step completed">
                <span className="flow-number">02</span>
                <div>
                  <strong>Qualification</strong>
                  <span>Requirements identified</span>
                </div>
                <span className="flow-check">✓</span>
              </div>

              <div className="flow-line"></div>

              <div className="flow-step active">
                <span className="flow-number">03</span>
                <div>
                  <strong>Follow-Up</strong>
                  <span>Automation running</span>
                </div>
                <span className="flow-spinner"></span>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✦</span>
            <div>
              <strong>AI Qualified</strong>
              <span>High-intent lead</span>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">↗</span>
            <div>
              <strong>Lead Captured</strong>
              <span>Just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;