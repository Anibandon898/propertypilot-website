import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      const result = await response.json();

      console.log("PropertyPilot contact enquiry:", result);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <span className="page-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's build a better
            <span> property sales system.</span>
          </h1>

          <p>
            Tell us about your property business, your current sales process,
            and where you want automation to take you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span>01</span>

              <div>
                <small>EMAIL</small>
                <strong>hello@propertypilot.ai</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span>02</span>

              <div>
                <small>RESPONSE</small>
                <strong>Usually within 1 business day</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span>03</span>

              <div>
                <small>AVAILABILITY</small>
                <strong>Agents · Agencies · Developers</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header">
            <div className="contact-form-label">
              <span></span>
              PROPERTY PILOT
            </div>

            <h2>Start a conversation.</h2>

            <p>
              Complete the form and we'll get back to you about your
              automation needs.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                <span>Your name</span>

                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span>Business email</span>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              <span>Company</span>

              <input
                type="text"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>How can we help?</span>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="lead-capture">
                  AI Lead Capture
                </option>

                <option value="qualification">
                  Lead Qualification
                </option>

                <option value="automation">
                  Sales Automation
                </option>

                <option value="property-matching">
                  Property Matching
                </option>

                <option value="custom">
                  Custom Automation
                </option>
              </select>
            </label>

            <label>
              <span>Message</span>

              <textarea
                name="message"
                placeholder="Tell us a little about your business and what you'd like to automate..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Enquiry"}

              <span>↗</span>
            </button>

            {status === "success" && (
              <div className="contact-form-success">
                Your enquiry has been received successfully.
              </div>
            )}

            {status === "error" && (
              <div className="contact-form-error">
                Something went wrong. Please try again.
              </div>
            )}

            <small className="contact-form-note">
              No commitment. We'll simply learn about your business and
              explore where PropertyPilot can help.
            </small>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;