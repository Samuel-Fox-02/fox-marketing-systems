import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'

const About = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <SEO
        title="About Fox Marketing Systems"
        description="Learn about the founder and mission behind Fox Marketing Systems."
        path="/about"
      />
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle
          eyebrow="About Fox Marketing Systems"
          title="Strategy‑Led. Client‑Focused."
          description=""
        />
        <p className="text-xl text-espresso/70 max-w-3xl mx-auto">
          I'm Samuel — the person behind the systems. I built this company to
          give growing businesses access to enterprise‑level email and SMS
          strategy without the agency price tag or the runaround.
        </p>
      </div>

      {/* Founder Story + Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
        <div>
          <img
            src="/samuel-fox.jpg"
            alt="Samuel - Fox Marketing Systems Founder"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-espresso/80">
          <p className="text-lg leading-relaxed">
            I spent years studying what makes email and SMS marketing actually
            work—not just the tactics, but the psychology, the timing, and the
            systems that turn one‑time buyers into lifelong customers.
          </p>
          <p className="leading-relaxed">
            What I kept seeing were small businesses getting lost in generic
            advice or paying agencies for "campaigns" that didn't move the
            needle. The truth? Most of the revenue comes from a handful of
            well‑built automations that most brands never set up correctly.
          </p>
          <p className="leading-relaxed">
            Fox Marketing Systems exists to fix that. You get direct access to
            the person building your flows. No account managers, no handoffs, no
            inflated retainers. Just clear communication and systems designed to
            grow your revenue.
          </p>
        </div>
      </div>

      {/* Why Work With a Solo Specialist */}
      <div className="bg-gray-50 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-espresso mb-10">
          Why Work With a Solo Specialist?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-white">
            <div className="w-14 h-14 bg-fox-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-7 h-7 text-fox-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Direct Collaboration</h4>
            <p className="text-espresso/70 text-sm leading-relaxed">
              You talk to the person doing the work. Ideas move faster, feedback
              is immediate, and nothing gets lost in translation.
            </p>
          </Card>

          <Card className="p-8 text-center bg-white">
            <div className="w-14 h-14 bg-fox-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-7 h-7 text-fox-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Agility & Speed</h4>
            <p className="text-espresso/70 text-sm leading-relaxed">
              I can pivot quickly based on data and your feedback—no layers of
              approvals or agency red tape slowing things down.
            </p>
          </Card>

          <Card className="p-8 text-center bg-white">
            <div className="w-14 h-14 bg-fox-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-7 h-7 text-fox-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Invested in Your Success</h4>
            <p className="text-espresso/70 text-sm leading-relaxed">
              My reputation grows with yours. I'm fully committed to delivering
              measurable outcomes—your wins are my case studies.
            </p>
          </Card>
        </div>
      </div>

      {/* What I Bring to the Table */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-espresso mb-10">
          What I Bring to the Table
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Deep Platform Knowledge',
              desc: 'Klaviyo, Omnisend, Postscript, Attentive, and GoHighLevel—I know where the settings hide and how to make them work for you.',
            },
            {
              title: 'Copy That Converts',
              desc: 'I write email and SMS copy that sounds like your brand—not a robot. Subject lines, body copy, and CTAs that get clicks.',
            },
            {
              title: 'Data‑Driven Decisions',
              desc: "I don't guess. Every recommendation is based on benchmarks, testing, and what's actually moving the needle for your audience.",
            },
            {
              title: 'Compliance Awareness',
              desc: "TCPA, CAN‑SPAM, GDPR, and HIPAA considerations—I'll keep your marketing legal and your deliverability high.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start p-5 bg-white border border-gray-100 rounded-xl"
            >
              <svg
                className="w-5 h-5 text-fox-orange mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-bold text-espresso">{item.title}</h4>
                <p className="text-espresso/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Honest Positioning Statement */}
      <div className="bg-gradient-to-r from-espresso to-espresso/90 rounded-3xl p-10 md:p-12 max-w-4xl mx-auto mb-16 text-white text-center">
        <svg
          className="w-10 h-10 mx-auto mb-6 text-light-gold opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-xl md:text-2xl font-light italic mb-4 max-w-3xl mx-auto">
          "I may not have a wall of case studies yet—but what I do have is deep
          industry knowledge, a relentless work ethic, and a genuine desire to
          help your business win."
        </p>
        <p className="text-white/60 text-sm">
          — Samuel, Founder of Fox Marketing Systems
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-espresso mb-4">
          Ready to work together?
        </h3>
        <p className="text-espresso/70 mb-8 max-w-xl mx-auto">
          Let's hop on a no‑pressure discovery call. We'll talk about your goals
          and see if there's a fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button variant="primary" className="px-8 py-4 text-lg">
              Book a Free Call
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button variant="outline" className="px-8 py-4 text-lg">
              See How I Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
