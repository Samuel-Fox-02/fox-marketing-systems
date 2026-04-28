const Credentials = () => {
  const certs = [
    {
      title: 'HubSpot Email Marketing',
      status: 'earned',
      description:
        'Advanced certification in email marketing strategy, segmentation, and analytics.',
    },
    {
      title: 'Google Analytics (individual qualification)',
      status: 'in-progress',
      description:
        'Currently pursuing the official Google Analytics certification.',
    },
    {
      title: 'ActiveCampaign Mastery',
      status: 'in-progress',
      description:
        'Hands‑on expertise with the platform used by top real‑estate teams.',
    },
  ]

  return (
    <main className="credentials-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Trust</p>
          <h1>Certifications & qualifications</h1>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {certs.map((c, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  padding: '1.5rem',
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    color:
                      c.status === 'earned'
                        ? 'var(--fox-orange)'
                        : 'var(--text-muted)',
                    flexShrink: 0,
                  }}
                >
                  {c.status === 'earned' ? '✓' : '○'}
                </span>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {c.description}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {c.status === 'earned' ? 'Completed' : 'In progress'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: '2rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
            }}
          >
            We believe in continuous learning. New credentials are added
            regularly.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Credentials
