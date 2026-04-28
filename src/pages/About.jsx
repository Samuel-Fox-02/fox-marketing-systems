import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className="about-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Behind the campaigns</h1>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container about-grid">
          {/* Text – now comes first, so it will be on the left */}
          <div className="about-text">
            <h2>Hi, I'm Samuel Fox.</h2>
            <p className="body-large">
              I built Fox Marketing Systems because I saw too many great agents
              losing deals to bad follow-up. I help real estate professionals
              build genuine relationships at scale — through email and SMS that
              people actually want to read.
            </p>
            <p className="body-large" style={{ marginTop: '1.5rem' }}>
              My background blends marketing strategy with deep real‑estate
              knowledge, so every campaign feels native to your market — and
              your brand. I don’t believe in templates. I believe in
              conversations that convert.
            </p>
            <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
              Work with me
            </Link>
          </div>

          {/* Photo – now second, so it will appear on the right */}
          <div className="about-image">
            <img src="/samuel.jpg" alt="Samuel Fox" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
