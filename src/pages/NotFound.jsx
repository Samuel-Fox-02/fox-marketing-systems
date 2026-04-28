import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="not-found-page">
      <section className="page-header" style={{ paddingTop: '12rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">404</p>
          <h1>This listing has sold.</h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginTop: '1rem',
              fontSize: '1.1rem',
            }}
          >
            The page you’re looking for no longer exists.
          </p>
          <Link to="/" className="btn" style={{ marginTop: '2rem' }}>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound
