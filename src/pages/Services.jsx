import { Link } from 'react-router-dom'
import {
  GearIcon,
  MailIcon,
  LightningIcon,
  ChartIcon,
} from '../components/Icons'

const Services = () => {
  const pillars = [
    {
      Icon: GearIcon,
      title: 'Strategy & Infrastructure Setup',
      lead: 'We design a personalised email & SMS engine that actually fits your business — tech stack, compliance, and voice all aligned before a single send.',
      items: [
        'CRM audit & seamless integration (Follow Up Boss, kvCORE, BoomTown, HubSpot, etc.)',
        'Audience segmentation framework — buyers, sellers, SOI, past clients, cold leads',
        'Brand voice & messaging guide tailored to your market and niche',
        'Opt‑in strategy & landing‑page setup (pop‑ups, QR codes, social lead magnets)',
        'Compliance configuration — CAN‑SPAM, TCPA, double opt‑in, quiet hours, unsubscribe',
      ],
    },
    {
      Icon: MailIcon,
      title: 'Campaign Management & Execution',
      lead: 'We write, design, and send every campaign as if it came straight from your desk — consistent, on‑brand, and impossible to ignore.',
      items: [
        'Weekly / monthly market‑update newsletters with hyperlocal data & mortgage context',
        'Just Listed / Just Sold campaigns — email + SMS blasts with tracking & reply prompts',
        'Open‑house promotion sequences (pre‑event, day‑of nudges, post‑event follow‑up)',
        'Seasonal & milestone campaigns — home‑buying anniversaries, tax season, holidays',
        'Personal‑brand & listing spotlights — agent bios, community stories, video walkthroughs',
      ],
    },
    {
      Icon: LightningIcon,
      title: 'Automation & Lead Nurturing',
      lead: 'We build sequences that do the heavy lifting — so leads feel personally cared for, even when you’re sleeping.',
      items: [
        'New‑lead welcome & qualification (3–7 touchpoints to book calls & assess readiness)',
        'Buyer & seller onboarding flows — document prep, timeline education, expectation setting',
        'Post‑close & review‑generation sequence (thank you, referral ask, Google/Zillow reviews)',
        'Dead / cold lead reactivation — value‑driven re‑engagement via email + SMS',
        'Referral & sphere nurture engine — quarterly touches, market updates, appreciation drops',
      ],
    },
    {
      Icon: ChartIcon,
      title: 'Analytics, Optimization & Reporting',
      lead: 'We obsess over the numbers so you don’t have to — and we show you exactly what’s working and what we’ll improve next.',
      items: [
        'Monthly performance dashboard — opens, replies, clicks, bookings, ROI tracking',
        'A/B testing program — subject lines, send times, SMS vs. email splits, CTA variations',
        'List hygiene & deliverability monitoring — spam‑trap removal, domain warming, sender reputation',
        'Quarterly strategy review & campaign roadmap — we present findings and next steps',
      ],
    },
  ]

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>What we do</h1>
          <p
            style={{
              maxWidth: '600px',
              margin: '1.5rem auto 0',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
            }}
          >
            A complete email & SMS system built around your real‑estate
            business. No templates. No blasts. Just conversations that convert.
          </p>
        </div>
      </section>

      {/* Core Pillars – detailed */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="container">
          <div
            className="services-grid"
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
          >
            {pillars.map((p, idx) => {
              const IconComponent = p.Icon
              return (
                <div className="service-card" key={idx}>
                  <div className="service-icon">
                    <IconComponent />
                  </div>
                  <h3>{p.title}</h3>
                  <p style={{ marginBottom: '1.4rem' }}>{p.lead}</p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {p.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '0.6rem',
                          marginBottom: '0.7rem',
                          alignItems: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--fox-orange)',
                            fontWeight: 600,
                            fontSize: '1.2rem',
                            lineHeight: 1,
                            flexShrink: 0,
                            marginTop: '0.1rem',
                          }}
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container">
          <p className="eyebrow">How we partner</p>
          <h2 style={{ marginBottom: '3rem' }}>Three ways to work together</h2>
          <div className="engagement-grid">
            <div className="engagement-card">
              <h3>Fully managed partnership</h3>
              <p>
                Your complete email & SMS engine, built and run by us. We handle
                strategy, copy, design, sending, and optimization — so you can
                focus entirely on your clients.
              </p>
            </div>
            <div className="engagement-card">
              <h3>Strategy & build‑out</h3>
              <p>
                For agents who want the blueprint and the assets, then bring
                execution in‑house. We design your sequences and automations,
                hand over the playbook, and train your team.
              </p>
            </div>
            <div className="engagement-card">
              <h3>Audit & roadmap</h3>
              <p>
                A one‑time deep‑dive into your current email & SMS setup. We
                uncover what’s working, what’s broken, and deliver a
                step‑by‑step improvement plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work – horizontal */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2>Your campaign, in four steps</h2>

          <div className="steps-horizontal">
            <div className="step-h-item">
              <div className="step-h-number">01</div>
              <h4>Discovery call</h4>
              <p>
                We learn about your market, your past campaigns, and where you
                want to be in six months.
              </p>
            </div>

            <div className="step-h-arrow" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="step-h-item">
              <div className="step-h-number">02</div>
              <h4>Strategy & build</h4>
              <p>
                We design your sequences, write copy, and set up your
                automations — all tailored to your brand.
              </p>
            </div>

            <div className="step-h-arrow" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="step-h-item">
              <div className="step-h-number">03</div>
              <h4>Launch & monitor</h4>
              <p>
                We send, watch the numbers, and tweak. You get a simple weekly
                update so you always know what’s happening.
              </p>
            </div>

            <div className="step-h-arrow" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="step-h-item">
              <div className="step-h-number">04</div>
              <h4>Refine & scale</h4>
              <p>
                After 30 days we review everything together, double down on what
                works, and scale to more leads or listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          backgroundColor: 'var(--final-cta-bg)',
          textAlign: 'left',
          padding: '8rem 0',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="eyebrow" style={{ color: 'var(--final-cta-text)' }}>
            Ready to get started?
          </p>
          <h2
            style={{
              color: 'var(--final-cta-heading)',
              marginBottom: '1.5rem',
            }}
          >
            Let’s build a campaign that feels like you.
          </h2>
          <p
            className="body-large"
            style={{ color: 'var(--final-cta-text)', marginBottom: '2.5rem' }}
          >
            We’ll create a custom email & SMS strategy — no templates, no
            guesswork. Book a free 20‑minute call and we’ll walk you through the
            process.
          </p>
          <Link to="/contact" className="btn">
            Book Your Call
          </Link>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--final-cta-text)',
            }}
          >
            Prefer email?{' '}
            <a
              href="mailto:samuel@foxmarketingsystems.com"
              style={{
                color: 'var(--fox-orange)',
                textDecoration: 'none',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.25s ease',
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = 'var(--fox-orange)')
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = 'transparent')
              }
            >
              samuel@foxmarketingsystems.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Services
