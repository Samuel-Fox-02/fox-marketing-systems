import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-espresso text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex flex-col">
              <span className="font-montserrat font-extrabold text-xl tracking-tight">
                FOX MARKETING
              </span>
              <span className="font-poppins font-light text-xs text-white/60 tracking-[0.15em] -mt-1">
                SYSTEMS
              </span>
            </Link>
            <p className="text-white/60 text-sm mt-4">
              Email & SMS marketing that drives revenue.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/services" className="hover:text-fox-orange">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-fox-orange">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-fox-orange">About</Link></li>
              <li><Link to="/blog" className="hover:text-fox-orange">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="mailto:contact@foxmarketingsystems.com" className="hover:text-fox-orange">contact@foxmarketingsystems.com</a></li>
              <li><a href="tel:+14422737952" className="hover:text-fox-orange">(442) 273-7952</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Fox Marketing Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;