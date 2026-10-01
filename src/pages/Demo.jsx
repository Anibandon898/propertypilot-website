function Demo() {
  return (
    <main className="demo-page">
      <section className="demo-hero">
        <div className="demo-content">
          <span className="page-eyebrow">BOOK A DEMO</span>

          <h1>
            See what
            <span> PropertyPilot can do.</span>
          </h1>

          <p>
            Tell us a little about your real estate business and we'll show
            you how PropertyPilot can automate your property enquiry journey.
          </p>

          <div className="demo-points">
            <div>
              <span>01</span>
              <strong>Understand your workflow</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Identify automation opportunities</strong>
            </div>

            <div>
              <span>03</span>
              <strong>See the PropertyPilot system</strong>
            </div>
          </div>
        </div>

        <div className="demo-form-card">
          <div className="demo-form-header">
            <span>PROPERTY PILOT</span>
            <h2>Request a demo</h2>
            <p>We'll get back to you to arrange a walkthrough.</p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you. Your demo request has been received.");
            }}
          >
            <label>
              Your name
              <input type="text" placeholder="Enter your name" required />
            </label>

            <label>
              Business email
              <input
                type="email"
                placeholder="you@company.com"
                required
              />
            </label>

            <label>
              Company
              <input
                type="text"
                placeholder="Your company name"
                required
              />
            </label>

            <label>
              Business type
              <select defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="agent">Real Estate Agent</option>
                <option value="agency">Real Estate Agency</option>
                <option value="developer">Property Developer</option>
                <option value="other">Other</option>
              </select>
            </label>

            <button type="submit">
              Request Demo
              <span>↗</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Demo;