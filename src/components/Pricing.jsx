const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "For independent agents starting with AI-powered lead capture.",
      features: [
        "AI website assistant",
        "Lead capture",
        "Lead qualification",
        "Lead notifications",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For growing teams that want to automate more of their sales process.",
      features: [
        "Everything in Starter",
        "Automated follow-ups",
        "Property matching",
        "Sales workflow automation",
      ],
      highlighted: true,
    },
    {
      name: "Professional",
      description: "For established real estate businesses building a connected sales system.",
      features: [
        "Everything in Growth",
        "CRM integrations",
        "Viewing automation",
        "Sales dashboards",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="section pricing" id="pricing">
      <div className="section-container">
        <div className="section-heading pricing-heading">
          <span className="eyebrow">PRICING</span>

          <h2>
            Choose the system
            <span> your business needs.</span>
          </h2>

          <p>
            Start with the capabilities you need today and expand your
            automation as your real estate business grows.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.highlighted ? "pricing-card-featured" : ""
              }`}
              key={plan.name}
            >
              {plan.highlighted && (
                <div className="popular-label">MOST POPULAR</div>
              )}

              <div className="pricing-card-top">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              <div className="pricing-action">
                <a href="#contact" className="pricing-button">
                  Talk to us
                  <span>→</span>
                </a>
              </div>

              <div className="pricing-divider"></div>

              <div className="pricing-features">
                <span className="included-label">INCLUDES</span>

                {plan.features.map((feature) => (
                  <div className="pricing-feature" key={feature}>
                    <span className="pricing-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <span>✦</span>
          <p>
            Need a custom setup? PropertyPilot can be configured around your
            existing sales process and business tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;