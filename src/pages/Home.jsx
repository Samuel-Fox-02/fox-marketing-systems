import { Link } from 'react-router-dom'
import { EmailIcon, SmsIcon, LightningIcon } from '../components/Icons'

const Home = () => {
  return (
    <main>
      {/* Hero – split layout with image */}
      <section className="hero hero-split">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Real Estate Email &amp; SMS</p>
            <h1>
              Grow&nbsp;faster.
              <br />
              Close&nbsp;more.
            </h1>
            <p className="subhead">
              Helping real‑estate agents close more — with email and SMS that
              start conversations, not blasts.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn">
                Get Started
              </Link>
              <Link to="/contact" className="text-link">
                Or book a call
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop"
              alt="Luxury real estate"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Trust Strip – brand statement */}
      <div className="trust-strip">
        <div className="container trust-statement">
          <p className="trust-statement-text">
            Every lead deserves a conversation, not a blast.
          </p>
        </div>
      </div>

      {/* Problem */}
      <section className="problem section-padding">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>
            Your leads go cold.
            <br />
            Your listings sit.
            <br />
            Your competitors win.
          </h2>
          <p className="body-large">
            Most agents rely on sporadic texts and generic newsletters. That
            doesn’t build trust — and it certainly doesn’t close deals.
          </p>
        </div>
      </section>

      {/* Services preview */}
      <section className="services section-padding">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <EmailIcon />
              </div>
              <h3>Email Campaigns</h3>
              <p>
                Bespoke sequences that nurture buyers and sellers over weeks,
                not days.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <SmsIcon />
              </div>
              <h3>SMS Nurturing</h3>
              <p>
                Timely, personal texts that feel like a conversation — not a
                blast.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <LightningIcon />
              </div>
              <h3>Done‑For‑You</h3>
              <p>
                Strategy, copy, design, and send. You handle showings, we handle
                the rest.
              </p>
            </div>
          </div>
          <div className="services-footer">
            <Link to="/services" className="text-link">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="different section-padding">
        <div className="container different-grid">
          <div className="different-left">
            <p className="eyebrow">Our Approach</p>
            <h2>
              We don't do templates.
              <br />
              We do strategy.
            </h2>
            <p>
              Every campaign is built around your specific market, inventory,
              and voice.
            </p>
          </div>
          <div>
            <ol className="steps-list">
              <li>
                <div className="step-content">
                  <h4>Listen</h4>
                  <p>We study your market, listings, and existing leads.</p>
                </div>
              </li>
              <li>
                <div className="step-content">
                  <h4>Strategize</h4>
                  <p>Custom sequences mapped to your buyer/seller journey.</p>
                </div>
              </li>
              <li>
                <div className="step-content">
                  <h4>Create</h4>
                  <p>Copy, design, and automation — all on‑brand.</p>
                </div>
              </li>
              <li>
                <div className="step-content">
                  <h4>Optimize</h4>
                  <p>We watch the data and tweak. Relentlessly.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Case Studies (real links) */}
      <section className="case-studies section-padding" id="work">
        <div className="container">
          <p className="eyebrow">Recent Work</p>
          <div className="case-grid">
            <div className="case-card">
              <div className="case-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                  alt="Luxury interior"
                  loading="lazy"
                />
              </div>
              <div className="case-content">
                <p className="eyebrow">Case Study</p>
                <h3>176% more opens</h3>
                <p>Luxury condo specialist revamped their nurture sequence.</p>
                <Link to="/case-studies/luxury-email" className="text-link">
                  Read the case
                </Link>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image">
                <img
                  src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern home exterior"
                  loading="lazy"
                />
              </div>
              <div className="case-content">
                <p className="eyebrow">Case Study</p>
                <h3>3× listing inquiries</h3>
                <p>How a boutique brokerage turned old leads into showings.</p>
                <Link to="/case-studies/boutique-sms" className="text-link">
                  Read the case
                </Link>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image">
                <img
                  src="https://images.unsplash.com/photo-1618765142664-4a6b896670bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Open kitchen"
                  loading="lazy"
                />
              </div>
              <div className="case-content">
                <p className="eyebrow">Case Study</p>
                <h3>Closed in 30 days</h3>
                <p>Automated follow‑up that won a $2.1M deal.</p>
                <Link
                  to="/case-studies/automated-follow-up"
                  className="text-link"
                >
                  Read the case
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA – light background to avoid dark block */}
      <section className="final-cta-light">
        <div className="container">
          <p className="eyebrow">Ready to grow?</p>
          <h2>Let’s build your campaign.</h2>
          <p className="body-large">
            Book a free 20‑minute call. We’ll talk about your goals, your leads,
            and whether we’re a fit.
          </p>
          <Link to="/contact" className="btn">
            Book Your Call
          </Link>
          <p className="contact-email-light">
            Prefer email?{' '}
            <a href="mailto:samuel@foxmarketingsystems.com">
              samuel@foxmarketingsystems.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
