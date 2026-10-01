function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Real Estate Agents",
      description:
        "Capture and qualify property enquiries automatically so you can spend more time speaking with serious prospects.",
      features: [
        "24/7 AI enquiry handling",
        "Automatic lead qualification",
        "Instant lead information",
      ],
    },
    {
      number: "02",
      title: "Real Estate Agencies",
      description:
        "Give your sales team one intelligent system for managing enquiries, qualification, property matching, and follow-up.",
      features: [
        "Centralized lead pipeline",
        "Automated workflows",
        "Sales visibility",
      ],
    },
    {
      number: "03",
      title: "Property Developers",
      description:
        "Turn website traffic and campaign enquiries into structured opportunities your sales team can act on.",
      features: [
        "Campaign lead capture",
        "Buyer profiling",
        "Conversion intelligence",
      ],
    },
  ];

  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">SOLUTIONS</span>

        <h1>
          Built for the
          <span> modern property business.</span>
        </h1>

        <p>
          PropertyPilot adapts to the way real estate businesses generate,
          qualify, manage, and convert property enquiries.
        </p>
      </section>

      <section className="solutions-page-grid">
        {solutions.map((solution) => (
          <article className="solution-page-card" key={solution.number}>
            <div className="solution-card-top">
              <span>{solution.number}</span>
              <span>PROPERTY PILOT</span>
            </div>

            <h2>{solution.title}</h2>

            <p>{solution.description}</p>

            <div className="solution-feature-list">
              {solution.features.map((feature) => (
                <div key={feature}>
                  <span>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Solutions;