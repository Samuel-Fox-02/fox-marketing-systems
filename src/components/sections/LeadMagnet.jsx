import Button from '../ui/Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const LeadMagnet = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: 'Sending...' });

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
      form.current,
      'YOUR_PUBLIC_KEY'   // Replace with EmailJS Public Key
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Success! Check your inbox.' });
      form.current.reset();
    })
    .catch(() => {
      setStatus({ type: 'error', message: 'Oops. Please try again.' });
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-espresso to-espresso/90 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Our Free Email Playbook</h2>
          <p className="text-xl text-white/80 mb-8">7 email sequences that generated over $2M for our clients.</p>
          
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your work email" 
              required 
              className="flex-grow px-6 py-4 rounded-lg text-espresso placeholder:text-espresso/50 focus:outline-none focus:ring-2 focus:ring-fox-orange"
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">Send Me the Playbook</Button>
          </form>
          
          {status.message && (
            <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-light-gold' : status.type === 'error' ? 'text-red-300' : 'text-white/70'}`}>
              {status.message}
            </p>
          )}
          <p className="text-white/50 text-sm mt-4">We'll never spam you. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;