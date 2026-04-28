import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/klaviyo-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setMessage('Thanks! Check your inbox.')
      } else {
        setStatus('error')
        setMessage('Something went wrong. Try again later.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <div className="newsletter-signup">
      {status === 'success' ? (
        <p className="newsletter-success">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className="newsletter-input"
          />
          <button
            type="submit"
            className="btn newsletter-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Stay in the loop'}
          </button>
          {status === 'error' && <p className="newsletter-error">{message}</p>}
        </form>
      )}
    </div>
  )
}

export default NewsletterSignup
