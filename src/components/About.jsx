const About = () => {
  const technologies = [
    "AI",
    "Python",
    "FastAPI",
    "n8n",
    "Supabase",
    "APIs",
  ];

  return (
    <section className="section about" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="eyebrow">ABOUT PROPERTYPILOT</span>

            <h2>
              Real estate sales,
              <span> intelligently automated.</span>
            </h2>

            <p>
              PropertyPilot is an AI-powered automation platform designed to
              help real estate businesses capture, qualify, organize, and
              follow up with property leads.
            </p>

            <p>
              Instead of relying on manual responses and disconnected tools,
              PropertyPilot connects the customer journey into one intelligent
              workflow—from the first website conversation to the next sales
              action.
            </p>

            <a href="#contact" className="about-link">
              Build your automation system
              <span>→</span>
            </a>
          </div>

          <div className="about-panel">
            <div className="about-panel-header">
              <span>THE PROPERTYPILOT SYSTEM</span>
              <span className="system-status">● ACTIVE</span>
            </div>

            <div className="system-flow">
              <div className="system-node">
                <span className="node-icon">01</span>
                <div>
                  <strong>Visitor</strong>
                  <span>Website enquiry</span>
                </div>
              </div>

              <div className="system-connector"></div>

              <div className="system-node">
                <span className="node-icon">02</span>
                <div>
                  <strong>AI Assistant</strong>
                  <span>Conversation & qualification</span>
                </div>
              </div>

              <div className="system-connector"></div>

              <div className="system-node">
                <span className="node-icon">03</span>
                <div>
                  <strong>Automation</strong>
                  <span>Workflows & follow-up</span>
                </div>
              </div>

              <div className="system-connector"></div>

              <div className="system-node">
                <span className="node-icon">04</span>
                <div>
                  <strong>Sales Team</strong>
                  <span>Actionable opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="technology-strip">
          <span className="technology-label">BUILT WITH</span>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;