const Features = () => {
  const features = [
    {
      number: "01",
      title: "AI Lead Capture",
      description:
        "Engage property visitors instantly and collect structured information through natural AI conversations.",
      tag: "CAPTURE",
    },
    {
      number: "02",
      title: "Automated Follow-Ups",
      description:
        "Keep prospects engaged with automated workflows that help reduce missed opportunities and delayed responses.",
      tag: "NURTURE",
    },
    {
      number: "03",
      title: "Property Matching",
      description:
        "Connect buyer requirements with suitable properties so your sales team can respond with relevant options.",
      tag: "MATCH",
    },
    {
      number: "04",
      title: "Viewing Appointments",
      description:
        "Move qualified prospects toward property viewings and create a smoother path from enquiry to appointment.",
      tag: "CONVERT",
    },
    {
      number: "05",
      title: "CRM Integrations",
      description:
        "Connect your lead workflows with the tools your business already uses to keep customer information organized.",
      tag: "CONNECT",
    },
    {
      number: "06",
      title: "Sales Dashboards",
      description:
        "Understand your lead activity, follow-ups, opportunities, and sales pipeline from a centralized view.",
      tag: "INSIGHT",
    },
  ];

  return (
    <section className="section features" id="features">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">PLATFORM</span>

          <h2>
            One system for
            <span> your sales journey.</span>
          </h2>

          <p>
            PropertyPilot brings lead capture, qualification, automation,
            follow-up, and sales intelligence into one connected workflow.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-header">
                <span className="feature-number">{feature.number}</span>

                <span className="feature-tag">{feature.tag}</span>
              </div>

              <div className="feature-icon">
                <span>✦</span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="feature-link">
                Explore capability
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;