import { useState } from 'react'
import { MailIcon, PinIcon } from '../components/Icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const web3key = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3key,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New inquiry from ${formData.name}`,
        from_name: 'Fox Marketing Systems Website',
      }),
    })

    const result = await response.json()
    if (result.success) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
      setErrorMsg(result.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let's talk</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-grid">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Ready to turn your leads into closings? Fill out the form or reach
              out directly — I respond personally.
            </p>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MailIcon />
              </span>
              <a href="mailto:samuel@foxmarketingsystems.com">
                samuel@foxmarketingsystems.com
              </a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <PinIcon />
              </span>
              <span>Based in Citrus Park, AZ — serving agents nationwide</span>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="form-success">
                <p className="form-success-title">Thank you!</p>
                <p>
                  Your message has been sent. I'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your goals..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                ></textarea>
                <button
                  type="submit"
                  className="btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' && <p className="form-error">{errorMsg}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
