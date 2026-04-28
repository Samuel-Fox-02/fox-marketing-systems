import { Link } from 'react-router-dom'
import { MailIcon, PinIcon } from './Icons'
import NewsletterSignup from './NewsletterSignup'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/fms-logo.png"
              alt="Fox Marketing Systems"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">
            Helping agents close more with conversations, not blasts.
          </p>
          <NewsletterSignup />
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Pages</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/credentials">Credentials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact-item">
            <span className="footer-icon">
              <MailIcon />
            </span>
            <a href="mailto:samuel@foxmarketingsystems.com">
              samuel@foxmarketingsystems.com
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon">
              <PinIcon />
            </span>
            <span>Citrus Park, AZ</span>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Link
              to="/privacy-policy"
              style={{
                color: '#CCCC99',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <hr className="footer-divider" />
        <p className="copyright">
          © {new Date().getFullYear()} Fox Marketing Systems. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
