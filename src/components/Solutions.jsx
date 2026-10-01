const Solutions = () => {
  const solutions = [
    {
      number: "01",
      title: "Real Estate Agents",
      description:
        "Capture and qualify enquiries automatically so you can spend more time speaking with serious prospects and closing deals.",
      features: [
        "24/7 AI lead capture",
        "Automatic lead qualification",
        "Instant lead notifications",
      ],
    },
    {
      number: "02",
      title: "Real Estate Agencies",
      description:
        "Create a consistent lead-management process across your team and reduce the number of opportunities lost through slow follow-up.",
      features: [
        "Centralized lead pipeline",
        "Automated follow-ups",
        "Team-ready sales workflows",
      ],
    },
    {
      number: "03",
      title: "Property Developers",
      description:
        "Turn property website traffic into structured sales opportunities while giving your sales team better information about potential buyers.",
      features: [
        "Buyer requirement capture",
        "Property enquiry automation",
        "Sales performance insights",
      ],
    },
  ];

  return (
    <section className="section solutions" id="solutions">
      <div className="section-container">
        <div className="section-heading solutions-heading">
          <span className="eyebrow">SOLUTIONS</span>

          <h2>
            Built for modern
            <span> real estate teams.</span>
          </h2>

          <p>
            Whether you're an independent agent, growing agency, or property
            developer, PropertyPilot helps turn more enquiries into organized
            sales opportunities.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-top">
                <span className="solution-number">{solution.number}</span>

                <span className="solution-arrow">↗</span>
              </div>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <div className="solution-features">
                {solution.features.map((feature) => (
                  <div className="solution-feature" key={feature}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;