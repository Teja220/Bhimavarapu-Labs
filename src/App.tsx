import React, { useEffect, useState } from 'react';
import logo from '../logo.png';

const NAV_HEIGHT = 72;

const sections = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'track-record', label: 'Track record' },
  { id: 'people', label: 'People' },
  { id: 'engagements', label: 'Engagements' },
];

const App: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsMobileNavOpen(false);
  };

  const whatsappNumber = '8885635000';
  const linkedinUrl = 'https://www.linkedin.com/in/kotireddy-bhimavarapu-193a4014/';

  const engagements = [
    {
      client: 'Famycare / Jai Pharma / Mylan',
      period: '2014–2018',
      services: 'cGMP audits, QMS review, FDA 483 response review',
    },
    {
      client: 'Srikrishna Pharma',
      period: '2017–2020',
      services: 'cGMP trainings, Lab Systems GAP audit',
    },
    {
      client: 'Unimark Remedies',
      period: '2017–2019',
      services: 'FDA Warning Letter remediation',
    },
    {
      client: 'Sidmark (Dehradun)',
      period: '2017',
      services: 'cGMP trainings, Lab Systems GAP audit',
    },
    {
      client: 'Salicylates and Chemicals (Hyderabad)',
      period: '2017',
      services:
        'cGMP trainings, third-party audits for USFDA readiness, support for FDA 483 responses',
    },
    {
      client: 'IPCA (Indore)',
      period: '2018',
      services: 'USFDA Warning Letter remediation',
    },
    {
      client: 'Jubilant (Mysore & Roorkee)',
      period: '2018–2023',
      services: 'USFDA Warning Letter remediation',
    },
    {
      client: 'Wockhardt (Aurangabad)',
      period: '2019',
      services: 'Third-party audit for USFDA commitments',
    },
    {
      client: 'Sun Pharma (Mohali / Chandigarh)',
      period: '2019–2023',
      services:
        'Third-party audit for USFDA commitments, support for FDA 483 responses',
    },
    {
      client: 'Lupin (Tarapur & Mandideep)',
      period: '2020 & 2023',
      services: 'USFDA Warning Letter remediation',
    },
    {
      client: 'Aarti Drugs (Boisar, Mumbai)',
      period: '2019–2024',
      services: 'USFDA Warning Letter remediation',
    },
    {
      client: 'Mac-Chem India (Mumbai)',
      period: '2018–Ongoing',
      services: 'Third-party audits for USFDA, support for FDA 483 responses',
    },
    {
      client: 'Calyx Chemical & Pharma (Mumbai)',
      period: '2018',
      services: 'FDA Warning Letter remediation',
    },
    {
      client: 'Encube Ethicals (Goa)',
      period: '2020, 2024, 2025',
      services: 'cGMP trainings, Lab Systems GAP audit',
    },
    {
      client: 'Intas (Ahmedabad)',
      period: '2023–Ongoing',
      services: 'Batch certification, FDA Warning Letter remediation',
    },
    {
      client: 'AET Labs (Hyderabad)',
      period: '2018–2022',
      services:
        'Third-party audits for USFDA readiness, support for FDA 483 responses',
    },
    {
      client: 'Pinnacle Life Sciences (Baddi)',
      period: '2019–Ongoing',
      services: 'cGMP audits, QMS review, FDA 483 response review',
    },
    {
      client: 'Graviti Pharma (Hyderabad)',
      period: '2022–Ongoing',
      services: 'cGMP audits, QMS review, audits for USFDA readiness',
    },
    {
      client: 'Hetero (Unit-9, Nakkapally)',
      period: '2025–Ongoing',
      services: 'USFDA 483 response support, cGMP assessments',
    },
    {
      client: 'Unexo Life (Delhi)',
      period: '2024–Ongoing',
      services: 'USFDA Warning Letter remediation',
    },
    {
      client: 'Granules India (Hyderabad)',
      period: '2026',
      services: 'USFDA Warning Letter remediation',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileNavOpen]);

  return (
    <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <img src={logo} alt="Kotis Consultancy Services logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-title">Kotis Consultancy Services</span>
            </div>
          </div>
          <nav className="nav-main">
            <div className="nav-links nav-links-desktop">
              {sections.map((item) => (
                <button
                  key={item.id}
                  className="nav-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="nav-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((open) => !open)}
            >
              <span className="nav-toggle-label">Menu</span>
              <span
                className={`nav-toggle-chevron ${
                  isMobileNavOpen ? 'nav-toggle-chevron-open' : ''
                }`}
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
        <div
          className={`nav-links-mobile ${
            isMobileNavOpen ? 'nav-links-mobile-open' : 'nav-links-mobile-closed'
          }`}
        >
          <div className="container nav-links-mobile-inner">
            {sections.map((item) => (
              <button
                key={item.id}
                className="nav-link nav-link-mobile"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>
                Trusted Partner for USFDA Compliance
                <span className="accent">&amp; cGMP Excellence</span>
              </h1>
              <p className="hero-subtitle">
                Kotis Consultancy Services (KCS) is a specialist USFDA and global cGMP compliance
                consulting firm, established in 2012 and trusted by pharmaceutical companies in
                India and globally. We help organizations close compliance gaps, prepare for
                inspections, and execute practical remediation that sustains a state of control.
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
                  onClick={() => handleNavClick('expertise')}
                >
                  Explore expertise
                </button>
              </div>
              <div className="hero-meta">
                <div>
                  <span className="meta-label">Established</span>
                  <span className="meta-value">2012 · Hyderabad, India</span>
                </div>
                <div>
                  <span className="meta-label">Track record</span>
                  <span className="meta-value">65+ pharma clients · 45+ USFDA audits</span>
                </div>
                <div>
                  <span className="meta-label">Training</span>
                  <span className="meta-value">9,000+ professionals trained</span>
                </div>
              </div>
            </div>
            <div className="hero-panel">
              <div className="stat-card">
                <h2>Practical, risk‑based USFDA remediation.</h2>
                <p>
                  KCS combines deep cGMP knowledge with hands-on execution to strengthen systems,
                  resolve FDA observations, and build inspection-ready operations—without slowing
                  your business.
                </p>
                <ul className="stat-list">
                  <li>
                    <span className="stat-number">65+</span>
                    <span className="stat-label">USFDA‑approved pharma sites served</span>
                  </li>
                  <li>
                    <span className="stat-number">45+</span>
                    <span className="stat-label">USFDA cGMP audits supported</span>
                  </li>
                  <li>
                    <span className="stat-number">9,000+</span>
                    <span className="stat-label">cGMP professionals trained</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container two-column">
            <div>
              <h2>About Kotis Consultancy Services</h2>
              <p>
                Kotis Consultancy Services (KCS) was established in 2012 to support pharmaceutical
                companies in meeting USFDA and global cGMP expectations through practical,
                risk-based, and consistent compliance solutions. We specialize in compliance
                remediation, inspection readiness, and strengthening Quality Management Systems
                (QMS).
              </p>
              <p>
                Our Subject Matter Experts (SMEs) span Quality Assurance, Regulatory Affairs,
                Manufacturing, Validation, Analytical R&amp;D, and Quality Control. We also
                collaborate with leading USA GMP consultancy firms to address cGMP concerns,
                failure investigations, ANDA reviews, FDA Six Systems gap assessments, batch
                certification, and FDA 483/Warning Letter responses and remediation.
              </p>
            </div>
            <div className="about-highlights">
              <div className="card">
                <h3>Core strengths</h3>
                <ul>
                  <li>USFDA &amp; global cGMP compliance audits and remediation</li>
                  <li>Inspection readiness programs and mock USFDA audits</li>
                  <li>QMS design/review/remediation aligned to FDA expectations</li>
                  <li>Data integrity and GxP compliance audits</li>
                </ul>
              </div>
              <div className="card">
                <h3>How we work</h3>
                <ul>
                  <li>Practical, risk-based approach grounded in cGMP realities</li>
                  <li>Strong documentation, traceability, and data-integrity focus</li>
                  <li>Close collaboration with QA, QC, manufacturing, and regulatory teams</li>
                  <li>Execution‑oriented support to close gaps and sustain compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="container">
            <h2 className="section-title">Expertise &amp; Capabilities</h2>
            <p className="section-intro">
              End-to-end USFDA and cGMP consulting—built for real execution, rapid remediation,
              and sustainable compliance.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.15rem' }}>
              <span className="badge-subtle">
                <span className="badge-dot" aria-hidden="true" />
                Practical • Risk-Based • Consistent Compliance
              </span>
            </div>
            <div className="services-grid">
              <div className="card service-card">
                <h3>Quality Systems (QMS) &amp; FDA Six Systems</h3>
                <p>
                  Design, develop, review, and remediate robust QMS aligned with USFDA
                  expectations—supported by detailed FDA Six Systems assessments.
                </p>
                <ul>
                  <li>FDA Six Systems compliance gap assessments and remediation plans</li>
                  <li>QMS design, SOP review, documentation, and governance upgrades</li>
                  <li>Investigation/CAPA, deviation, change control, and lifecycle improvements</li>
                  <li>Hands-on execution support to maintain a state of control</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>Audits, Training &amp; Inspection Readiness</h3>
                <p>
                  Thorough audits to identify gaps and deliver actionable CAPA plans—plus mock
                  inspections to build confidence and readiness.
                </p>
                <ul>
                  <li>Mock USFDA cGMP audits and third-party GxP audits</li>
                  <li>cGMP, data integrity, and FDA Six Systems trainings/workshops</li>
                  <li>Assist during regulatory audits (on-site or remote)</li>
                  <li>21 CFR Part 11 and CSV compliance support</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>FDA 483 &amp; Warning Letter Responses</h3>
                <p>
                  Credible, inspection-ready response packages and remediation programs that
                  stand up to regulator scrutiny.
                </p>
                <ul>
                  <li>Drafting/reviewing FDA 483 and Warning Letter responses</li>
                  <li>Remediation planning and execution support</li>
                  <li>Data integrity and GxP compliance audits</li>
                  <li>Regulatory affairs support and USFDA meeting preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="track-record" className="section section-alt">
          <div className="container two-column">
            <div>
              <h2>Proven USFDA Track Record</h2>
              <p>
                KCS has supported remediation, inspection readiness, and compliance execution
                across a wide range of pharmaceutical operations.
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--color-text-muted)' }}>
                <li>Serving 65+ pharmaceutical companies with quality and expertise</li>
                <li>45+ USFDA site audits completed</li>
                <li>9,000+ professionals trained on cGMP topics</li>
                <li>Warning Letter remediation, FDA 483 responses, GxP audits, and SME deployment</li>
              </ul>
            </div>
            <div className="about-highlights">
              <div className="card">
                <h3>What clients value</h3>
                <ul>
                  <li>Clear gap-to-action plans, aligned to USFDA expectations</li>
                  <li>Hands-on support to implement corrective and preventive actions</li>
                  <li>Inspection readiness that strengthens people, process, and proof</li>
                  <li>Execution excellence with risk-based prioritization</li>
                </ul>
              </div>
              <div className="card">
                <h3>Why clients choose KCS</h3>
                <ul>
                  <li>Experience</li>
                  <li>Credibility</li>
                  <li>Execution excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="people" className="section">
          <div className="container">
            <h2 className="section-title">Our People Make the Difference</h2>
            <p className="section-intro">Senior SMEs with deep USFDA inspection experience.</p>
            <div className="services-grid" style={{ marginTop: '2.25rem' }}>
              <div className="card service-card">
                <h3>Leadership &amp; SMEs</h3>
                <ul>
                  <li>Mr. B.H. Koti Reddy — 25 Years</li>
                  <li>Dr. JP Narayan — 27 Years</li>
                  <li>Mr. Rajesh Varma — 21 Years</li>
                  <li>Mr. Sanjeev Mahajan — 32 Years</li>
                  <li>Dr. J.P. Srinivasa Reddy — 32 Years</li>
                  <li>Mr. L. Srikanth Reddy — 25 Years</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>How we support your teams</h3>
                <ul>
                  <li>Dedicated consultants deployed just-in-time for commitments</li>
                  <li>On-site and remote execution to close inspectional observations</li>
                  <li>Workshops and role-based trainings across FDA Six Systems</li>
                  <li>Coaching for investigation, CAPA, and data integrity excellence</li>
                </ul>
              </div>
              <div className="card service-card">
                <h3>Typical outcomes</h3>
                <ul>
                  <li>Stronger QMS governance and decision-making</li>
                  <li>Improved investigation quality and CAPA effectiveness</li>
                  <li>Audit-ready documentation and traceability</li>
                  <li>Reduced repeat observations through sustainable controls</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="engagements" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Key Client Engagements</h2>
            <p className="section-intro">
              Selected engagements supporting USFDA-approved sites (cGMP audits, remediation,
              trainings, and inspection readiness).
            </p>
            <div className="table-wrap" style={{ marginTop: '2rem' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '70px' }}>S.No</th>
                    <th>Company / Site</th>
                    <th style={{ width: '160px' }}>Time period</th>
                    <th>Regulatory services</th>
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((row, idx) => (
                    <tr key={`${row.client}-${idx}`}>
                      <td>{idx + 1}</td>
                      <td>{row.client}</td>
                      <td>{row.period}</td>
                      <td>{row.services}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="small">
              Performed 65+ USFDA site third-party cGMP customer audits and trained 9,000+ cGMP
              professionals on FDA Six Systems across 45+ companies.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div>
              <h2>Contact</h2>
              <p>
                Share a brief overview of your site, inspection history, and key challenges. We
                will respond with a clear approach for compliance, remediation, and inspection
                readiness support.
              </p>
              <div className="contact-card">
                <h3>Reach us</h3>
                <ul className="contact-list">
                  <li>
                    <span className="label">Consultant</span>
                    <span>BH. Koti Reddy</span>
                  </li>
                  <li>
                    <span className="label">Mobile</span>
                    <a href="tel:+918885635000">+91 88856 35000</a>
                  </li>
                  <li>
                    <span className="label">Email</span>
                    <a href="mailto:bhkoti@gmail.com">bhkoti@gmail.com</a>
                  </li>
                  <li>
                    <span className="label">Address</span>
                    <span>
                      # A4, Second floor, Commercial Complex, Aliens Elite Apts, Miyapur,
                      Hyderabad-500049, Telangana, India.
                    </span>
                  </li>
                  <li>
                    <span className="label">LinkedIn</span>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">
                      LinkedIn profile
                    </a>
                  </li>
                  <li>
                    <span className="label">WhatsApp</span>
                    <a href={`https://wa.me/${8885635000}`} target="_blank" rel="noreferrer">
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
        href={`https://wa.me/${whatsappNumber}`}
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
            © {new Date().getFullYear()} Kotis Consultancy Services (KCS). All rights reserved.
          </span>
          <span>Experience • Credibility • Execution Excellence.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

