// src/app/contact/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { id: 'website', label: 'Website Development' },
  { id: 'social', label: 'Social Media Management' },
  { id: 'realestate', label: 'Real Estate Marketing' },
  { id: 'branding', label: 'Brand Strategy' }
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const toggleService = (id: string) => {
    setSelected(sel =>
      sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    console.log({ services: selected, ...form });
    alert('Thank you! We will reach out shortly.');
  };

  return (
    <div className="bg-surface text-onSurface min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24 px-4 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Let's Create Something Amazing
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-surface"
        >
          Tell us more about your project and how VUUR can ignite your digital presence.
        </motion.p>
      </section>

      <main className="-mt-12 pb-16 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Contact Us
        </motion.h2>

        <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Services Selector */}
            <fieldset className="space-y-4">
              <legend className="text-2xl font-semibold text-surface">
                I’m interested in:
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map(s => (
                  <label
                    key={s.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(s.id)}
                      onChange={() => toggleService(s.id)}
                      className="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <span className="text-surface font-medium">{s.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['firstName','lastName'].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-surface capitalize">
                    {field === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type="text"
                    required
                    value={(form as any)[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              ))}
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-surface">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full py-4 mt-4 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-95 transform hover:-translate-y-1 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
