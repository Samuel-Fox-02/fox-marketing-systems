import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO'

const Services = () => {
  const [activeNiche, setActiveNiche] = useState('ecommerce');

  const niches = {
    ecommerce: {
      id: 'ecommerce',
      label: 'E‑Commerce',
      headline: 'Revenue Recovery + Repeat Purchase Engine',
      subhead:
        "Automated flows drive 320% more revenue per recipient. 70% of carts are abandoned. Let's capture what's already yours.",
      metrics: [
        { value: '50-60%', label: 'Welcome email open rates' },
        { value: '320%', label: 'More revenue from flows vs. campaigns' },
        { value: '70%', label: 'Average cart abandonment' },
      ],
      coreOffer: {
        title: 'Done‑For‑You Flows',
        items: [
          { name: 'Welcome Series', desc: '3 emails + SMS opt-in — educate, build trust, incentivize first purchase.' },
          { name: 'Abandoned Cart', desc: '3‑step sequence with optional SMS at hour 2 for high‑AOV stores.' },
          { name: 'Browse Abandonment', desc: 'Product‑view nudge then similar items 48hr later.' },
          { name: 'Post‑Purchase', desc: 'Confirmation, delivery updates, usage tips, review request, cross‑sell.' },
          { name: 'Winback / VIP', desc: 'Re‑engage lapsed customers and reward loyalty.' },
        ],
      },
      smsLayer: ['Compliant list growth pop‑ups', 'Shipping updates, back‑in‑stock, price‑drop alerts', '2‑way support for high‑intent shoppers'],
      campaignLayer: '4‑8 promotional emails/month, segmented by LTV and behavior, A/B tested.',
      deliverables: ['Audit + migration (Klaviyo / Omnisend)', 'Flow build + QA (12 flows baseline)', 'Monthly campaign calendar + recovered revenue reporting'],
      packages: { starter: 'Audit + 5 core flows', growth: '8 flows + 4 campaigns/mo', outcome: 'Recovered revenue dashboard' },
    },
    b2b: {
      id: 'b2b',
      label: 'B2B SaaS',
      headline: 'Lifecycle Activation System',
      subhead: 'Email triggered by product behavior—not the calendar. Measured by activation and retention, not clicks.',
      metrics: [
        { value: 'Product‑led', label: 'Event‑triggered emails' },
        { value: 'Activation', label: 'Primary success metric' },
        { value: 'Retention', label: 'Reduced churn before first value' },
      ],
      coreOffer: {
        title: 'Lifecycle Workflows',
        items: [
          { name: 'Acquisition', desc: 'Trial confirmation, demo follow‑up, pre‑onboarding expectations.' },
          { name: 'Onboarding', desc: 'Behavior‑triggered sequences focusing on one action at a time.' },
          { name: 'Adoption', desc: 'Feature discovery, role‑based use cases, habit‑forming nudges.' },
          { name: 'Retention', desc: 'Usage summaries, milestone progress, value reinforcement.' },
          { name: 'Expansion', desc: 'Plan upgrades, seat expansion, usage‑limit alerts.' },
          { name: 'Re‑engagement', desc: 'Empathetic win‑back identifying likely churn reasons.' },
        ],
      },
      smsLayer: ['Trial expiry reminders', 'Security alerts', 'Webinar starts / demo no‑show follow‑ups'],
      campaignLayer: 'Not campaign‑based — event‑triggered lifecycle emails with deep personalization.',
      deliverables: [
        'Lifecycle map workshop with product/growth/CS',
        'Data integration plan (Segment, Mixpanel → ESP)',
        'Build 6‑8 core workflows + in‑app coordination',
        'Deliverability setup (auth, domain warming)',
        'Quarterly optimization based on activation lift',
      ],
      packages: { starter: 'Lifecycle map + onboarding flow', growth: 'Adoption / retention / expansion flows', outcome: 'Activation rate lift' },
    },
    healthcare: {
      id: 'healthcare',
      label: 'Healthcare & Wellness',
      headline: 'Patient Retention & Compliance Engine',
      subhead: '$76 ROI per $1 spent. Fewer no‑shows, more rebookings, and trust—with HIPAA‑aware automation.',
      metrics: [
        { value: '$76', label: 'ROI per $1 spent' },
        { value: '26.6%', label: 'Avg email open rate' },
        { value: 'Reduced', label: 'No‑show rate' },
      ],
      coreOffer: {
        title: 'HIPAA‑Aware Automations',
        items: [
          { name: 'Appointment System', desc: 'Confirmation email + SMS, 48hr reminder, 2hr SMS, post‑visit instructions.' },
          { name: 'Recall & Reactivation', desc: 'Hygiene reminders, annual exams, 6‑month winback.' },
          { name: 'Education Nurture', desc: 'Condition‑specific content, wellness tips, trust‑building series.' },
          { name: 'Promotional', desc: 'Med spa packages, new services, membership programs (cash‑pay).' },
          { name: 'Reputation', desc: 'Automated review requests after positive visits, NPS surveys.' },
        ],
      },
      smsLayer: ['Appointment reminders (reduces no‑shows)', 'Recall alerts', '2‑way HIPAA‑compliant messaging'],
      campaignLayer: 'Monthly newsletter with health updates and clinic news; segmented by condition, visit history, engagement.',
      deliverables: [
        'HIPAA‑compliant ESP setup (Paubox, Klaviyo HIPAA tier)',
        '5 core automations: welcome, appointment, post‑visit, recall, re‑engagement',
        'Monthly newsletter',
        'Reporting on show rate, rebooking rate, patient LTV',
      ],
      packages: { starter: 'Appointment + recall system', growth: 'Education nurture + reviews', outcome: 'Show rate + rebooking lift' },
    },
    realestate: {
      id: 'realestate',
      label: 'Real Estate',
      headline: 'Client Lifecycle & Lead Nurture System',
      subhead: 'Buyers and sellers need consistent, personal communication across a long decision cycle. Automated touchpoints keep you top‑of‑mind from inquiry to closing day — and beyond.',
      metrics: [
        { value: 'Instant', label: 'Lead response boost' },
        { value: 'Top-of-mind', label: 'Quarterly check‑ins' },
        { value: 'Referrals', label: 'Automated request system' },
      ],
      coreOffer: {
        title: 'Lifecycle Automations',
        items: [
          { name: 'Lead Auto‑Responder', desc: 'Instant email/SMS when a lead registers. Sets expectations and opens a conversation.' },
          { name: 'Property Listing Alerts', desc: "Automated emails with listings matching the lead's criteria (price, location, features)." },
          { name: 'Open House Invitations', desc: 'Invitations, reminders, and follow‑ups. SMS reminder 2 hours before.' },
          { name: 'Post‑Viewing Follow‑Up', desc: 'Next‑day email with property summary, similar listings, and a "What\'s next?" CTA.' },
          { name: 'Milestone Updates', desc: 'Under contract, inspection, appraisal, closing — keep clients informed automatically.' },
          { name: 'Closing Celebration + Review Request', desc: 'Congratulatory email, request for Google/Zillow review, and optional gift card.' },
          { name: 'Past Client Check‑In', desc: 'Quarterly "How\'s the home?" or "Market update" touchpoints to stay top‑of‑mind.' },
          { name: 'Referral Request Campaign', desc: 'Polite, timed requests for referrals to friends/family.' },
        ],
      },
      smsLayer: ['Showing confirmations & reminders', 'Price‑drop alerts', '2‑way conversations for quick questions'],
      campaignLayer: 'Monthly newsletter with market stats, just‑sold properties, and community news. Long‑form nurture sequences for sellers and buyers.',
      deliverables: [
        'CRM integration (Follow Up Boss, HubSpot, etc.)',
        'Audit & migration',
        '5 core automations (Starter)',
        'Full lifecycle flows (Growth)',
        'Monthly performance dashboard',
      ],
      packages: { starter: 'Lead auto‑responder + listing alerts + open house + post‑viewing + closing flows', growth: 'Everything in Starter + SMS layer + nurture sequences + newsletter + referral campaigns', outcome: 'Faster lead response, more showings, more closed deals' },
    },
  };

  const tabs = Object.values(niches).map((n) => ({ id: n.id, label: n.label }));
  const currentNiche = niches[activeNiche];

  // Helper to get icon for a niche id
  const nicheIcon = (id) => {
    const icons = {
      ecommerce: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      b2b: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
      healthcare: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      realestate: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    };
    return icons[id] || null;
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        eyebrow="Services"
        title="Specialized Systems for Your Industry"
        description="Choose the path that fits your business model. Each system is built on proven frameworks and delivered with full transparency."
      />

      {/* Niche Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveNiche(tab.id)}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center ${
              activeNiche === tab.id
                ? 'bg-fox-orange text-white shadow-lg'
                : 'bg-gray-100 text-espresso/70 hover:bg-gray-200'
            }`}
          >
            {nicheIcon(tab.id)}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Niche Content */}
      <div className="max-w-6xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-4">{currentNiche.headline}</h2>
          <p className="text-xl text-espresso/70 max-w-3xl mx-auto">{currentNiche.subhead}</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {currentNiche.metrics.map((metric, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-fox-orange">{metric.value}</div>
              <div className="text-sm text-espresso/60 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Core Offer + SMS + Campaigns */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-fox-orange/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-fox-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </span>
              {currentNiche.coreOffer.title}
            </h3>
            <ul className="space-y-4">
              {currentNiche.coreOffer.items.map((item, idx) => (
                <li key={idx} className="border-b border-gray-100 pb-3 last:border-0">
                  <div className="font-semibold text-espresso">{item.name}</div>
                  <div className="text-sm text-espresso/60">{item.desc}</div>
                </li>
              ))}
            </ul>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-fox-orange/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-fox-orange">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </span>
                SMS Layer
              </h3>
              <ul className="space-y-2">
                {currentNiche.smsLayer.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-fox-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-fox-orange/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-fox-orange">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </span>
                Campaign Layer
              </h3>
              <p className="text-espresso/70">{currentNiche.campaignLayer}</p>
            </Card>
          </div>
        </div>

        {/* Deliverables */}
        <Card className="p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentNiche.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-fox-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Package Table */}
        <div className="bg-gradient-to-r from-espresso to-espresso/90 rounded-3xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Choose Your Package</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 text-lg font-semibold">Starter Package</th>
                  <th className="pb-4 text-lg font-semibold">Growth Package</th>
                  <th className="pb-4 text-lg font-semibold">What You'll See</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 pr-6">{currentNiche.packages.starter}</td>
                  <td className="py-4 pr-6">{currentNiche.packages.growth}</td>
                  <td className="py-4 text-light-gold font-semibold">{currentNiche.packages.outcome}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="bg-fox-orange text-white hover:bg-fox-orange/80 border-0 px-10 py-4 text-lg">
                Discuss Your {currentNiche.label} Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Full Funnel Authority Add‑On */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-fox-orange/10 text-fox-orange font-semibold px-4 py-2 rounded-full text-sm tracking-wider uppercase">
                Add‑On for Any Package
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-espresso mt-4">Full Funnel Authority</h2>
              <p className="text-lg text-espresso/70 mt-4 max-w-2xl mx-auto">
                Layer a complete funnel‑building engine onto your email/SMS system. Turn strangers into loyal customers with landing pages, lead magnets, and multi‑stage conversion sequences.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-fox-orange mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Lead Magnet Funnel</h4>
                <p className="text-sm text-espresso/70">Custom landing page, thank‑you page, and delivery sequence for your free resource.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-fox-orange mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Sales Funnel Automation</h4>
                <p className="text-sm text-espresso/70">3‑stage email/SMS funnel that turns leads into buyers with behavior‑based triggers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-fox-orange mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Full Funnel Analytics</h4>
                <p className="text-sm text-espresso/70">Dashboard tracking conversion from lead magnet opt‑in to final sale, plus A/B testing insights.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-espresso/60 mb-4">This add‑on can be attached to any Starter or Growth package.</p>
              <Link to="/contact">
                <Button variant="outline" className="border-espresso text-espresso hover:bg-espresso hover:text-white px-8 py-4">
                  Ask About Adding a Funnel
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Solutions for Other Industries */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-fox-orange/10 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fox-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-espresso mb-4">Not in one of these industries?</h3>
            <p className="text-lg text-espresso/70 mb-8">
              The systems above are built on universal principles—audience understanding, behavior‑triggered communication, and revenue optimization.
              Whether you're in real estate, professional services, or something entirely different, I can craft a custom solution that fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" className="px-8 py-4">Book a Free Discovery Call</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="px-8 py-4">Learn How I Work</Button>
              </Link>
            </div>
            <p className="text-sm text-espresso/50 mt-6">No obligation. We'll discuss your goals and see if there's a fit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;