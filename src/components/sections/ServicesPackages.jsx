import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: "Essential Email Launch",
    description: "Perfect for getting started with automated welcome sequences and basic newsletters.",
    features: ["Strategy Call", "1 Automated Flow", "2 Email Templates", "Basic Analytics Setup"],
    cta: "Start with Email"
  },
  {
    title: "Growth SMS & Email",
    description: "Combine email nurture with high-open SMS campaigns for maximum engagement.",
    features: ["Everything in Essential", "SMS Campaign Setup", "List Segmentation", "A/B Testing", "Monthly Performance Report"],
    cta: "Grow with SMS+Email"
  },
  {
    title: "Full Funnel Authority",
    description: "Custom funnel building from lead magnet to checkout – email + SMS included.",
    features: ["Custom Landing Page", "3-Stage Email/SMS Funnel", "Abandoned Cart Recovery", "Advanced Analytics", "Dedicated Strategist"],
    cta: "Build My Funnel"
  }
];

const ServicesPackages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          eyebrow="Our Packages"
          title="Tailored Marketing Solutions"
          description="No hidden fees. Transparent, high-impact solutions for email, SMS, and funnel building."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <Card key={idx} className="p-8 shadow-lg hover:shadow-xl transition flex flex-col h-full">
              {/* Card content */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-espresso/70 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-fox-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Button pushed to bottom */}
              <div className="mt-auto pt-4">
                <Link to="/contact">
                  <Button variant="outline" className="w-full">{pkg.cta}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-espresso/60">Need a custom solution? <Link to="/contact" className="text-fox-orange font-semibold underline">Let's talk.</Link></p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPackages;