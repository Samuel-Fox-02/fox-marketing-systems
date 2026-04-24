import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/ui/SEO'

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const tabs = [
    { id: 'ecommerce', label: 'E‑Commerce' },
    { id: 'b2b', label: 'B2B SaaS' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'realestate', label: 'Real Estate' },
  ];

  const caseStudies = {
    ecommerce: {
      title: 'Welcome Flow Strategy for a Premium Skincare Brand',
      context:
        'This is a hypothetical scenario built from real e‑commerce best practices. The brand sells products with a 60‑day replenishment cycle and an average order value of $85.',
      challenge:
        'New subscribers were receiving a generic 10% off code but only 12% converted within 7 days. The brand was missing opportunities to educate, build trust, and capture SMS subscribers.',
      solution: {
        overview:
          'A 5‑email welcome series with an SMS opt‑in trigger, designed to introduce the brand story, educate on hero ingredients, and offer a tiered incentive based on engagement.',
        flows: [
          {
            name: 'Email 1: Immediate Value',
            timing: 'Instant',
            content:
              'Brand story + free skincare guide download. No discount yet—builds trust first.',
          },
          {
            name: 'Email 2: Social Proof',
            timing: '24 hours',
            content:
              'Customer testimonials, before/after photos, and a "why our formula works" explainer.',
          },
          {
            name: 'Email 3: Soft Sell',
            timing: '48 hours',
            content:
              'Best‑selling product spotlight with a 15% off code for first purchase.',
          },
          {
            name: 'Email 4: SMS Opt‑In',
            timing: '72 hours (only if no purchase)',
            content:
              'Invitation to join SMS list for exclusive early access and restock alerts.',
          },
          {
            name: 'Email 5: Last Chance',
            timing: 'Day 5',
            content: 'Final reminder with 20% off expiring in 48 hours.',
          },
        ],
        sms: 'SMS opt‑ins receive a 6‑message nurture sequence over 14 days with product tips, limited‑time offers, and two‑way support prompts.',
      },
      projectedOutcome:
        'Based on industry benchmarks, this structure typically lifts welcome flow revenue by 40‑60% and grows the SMS list by 15‑20% of new subscribers.',
      deliverables: [
        'Custom email copy and design',
        'Klaviyo flow setup with conditional splits',
        'SMS compliance setup (TCPA opt‑in)',
        '30‑day performance dashboard',
      ],
    },
    b2b: {
      title: 'Onboarding Activation System for a Project Management SaaS',
      context:
        'Hypothetical scenario for a SaaS tool with a 14‑day free trial. Users who complete 3+ key actions in the first 48 hours are 4x more likely to convert to paid.',
      challenge:
        'Only 22% of trial users were reaching the "aha moment" within the first week. Emails were generic "welcome to the trial" blasts sent on a fixed schedule, ignoring user behavior.',
      solution: {
        overview:
          "A behavior‑triggered onboarding sequence that adapts based on what the user has (or hasn't) done in the product.",
        flows: [
          {
            name: 'Trial Confirmation',
            timing: 'Instant',
            content:
              'Login link, quick‑start checklist, and expectation setting for the next 14 days.',
          },
          {
            name: 'First Action Nudge',
            timing: 'Triggered 2hr after signup if no project created',
            content:
              'One‑click template to create first project with guided tour link.',
          },
          {
            name: 'Invite Teammate',
            timing: 'Triggered after first project created',
            content:
              'Prompt to invite a colleague—collaboration doubles retention.',
          },
          {
            name: 'Feature Spotlight',
            timing: 'Day 3, based on usage gaps',
            content:
              'Introduces advanced feature relevant to their role (e.g., Gantt charts for PMs).',
          },
          {
            name: 'Trial Expiry Series',
            timing: 'Days 12, 13, 14',
            content:
              'Recap of value created, upgrade incentive, and offer for extended trial if needed.',
          },
        ],
        sms: 'Optional trial expiry reminders and webinar start alerts for high‑intent users.',
      },
      projectedOutcome:
        'Behavior‑triggered onboarding typically increases activation rate by 30‑50% and reduces time‑to‑first‑value by half.',
      deliverables: [
        'Lifecycle map workshop',
        'Segment / Mixpanel → ESP integration',
        "5 core onboarding workflows built and QA'd",
        'Activation rate dashboard with cohort analysis',
      ],
    },
    healthcare: {
      title: 'Appointment Recall System for a Multi‑Provider Dental Practice',
      context:
        'Hypothetical practice with 3 dentists and a hygiene team. Average patient visits every 6 months, but 40% of patients lapse beyond 12 months.',
      challenge:
        'Manual reminder calls were time‑consuming and inconsistent. No‑show rate was 18%, and rebooking after hygiene appointments was only 45%.',
      solution: {
        overview:
          'HIPAA‑compliant email + SMS automation that confirms, reminds, and re‑engages patients—reducing admin work and filling the schedule.',
        flows: [
          {
            name: 'Appointment Confirmation',
            timing: 'Immediate upon booking',
            content:
              'Email with date/time, location, prep instructions, and "add to calendar" link.',
          },
          {
            name: 'Reminder #1',
            timing: '48 hours before',
            content: 'Email with friendly reminder and link to reschedule if needed.',
          },
          {
            name: 'Reminder #2',
            timing: '2 hours before',
            content:
              'SMS text reminder (HIPAA‑compliant) with confirmation prompt.',
          },
          {
            name: 'Post‑Visit Follow‑Up',
            timing: 'Same day',
            content:
              'Thank you email with care instructions and a 1‑click rebooking link for next hygiene visit.',
          },
          {
            name: 'Recall Reactivation',
            timing: '5 months after last visit',
            content:
              "Email + SMS reminding patient it's time to schedule, with link to online booking.",
          },
          {
            name: 'Winback',
            timing: '12+ months lapsed',
            content:
              'Personalized email from the dentist inviting them back with a new patient special if applicable.',
          },
        ],
        sms: 'All reminders sent via SMS where consent is given; two‑way texting available for rescheduling.',
      },
      projectedOutcome:
        'Practices using similar systems reduce no‑shows by 30‑40% and increase rebooking rates to 70%+. Admin time spent on phones drops by 10+ hours per week.',
      deliverables: [
        'HIPAA‑compliant ESP setup (Paubox or similar)',
        '5 core automation workflows',
        'Online booking integration',
        'Monthly show rate and rebooking report',
      ],
    },
    realestate: {
      title: 'Lead Nurture System for a Top‑Producing Real Estate Team',
      context:
        'Hypothetical scenario for a team of 12 agents. Leads come in from Zillow, Realtor.com, and the team website, but manual follow‑up is slow and inconsistent.',
      challenge:
        'Only 20% of online leads received a follow‑up within 1 hour. Past clients rarely heard from the team after closing, resulting in low referral and repeat business.',
      solution: {
        overview:
          'A behavior‑based lifecycle automation system that instantly engages new leads, nurtures them with listing alerts and open house invitations, and stays in touch after closing.',
        flows: [
          {
            name: 'Instant Lead Auto‑Responder',
            timing: 'Immediate',
            content:
              'Personalized SMS + email from the assigned agent, setting expectations for next steps.',
          },
          {
            name: 'Property Listing Alerts',
            timing: 'Daily/Weekly as criteria match',
            content:
              'Automated emails with new listings, price drops, and open house dates.',
          },
          {
            name: 'Open House Sequence',
            timing: '3 days before, 1 day before, 2 hours before',
            content: 'Invitation, reminder, and day‑of SMS with details.',
          },
          {
            name: 'Post‑Viewing Follow‑Up',
            timing: 'Next day',
            content:
              'Summary of the viewed property, similar listings, and CTA to schedule another showing.',
          },
          {
            name: 'Closing Celebration + Review Request',
            timing: 'Day of closing',
            content:
              'Congratulations email, request for a Google review, and a small gift card offer.',
          },
          {
            name: 'Past Client Check‑In',
            timing: 'Quarterly',
            content:
              'Personalized "market update" or "home anniversary" emails to maintain the relationship.',
          },
          {
            name: 'Referral Request',
            timing: 'After positive review or milestone',
            content:
              'Gentle ask for referrals with a one‑click share option.',
          },
        ],
        sms: 'Showing confirmations, price‑drop alerts, and open house reminders sent via SMS for immediate visibility.',
      },
      projectedOutcome:
        'Teams using similar systems typically see a 40% increase in lead‑to‑showing conversion, 30% more reviews, and a 25% lift in referral business.',
      deliverables: [
        'CRM integration (Follow Up Boss / HubSpot)',
        '6 core automation workflows',
        'SMS setup with compliance',
        '30‑day performance dashboard',
      ],
    },
  };

  const activeCase = caseStudies[activeTab];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        eyebrow="Case Studies"
        title="Strategic Systems, Transparent Process"
        description="Real methodologies applied to hypothetical scenarios. Every solution is built on proven frameworks I can adapt to your business."
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === tab.id
                ? 'bg-fox-orange text-white shadow-md'
                : 'bg-gray-100 text-espresso/70 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">
          {activeCase.title}
        </h2>

        <Card className="p-8 mb-8 bg-gray-50 border-l-4 border-l-fox-orange">
          <p className="text-espresso/80 italic">{activeCase.context}</p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-600">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
              </span>
              The Challenge
            </h3>
            <p className="text-espresso/70">{activeCase.challenge}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </span>
              Projected Outcome
            </h3>
            <p className="text-espresso/70">{activeCase.projectedOutcome}</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">The Solution Architecture</h3>
        <p className="text-espresso/70 mb-6">{activeCase.solution.overview}</p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead className="bg-espresso text-white">
              <tr>
                <th className="p-4 font-semibold">Flow / Trigger</th>
                <th className="p-4 font-semibold">Timing</th>
                <th className="p-4 font-semibold">Content Strategy</th>
              </tr>
            </thead>
            <tbody>
              {activeCase.solution.flows.map((flow, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">{flow.name}</td>
                  <td className="p-4 text-espresso/70">{flow.timing}</td>
                  <td className="p-4 text-espresso/70">{flow.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {activeCase.solution.sms && (
          <div className="mb-10">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-fox-orange mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </span>
              SMS Component
            </h4>
            <p className="text-espresso/70 bg-gray-50 p-4 rounded-lg">{activeCase.solution.sms}</p>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-6">What I Deliver</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {activeCase.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start bg-white p-4 rounded-lg border border-gray-100">
              <svg className="w-5 h-5 text-fox-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-espresso to-espresso/90 rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Build Your Custom System</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            These examples demonstrate the methodology. Your business will get a tailored strategy based on your unique goals, audience, and tech stack.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="bg-fox-orange text-white hover:bg-fox-orange/80 border-0 px-10 py-4 text-lg">
              Book a Free Strategy Call
            </Button>
          </Link>
        </div>

        <p className="text-center text-espresso/50 text-sm mt-8">
          All case studies are illustrative and based on industry best practices and my personal framework development.
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;