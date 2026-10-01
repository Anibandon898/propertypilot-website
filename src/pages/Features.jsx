function Features() {
  const features = [
    {
      number: "01",
      title: "AI Lead Capture",
      description:
        "Capture property enquiries from your website and turn conversations into structured lead information.",
    },
    {
      number: "02",
      title: "Smart Qualification",
      description:
        "Automatically identify buyer requirements such as purpose, location, property type, budget, and timeline.",
    },
    {
      number: "03",
      title: "Property Matching",
      description:
        "Connect qualified prospects with suitable property opportunities based on their requirements.",
    },
    {
      number: "04",
      title: "Automated Follow-Up",
      description:
        "Keep prospects moving through the sales journey with automated actions and timely follow-up.",
    },
    {
      number: "05",
      title: "Lead Intelligence",
      description:
        "Give your team structured information about every enquiry before the sales conversation begins.",
    },
    {
      number: "06",
      title: "Workflow Automation",
      description:
        "Connect lead capture, qualification, property data, notifications, and sales actions into one workflow.",
    },
  ];

  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">PLATFORM FEATURES</span>

        <h1>
          Intelligence behind
          <span> every enquiry.</span>
        </h1>

        <p>
          PropertyPilot combines AI conversations, lead intelligence, and
          automation into one system designed for real estate sales teams.
        </p>
      </section>

      <section className="features-page-grid">
        {features.map((feature) => (
          <article className="feature-page-card" key={feature.number}>
            <div className="feature-number">{feature.number}</div>

            <div className="feature-icon">✦</div>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>

            <span className="feature-arrow">↗</span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Features;