const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description:
        "Engage website visitors instantly and capture their property requirements through an intelligent AI conversation.",
    },
    {
      number: "02",
      title: "Qualify",
      description:
        "PropertyPilot identifies the prospect's needs, budget, location, property type, and buying timeline.",
    },
    {
      number: "03",
      title: "Automate",
      description:
        "Qualified leads are organized and connected to automated workflows for follow-up and sales operations.",
    },
    {
      number: "04",
      title: "Convert",
      description:
        "Give your team actionable leads so they can focus on conversations, property viewings, and closing deals.",
    },
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">HOW IT WORKS</span>

          <h2>
            From first enquiry
            <span> to sales opportunity.</span>
          </h2>

          <p>
            PropertyPilot connects the critical steps between a property
            enquiry and your sales team.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <span className="step-arrow">↗</span>
            </div>
          ))}
        </div>

        <div className="process-bar">
          <div className="process-line"></div>

          <div className="process-label">
            <span>PROPERTY ENQUIRY</span>
            <strong>→</strong>
            <span>QUALIFIED LEAD</span>
            <strong>→</strong>
            <span>SALES OPPORTUNITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;