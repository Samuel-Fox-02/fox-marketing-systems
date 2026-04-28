const Privacy = () => {
  return (
    <main className="privacy-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="body-large" style={{ marginBottom: '2rem' }}>
            Your privacy is important to us. This policy explains what data we
            collect and how we use it when you visit this website or engage with
            our services.
          </p>

          <h2>Information we collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We collect the information you voluntarily provide when you fill out
            our contact form: your name, email address, and any message you
            include. We also use a standard web analytics service that may
            collect anonymous usage data (pages visited, time on site, etc.).
          </p>

          <h2>How we use your data</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your contact details are used solely to respond to your inquiry. We
            never sell, rent, or trade your personal information to third
            parties. Anonymous analytics data helps us improve the website
            experience.
          </p>

          <h2>Email & SMS communications</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We adhere to CAN‑SPAM and TCPA regulations. Every marketing email or
            SMS we send on behalf of our clients includes an easy unsubscribe
            option, and we honor opt‑out requests immediately.
          </p>

          <h2>Third‑party services</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            This website uses Web3Forms to process contact form submissions.
            Web3Forms stores the submitted data briefly for delivery purposes
            only. You can read more on their website.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy, please email{' '}
            <a
              href="mailto:samuel@foxmarketingsystems.com"
              className="text-link"
            >
              samuel@foxmarketingsystems.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default Privacy
