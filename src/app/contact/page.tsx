// File: src/app/contact/page.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle a service in the array
  const toggleService = (serviceName: string) => {
    setServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, services }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Unknown error');
      }

      setStatusMessage('Your message has been sent! We’ll be in touch soon.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setServices([]);
    } catch (err) {
      console.error('Submission error:', err);
      setStatusMessage(
        'Sorry, something went wrong. Please try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/** ================= Radial‐Gradient Background (same as your ContactSection.tsx) ================ */}
      <section
        id="contact"
        className="py-24 px-6 text-white relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at top center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%),
            radial-gradient(circle at top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
            radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
            radial-gradient(circle at bottom left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
            radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
            linear-gradient(to right, #ff5400, #001f3f, #6f3ff5)
          `,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ff5400]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6f3ff5]/20 blur-2xl"
        />

        {/** ================= Form Container ================ */}
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-6xl font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]">
            Let’s Get in Touch
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Fill out the form below and we’ll respond as soon as possible.
          </p>

          <div className="mx-auto w-full max-w-lg bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/** First + Last Name **/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFirstName(e.target.value)
                    }
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-full text-lightText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setLastName(e.target.value)
                    }
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-full text-lightText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/** Email **/}
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-full text-lightText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/** Phone **/}
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-full text-lightText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/** Services Checkboxes **/}
              <fieldset className="mt-4">
                <legend className="text-sm font-medium text-gray-300">
                  I’m interested in: (select all that apply)
                </legend>
                <div className="mt-2 space-y-2">
                  {['Website', 'Social', 'Real Estate', 'Branding'].map((svc) => (
                    <div key={svc} className="flex items-center">
                      <input
                        id={svc}
                        name="services"
                        type="checkbox"
                        value={svc}
                        checked={services.includes(svc)}
                        onChange={() => toggleService(svc)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded"
                      />
                      <label
                        htmlFor={svc}
                        className="ml-2 block text-sm text-gray-300"
                      >
                        {svc}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              {/** Submit Button **/}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary 
                    ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-secondary text-black hover:from-secondary hover:to-primary'
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/** Status Message **/}
              {statusMessage && (
                <p
                  className={`mt-4 text-center text-sm ${
                    statusMessage.startsWith('Sorry')
                      ? 'text-red-500'
                      : 'text-green-400'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
