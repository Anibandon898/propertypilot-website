function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="page-eyebrow">ABOUT PROPERTY PILOT</span>

          <h1>
            Technology built around
            <span> better property conversations.</span>
          </h1>

          <p>
            PropertyPilot helps real estate businesses turn enquiries into
            structured opportunities through AI, automation, and intelligent
            sales workflows.
          </p>
        </div>

        <div className="about-hero-image">
          <div className="about-image-overlay"></div>

          <div className="about-image-label">
            <span>PROPERTY / TECHNOLOGY</span>
            <strong>THE FUTURE OF PROPERTY SALES</strong>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-intro">
          <span>THE IDEA</span>

          <h2>
            Real estate should spend less time
            <em> chasing enquiries.</em>
          </h2>
        </div>

        <div className="about-story-content">
          <p>
            Every property business receives enquiries. The challenge is
            turning those enquiries into meaningful sales opportunities.
          </p>

          <p>
            Prospects ask questions at different times, across different
            channels, with different levels of intent. Sales teams cannot
            always respond immediately or manually qualify every opportunity.
          </p>

          <p>
            PropertyPilot was built to close that gap.
          </p>

          <p>
            Our platform combines AI conversations, structured lead
            qualification, property matching, and automation to help property
            businesses respond faster and work with better information.
          </p>
        </div>
      </section>

      <section className="about-property-grid">
        <div className="about-property-main">
          <div className="about-property-overlay"></div>

          <div className="property-image-caption">
            <span>01 / PROPERTY</span>
            <strong>Every enquiry starts with a conversation.</strong>
          </div>
        </div>

        <div className="about-property-side">
          <div className="about-property-small">
            <div className="about-property-overlay"></div>

            <div className="property-image-caption">
              <span>02 / INTELLIGENCE</span>
              <strong>AI turns conversations into insight.</strong>
            </div>
          </div>

          <div className="about-property-stat">
            <span>THE PROPERTY PILOT APPROACH</span>

            <strong>
              Capture.
              <br />
              Qualify.
              <br />
              Match.
              <br />
              Convert.
            </strong>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-label">
          <span>OUR PURPOSE</span>
          <i></i>
        </div>

        <div className="about-mission-grid">
          <article className="about-purpose-card">
            <span>01</span>

            <small>OUR VISION</small>

            <h2>
              To make every property enquiry
              <em> an opportunity.</em>
            </h2>

            <p>
              We envision a property industry where intelligent technology
              helps every serious prospect receive a faster, more relevant,
              and more human sales experience.
            </p>
          </article>

          <article className="about-purpose-card">
            <span>02</span>

            <small>OUR MISSION</small>

            <h2>
              Build smarter systems for
              <em> property businesses.</em>
            </h2>

            <p>
              Our mission is to combine AI and automation with real estate
              workflows to help agents, agencies, and developers capture,
              understand, and convert more opportunities.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <span>WHAT WE BELIEVE</span>

          <h2>
            Technology should make
            <em> people better at what they do.</em>
          </h2>
        </div>

        <div className="about-values-grid">
          <article>
            <span>01</span>
            <h3>Intelligence</h3>
            <p>
              Give sales teams better information before the conversation even
              begins.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Automation</h3>
            <p>
              Remove repetitive tasks so teams can focus on relationships and
              revenue.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Human Connection</h3>
            <p>
              Use technology to improve the customer experience, not replace
              meaningful conversations.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;