import { Link } from 'react-router-dom'

const Results = () => {
  const stats = [
    { value: '38–45%', label: 'Average open rate on well‑segmented lists' },
    { value: '3×', label: 'Higher SMS reply rates vs. batch blasts' },
    {
      value: '20–30%',
      label: 'Lead‑to‑appointment conversion boost with 5‑touch nurture',
    },
  ]

  return (
    <main className="results-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">What to expect</p>
          <h1>Results you can count on</h1>
          <p
            style={{
              maxWidth: '600px',
              margin: '1.5rem auto 0',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
            }}
          >
            While every market is different, our data‑backed approach
            consistently delivers these kinds of improvements.
          </p>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: 'var(--fox-orange)',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem',
                  }}
                >
                  {s.value}
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: '3rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              textAlign: 'center',
            }}
          >
            Real client stories coming soon. In the meantime, these benchmarks
            reflect what our strategy‑first approach achieves.
          </p>
        </div>
      </section>

      <section style={{ textAlign: 'center', paddingBottom: '6rem' }}>
        <Link to="/contact" className="btn">
          Let’s get these numbers for you
        </Link>
      </section>
    </main>
  )
}

export default Results
