function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description:
        "PropertyPilot engages visitors the moment they show interest and captures their enquiry automatically.",
    },
    {
      number: "02",
      title: "Qualify",
      description:
        "The AI asks the right questions to understand the buyer's purpose, location, property type, budget, and timeline.",
    },
    {
      number: "03",
      title: "Match",
      description:
        "Leads are connected with relevant property opportunities based on the information they provide.",
    },
    {
      number: "04",
      title: "Convert",
      description:
        "Qualified opportunities are passed into the sales process so agents can focus on conversations that matter.",
    },
  ];

  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">HOW IT WORKS</span>

        <h1>
          From enquiry
          <span> to opportunity.</span>
        </h1>

        <p>
          PropertyPilot automates the journey between a property enquiry and
          your next sales conversation.
        </p>
      </section>

      <section className="steps-section">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>

            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default HowItWorks;