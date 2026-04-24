import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We'll chat about your business, goals, and current marketing efforts. No pressure, just clarity."
  },
  {
    number: "02",
    title: "Strategy Blueprint",
    description: "I'll map out a custom email/SMS/funnel plan tailored to your audience and revenue targets."
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "I design, write, and set up your campaigns. You review, we refine, then go live."
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "We track performance together and tweak for better opens, clicks, and conversions."
  }
];

const ProcessShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          eyebrow="How We Work"
          title="A Simple Process, Real Results"
          description="You don't need a giant agency to get professional email and SMS marketing. Here's how we'll tackle it together."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-8 text-center hover:shadow-lg transition">
              <span className="text-5xl font-extrabold text-fox-orange/20 block mb-4">{step.number}</span>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-espresso/70 text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;