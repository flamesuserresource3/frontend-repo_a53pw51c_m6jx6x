import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, User, MapPin, Send } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', destination: '', dates: '' });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <section className="relative bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-serif">Plan Your Journey</h3>
        <p className="text-gray-600 mt-2">Tell us a little about your dream trip. We'll craft an itinerary and get back to you soon.</p>

        <div className="mt-8 bg-white/80 backdrop-blur rounded-xl border border-black/5 p-6 shadow-sm">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onSubmit={submit}
                className="grid sm:grid-cols-2 gap-4"
              >
                <Field label="Name" icon={User}>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="w-full bg-white rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-700/30"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email" icon={Mail}>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="w-full bg-white rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-700/30"
                    placeholder="name@example.com"
                  />
                </Field>
                <Field label="Destination" icon={MapPin}>
                  <select
                    required
                    value={form.destination}
                    onChange={update('destination')}
                    className="w-full bg-white rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-700/30"
                  >
                    <option value="">Select a destination</option>
                    {['Tokyo','Kyoto','Osaka','Hiroshima','Nara','Mount Fuji'].map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Dates" icon={Calendar}>
                  <input
                    required
                    value={form.dates}
                    onChange={update('dates')}
                    className="w-full bg-white rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-red-700/30"
                    placeholder="e.g., Apr 10 - Apr 20"
                  />
                </Field>
                <div className="sm:col-span-2 flex justify-end mt-2">
                  <button className="inline-flex items-center gap-2 rounded-full bg-red-700 text-white px-5 py-2.5 font-semibold shadow hover:bg-red-800 transition">
                    <Send size={16} /> Submit
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-pink-200 to-red-200 flex items-center justify-center">
                  <span className="text-4xl">🕊️</span>
                </div>
                <h4 className="mt-4 text-xl font-semibold">Arigatou! Your request is on the way.</h4>
                <p className="text-gray-600 mt-2">Well email you with a tailored itinerary shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-red-700 font-semibold hover:underline">Submit another</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-gray-700 inline-flex items-center gap-2"><Icon size={16} /> {label}</span>
      {children}
    </label>
  );
}
