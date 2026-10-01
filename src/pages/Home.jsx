import { useEffect, useState } from "react";

function Home() {
  const [activeLead, setActiveLead] = useState(0);
  const [activeTab, setActiveTab] = useState("leads");

  const leads = [
    {
      name: "Sarah Williams",
      location: "Lekki, Lagos",
      type: "3 Bedroom Apartment",
      budget: "$185,000",
      status: "Qualified",
    },
    {
      name: "Michael Carter",
      location: "Victoria Island",
      type: "Luxury Apartment",
      budget: "$320,000",
      status: "High Intent",
    },
    {
      name: "David Okoro",
      location: "Abuja",
      type: "Family House",
      budget: "$240,000",
      status: "Matched",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLead((current) => (current + 1) % leads.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [leads.length]);

  return (
    <main className="propertypilot-home">
      <section className="home-hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="home-topline">
          <span className="topline-dot"></span>
          AI-POWERED REAL ESTATE AUTOMATION
          <span className="topline-line"></span>
        </div>

        <div className="propertypilot-wordmark">
          {"PROPERTY".split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              style={{ "--letter-index": index }}
            >
              {letter}
            </span>
          ))}

          <span className="wordmark-space"></span>

          {"PILOT".split("").map((letter, index) => (
            <span
              key={`${letter}-pilot-${index}`}
              style={{ "--letter-index": index + 8 }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="wordmark-sweep"></div>

        <div className="home-content">
          <div className="home-copy">
            <span className="home-eyebrow">
              THE PROPERTY SALES SYSTEM
            </span>

            <h1>
              Turn property enquiries
              <span> into opportunities.</span>
            </h1>

            <p>
              PropertyPilot uses AI and automation to capture, qualify, match,
              and move property enquiries into your sales pipeline.
            </p>

            <div className="home-actions">
              <a href="/demo" className="home-primary-button">
                Book a Demo
                <span>↗</span>
              </a>

              <a href="/how-it-works" className="home-secondary-button">
                Explore the System
                <span>→</span>
              </a>
            </div>

            <div className="home-trust">
              <div className="trust-avatars">
                <span>R</span>
                <span>A</span>
                <span>J</span>
              </div>

              <div>
                <strong>Built for modern property teams</strong>
                <small>
                  AI + Automation + Sales Intelligence
                </small>
              </div>
            </div>
          </div>

          <div className="propertypilot-screen">
            <div className="screen-topbar">
              <div className="screen-brand">
                <span className="screen-brand-mark">P</span>
                <span>PROPERTY PILOT</span>
              </div>

              <div className="screen-status">
                <span></span>
                SYSTEM ONLINE
              </div>
            </div>

            <div className="screen-body">
              <div className="screen-heading">
                <div>
                  <span>LIVE INTELLIGENCE</span>
                  <h2>Property opportunities</h2>
                </div>

                <div className="screen-date">
                  TODAY / 09:42
                </div>
              </div>

              {/* DASHBOARD TABS */}

              <div className="screen-tabs">
                <button
                  className={
                    activeTab === "leads"
                      ? "screen-tab active"
                      : "screen-tab"
                  }
                  onClick={() => setActiveTab("leads")}
                >
                  Leads
                </button>

                <button
                  className={
                    activeTab === "matches"
                      ? "screen-tab active"
                      : "screen-tab"
                  }
                  onClick={() => setActiveTab("matches")}
                >
                  Matches
                </button>

                <button
                  className={
                    activeTab === "automation"
                      ? "screen-tab active"
                      : "screen-tab"
                  }
                  onClick={() => setActiveTab("automation")}
                >
                  Automation
                </button>
              </div>

              {/* LEADS TAB */}

              {activeTab === "leads" && (
                <div className="tab-content">
                  <div className="screen-main-grid">
                    <div className="lead-panel">
                      <div className="panel-label">
                        <span>AI LEAD ACTIVITY</span>
                        <i></i>
                      </div>

                      <div className="lead-profile">
                        <div className="lead-avatar">
                          {leads[activeLead].name.charAt(0)}
                        </div>

                        <div>
                          <h3>{leads[activeLead].name}</h3>
                          <p>{leads[activeLead].location}</p>
                        </div>

                        <div className="lead-status">
                          {leads[activeLead].status}
                        </div>
                      </div>

                      <div className="lead-details">
                        <div>
                          <span>PROPERTY</span>
                          <strong>
                            {leads[activeLead].type}
                          </strong>
                        </div>

                        <div>
                          <span>BUDGET</span>
                          <strong>
                            {leads[activeLead].budget}
                          </strong>
                        </div>
                      </div>

                      <div className="qualification-bar">
                        <div className="qualification-heading">
                          <span>AI QUALIFICATION</span>
                          <strong>94%</strong>
                        </div>

                        <div className="qualification-track">
                          <div></div>
                        </div>
                      </div>
                    </div>

                    <div className="automation-panel">
                      <div className="panel-label">
                        <span>LIVE ACTIVITY</span>
                        <i></i>
                      </div>

                      <div className="activity-list">
                        <div className="activity-item">
                          <span className="activity-dot"></span>

                          <div>
                            <strong>New enquiry received</strong>
                            <small>Just now</small>
                          </div>
                        </div>

                        <div className="activity-item">
                          <span className="activity-dot"></span>

                          <div>
                            <strong>AI qualification completed</strong>
                            <small>18 seconds ago</small>
                          </div>
                        </div>

                        <div className="activity-item">
                          <span className="activity-dot"></span>

                          <div>
                            <strong>Property match generated</strong>
                            <small>42 seconds ago</small>
                          </div>
                        </div>

                        <div className="activity-item">
                          <span className="activity-dot"></span>

                          <div>
                            <strong>Lead added to pipeline</strong>
                            <small>1 minute ago</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MATCHES TAB */}

              {activeTab === "matches" && (
                <div className="tab-content">
                  <div className="matches-grid">
                    <div className="match-card">
                      <div className="match-image match-image-one">
                        <span>98% MATCH</span>
                      </div>

                      <div className="match-info">
                        <span>LEKKI / LAGOS</span>
                        <h3>Modern 3 Bedroom Residence</h3>
                        <p>$185,000 · 3 Beds · 2 Baths</p>
                      </div>
                    </div>

                    <div className="match-card">
                      <div className="match-image match-image-two">
                        <span>94% MATCH</span>
                      </div>

                      <div className="match-info">
                        <span>VICTORIA ISLAND</span>
                        <h3>Luxury Waterfront Apartment</h3>
                        <p>$320,000 · 3 Beds · 3 Baths</p>
                      </div>
                    </div>

                    <div className="match-card">
                      <div className="match-image match-image-three">
                        <span>91% MATCH</span>
                      </div>

                      <div className="match-info">
                        <span>ABUJA</span>
                        <h3>Contemporary Family Home</h3>
                        <p>$240,000 · 4 Beds · 3 Baths</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AUTOMATION TAB */}

              {activeTab === "automation" && (
                <div className="tab-content">
                  <div className="automation-overview">
                    <div className="automation-status-large">
                      <span className="automation-live-dot"></span>

                      <div>
                        <small>AUTOMATION ENGINE</small>
                        <strong>Running</strong>
                      </div>
                    </div>

                    <div className="automation-stat">
                      <span>WORKFLOWS</span>
                      <strong>24</strong>
                    </div>

                    <div className="automation-stat">
                      <span>ACTIONS TODAY</span>
                      <strong>1,842</strong>
                    </div>
                  </div>

                  <div className="automation-timeline">
                    <div className="timeline-line"></div>

                    <div className="timeline-item">
                      <span>01</span>
                      <div>
                        <strong>Capture enquiry</strong>
                        <small>Website conversation detected</small>
                      </div>
                      <b>DONE</b>
                    </div>

                    <div className="timeline-item">
                      <span>02</span>
                      <div>
                        <strong>Qualify prospect</strong>
                        <small>Budget and requirements analysed</small>
                      </div>
                      <b>DONE</b>
                    </div>

                    <div className="timeline-item">
                      <span>03</span>
                      <div>
                        <strong>Match property</strong>
                        <small>Relevant inventory identified</small>
                      </div>
                      <b className="timeline-active">RUNNING</b>
                    </div>

                    <div className="timeline-item">
                      <span>04</span>
                      <div>
                        <strong>Notify sales team</strong>
                        <small>Qualified opportunity prepared</small>
                      </div>
                      <b>QUEUED</b>
                    </div>
                  </div>
                </div>
              )}

              <div className="screen-metrics">
                <div>
                  <span>NEW ENQUIRIES</span>
                  <strong>128</strong>
                  <small>+18.4%</small>
                </div>

                <div>
                  <span>QUALIFIED</span>
                  <strong>94</strong>
                  <small>+24.7%</small>
                </div>

                <div>
                  <span>MATCHED</span>
                  <strong>67</strong>
                  <small>+31.2%</small>
                </div>

                <div>
                  <span>CONVERSION</span>
                  <strong>18.6%</strong>
                  <small>+6.8%</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-card floating-card-left">
          <span className="floating-icon">✦</span>

          <div>
            <strong>AI MATCH FOUND</strong>
            <small>3 suitable properties</small>
          </div>
        </div>

        <div className="floating-card floating-card-right">
          <span className="floating-number">+42%</span>

          <div>
            <strong>LEAD RESPONSE</strong>
            <small>Faster with automation</small>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <span>ONE SYSTEM. EVERY ENQUIRY.</span>

        <h2>
          Your property business deserves
          <em> more than a contact form.</em>
        </h2>

        <p>
          PropertyPilot transforms the first interaction with a prospect into
          structured sales intelligence your team can act on.
        </p>
      </section>
    </main>
  );
}

export default Home;