import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
  ];

  // Close mobile menu on route change
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/FMS_Logo_IMG.png" 
            alt="Fox Marketing Systems" 
            className="h-12 md:h-16 w-auto"
          />
          <div className="flex flex-col">
            <span className="font-montserrat font-extrabold text-xl md:text-2xl text-espresso tracking-tight leading-tight">
              FOX MARKETING
            </span>
            <span className="font-poppins font-light text-xs md:text-sm text-espresso/70 tracking-[0.15em] -mt-1">
              SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 transition ${
                isActive(item.path)
                  ? 'text-fox-orange font-semibold'
                  : 'text-espresso hover:text-fox-orange'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fox-orange rounded-full"></span>
              )}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-espresso focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`text-lg font-medium transition ${
                  isActive(item.path)
                    ? 'text-fox-orange font-semibold'
                    : 'text-espresso hover:text-fox-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={handleNavClick}>
              <Button variant="primary" className="w-full">Get in Touch</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;