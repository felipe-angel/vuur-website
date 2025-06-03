'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="min-h-screen flex items-center justify-center bg-neutralBg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-lightText">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-gray-400 text-sm">
          Fill out the form and we’ll get back to you via email.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Fields */}
          <div className="flex space-x-4">
            <div className="w-1/2">
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
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-lightText placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="w-1/2">
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
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-lightText placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Email */}
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
              autoComplete="email"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-lightText placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Phone */}
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
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-lightText placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Services Checkboxes */}
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
                    checked={services.includes(svc)}
                    onChange={() => toggleService(svc)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded"
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary 
                ${
                  isSubmitting
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-secondary text-black hover:from-secondary hover:to-primary'
                }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Message */}
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
  );
}
