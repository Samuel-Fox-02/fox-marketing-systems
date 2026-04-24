import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-network-nodes.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-espresso/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-fox-orange/10 text-fox-orange font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Fox Marketing Systems
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Turn Clicks Into
            <span className="text-fox-orange block">Loyal Customers</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            We build high‑converting email, SMS, and funnel systems that grow your revenue on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">Book a Strategy Call</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;