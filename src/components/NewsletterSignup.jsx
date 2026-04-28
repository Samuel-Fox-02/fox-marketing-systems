import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // Replace with your ConvertKit/MailerLite form endpoint
    const endpoint =
      'https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions'
    const data = new FormData()
    data.append('email_address', email)
    data.append('api_key', 'YOUR_API_KEY') // optional, depends on service

    try {
      const res = await fetch(endpoint, { method: 'POST', body: data })
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
