import React from 'react';
import logo from '../logo.png';

const NAV_HEIGHT = 72;

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const App: React.FC = () => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const whatsappNumber = '1234567890'; // Replace with real number, digits only

  return (
    <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <img src={logo} alt="Company logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-title">Bhimavarapu Consulting</span>
            </div>
          </div>
          <nav className="nav-links">
            {sections.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>
                Quality & Compliance Expertise for
                <span className="accent"> Pharmaceutical Manufacturing</span>
              </h1>
              <p className="hero-subtitle">
                A dedicated pharmaceutical quality professional with over 17 years of
                cross‑functional experience in Quality Control, Quality Assurance, cGMP/cGLP
                management, analytical method validation, stability studies, and regulatory
                compliance across APIs and generic finished formulations.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavClick('contact')}
                >
                  Schedule a consultation
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => handleNavClick('services')}
                >
                  Explore services
                </button>
              </div>
              <div className="hero-meta">
                <div>
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">QC, QA, cGMP, cGLP</span>
                </div>
                <div>
                  <span className="meta-label">Scope</span>
                  <span className="meta-value">API and finished formulations</span>
                </div>
                <div>
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">Generics and regulated markets</span>
                </div>
              </div>
            </div>
            <div className="hero-panel">
              <div className="stat-card">
                <h2>17+ years of pharma quality leadership.</h2>
                <p>
                  Experience spanning laboratory, manufacturing, and QA systems to build robust
                  quality frameworks, data integrity practices, and audit‑ready documentation in
                  alignment with global expectations.
                </p>
                <ul className="stat-list">
                  <li>
                    <span className="stat-number">17+</span>
                    <span className="stat-label">years in QC and QA</span>
                  </li>
                  <li>
                    <span className="stat-number">Multi‑site</span>
                    <span className="stat-label">API and formulation facilities</span>
                  </li>
                  <li>
                    <span className="stat-number">End‑to‑end</span>
                    <span className="stat-label">from development to commercial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container two-column">
            <div>
              <h2>About Bhimavarapu Consulting</h2>
              <p>
                Bhimavarapu Consulting is built on more than 17 years of hands‑on experience in
                pharmaceutical Quality Control and Quality Assurance, covering both API and finished
                dosage (generic) manufacturing environments.
              </p>
              <p>
                The practice brings together deep understanding of cGMP and cGLP requirements,
                analytical method validation, stability programs, and documentation standards to
                help organizations strengthen their quality systems and maintain a continuous state
                of regulatory compliance.
              </p>
            </div>
            <div className="about-highlights">
              <div className="card">
                <h3>Core strengths</h3>
                <ul>
                  <li>End‑to‑end QC and QA oversight for APIs and finished products</li>
                  <li>Practical implementation of cGMP and cGLP systems</li>
                  <li>Analytical method validation, verification, and transfer</li>
                  <li>Design and evaluation of stability studies and trends</li>
                </ul>
              </div>
              <div className="card">
                <h3>How we work</h3>
                <ul>
                  <li>Hands‑on, detail‑oriented approach rooted in shop‑floor realities</li>
                  <li>Clear documentation, traceability, and data‑integrity focus</li>
                  <li>Collaborative engagement with QC, QA, production, and regulatory teams</li>
                  <li>Solutions aligned with both day‑to‑day operations and audit expectations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <p className="section-intro">
              Support focused on strengthening pharmaceutical quality systems, ensuring
              cGMP/cGLP compliance, and de‑risking inspections for API and generic finished
              product facilities.
            </p>
            <div className="services-grid">
              <div className="card service-card">
                <h3>Quality Systems & cGMP Compliance</h3>
                <p>
                  Design, review, and optimize quality systems to meet current cGMP expectations and
                  support a state of control across the product lifecycle.
                </p>
                <ul>
                  <li>QC/QA process mapping, SOP review, and documentation upgrades</li>
                  <li>Investigation, CAPA, deviation, and change‑control strengthening</li>
                  <li>Data‑integrity checks and practical remediation actions</li>
                  <li>Readiness for regulatory, customer, and internal audits</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>Analytical Method & Stability Support</h3>
                <p>
                  Ensure analytical methods and stability programs are scientifically sound,
                  validated, and aligned with regulatory expectations.
                </p>
                <ul>
                  <li>Analytical method validation, verification, and transfer support</li>
                  <li>Stability study design, protocol review, and data trending</li>
                  <li>Specification setting and justification for APIs and finished products</li>
                  <li>Analytical documentation and reports to support submissions</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>Regulatory & Inspection Readiness</h3>
                <p>
                  Prepare teams, documentation, and facilities for inspections and ongoing
                  regulatory interactions.
                </p>
                <ul>
                  <li>Gap assessments against cGMP/cGLP and data‑integrity guidelines</li>
                  <li>Mock audits, interview preparation, and response coaching</li>
                  <li>Action plans to address observations and strengthen systems</li>
                  <li>Support across API and finished product manufacturing sites</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-grid">
            <div>
              <h2>Contact</h2>
              <p>
                Share a brief overview of your asset, program stage, and key
                questions. We will respond within one business day with next
                steps.
              </p>
              <div className="contact-card">
                <h3>Reach us</h3>
                <ul className="contact-list">
                  <li>
                    <span className="label">Email</span>
                    <a href="mailto:your.email@example.com">bhkoti@gmail.com</a>
                  </li>
                  <li>
                    <span className="label">Location</span>
                    <span>M24,Medical Device park,
                      ORR.Exit NO:4 TSIIC,
                      IDA,Sultanpur-Bollaram,
                      Patancheru,
                      Hyderabad, Telangana 502319</span>
                  </li>
                  <li>
                    <span className="label">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/kotireddy-bhimavarapu-193a4014/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn profile
                    </a>
                  </li>
                  <li>
                    <span className="label">WhatsApp</span>
                    <a
                      href={`https://wa.me/${8885635000}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click to chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${8885635000}`}
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">W</span>
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Bhimavarapu Consulting. All rights reserved.
          </span>
          <span>Strategic partner for your next milestone.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

