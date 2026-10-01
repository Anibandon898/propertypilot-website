const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <div className="cta-content">
          <span className="eyebrow">READY TO AUTOMATE?</span>

          <h2>
            Your next lead could
            <span> already be looking for you.</span>
          </h2>

          <p>
            See how PropertyPilot can help your real estate business capture
            more enquiries, respond faster, and build a more efficient sales
            process.
          </p>

          <div className="cta-actions">
            <a href="mailto:hello@propertypilot.ai" className="cta-primary">
              Book a Demo
              <span>→</span>
            </a>

            <a href="#features" className="cta-secondary">
              Explore Features
            </a>
          </div>
        </div>

        <div className="cta-decoration">
          <div className="cta-orbit orbit-one"></div>
          <div className="cta-orbit orbit-two"></div>
          <div className="cta-orbit orbit-three"></div>

          <div className="cta-center">
            <span>P</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;