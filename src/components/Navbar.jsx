import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/fms-logo.png"
            alt="Fox Marketing Systems"
            className="logo-img"
          />
        </Link>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
            Get Started
          </NavLink>

          <label className="theme-toggle" aria-label="Toggle theme">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
              className="theme-toggle-input"
            />
            <span className="theme-toggle-switch"></span>
          </label>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
