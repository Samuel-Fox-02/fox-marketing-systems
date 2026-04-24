import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: 'Sending...' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: 'success',
          message: "Message sent! We'll be in touch within 24 hours.",
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({
          type: 'error',
          message:
            'Failed to send. Please email us directly at samuel@foxmarketingsystems.com.',
        });
      });
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <SectionTitle
        eyebrow="Get in Touch"
        title="Let's Build Something Great"
        description="Tell us about your project and we'll craft a strategy that moves the needle."
      />
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fox-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fox-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Company / Project</label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fox-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">How can we help?</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fox-orange focus:border-transparent"
            ></textarea>
          </div>
          {status.message && (
            <div
              className={`text-sm ${
                status.type === 'success'
                  ? 'text-green-600'
                  : status.type === 'error'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {status.message}
            </div>
          )}
          <Button type="submit" variant="primary" className="w-full md:w-auto px-8">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;