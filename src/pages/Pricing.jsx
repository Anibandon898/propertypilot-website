function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For independent agents beginning with AI automation.",
      price: "$49",
      period: "/month",
      features: [
        "AI lead capture",
        "Lead qualification",
        "Basic automation",
        "Lead dashboard",
      ],
    },
    {
      name: "Growth",
      description: "For growing agencies handling a larger volume of enquiries.",
      price: "$149",
      period: "/month",
      featured: true,
      features: [
        "Everything in Starter",
        "Advanced qualification",
        "Property matching",
        "Automated follow-up",
        "Sales intelligence",
      ],
    },
    {
      name: "Scale",
      description: "For property businesses that need a custom automation system.",
      price: "Custom",
      period: "",
      features: [
        "Everything in Growth",
        "Custom workflows",
        "Advanced integrations",
        "Dedicated automation",
        "Priority support",
      ],
    },
  ];

  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">PRICING</span>

        <h1>
          Automation that
          <span> scales with you.</span>
        </h1>

        <p>
          Start with the essentials and expand your PropertyPilot system as
          your property business grows.
        </p>
      </section>

      <section className="pricing-page-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-page-card ${
              plan.featured ? "pricing-page-card-featured" : ""
            }`}
            key={plan.name}
          >
            {plan.featured && (
              <div className="pricing-popular">MOST POPULAR</div>
            )}

            <span className="pricing-plan-name">{plan.name}</span>

            <h2>{plan.price}</h2>

            {plan.period && <span className="pricing-period">{plan.period}</span>}

            <p>{plan.description}</p>

            <div className="pricing-divider"></div>

            <div className="pricing-features">
              {plan.features.map((feature) => (
                <div key={feature}>
                  <span>✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <a href="/contact" className="pricing-button">
              Get Started
              <span>↗</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Pricing;