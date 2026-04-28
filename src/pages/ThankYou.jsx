import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <main className="thank-you-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Thank you</p>
          <h1>Your message has been sent.</h1>
          <p
            className="body-large"
            style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}
          >
            I'll get back to you within 24 hours.
          </p>
          <Link to="/" className="btn" style={{ marginTop: '2rem' }}>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ThankYou
