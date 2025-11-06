import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onCTA }) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1eL8mKk9s4J6HqKQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif leading-tight text-gray-900"
        >
          Rediscover the Beauty of Old Japan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl"
        >
          Curated journeys, vibrant cities, timeless heritage—brought to life with animation and story.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8"
        >
          <button
            onClick={onCTA}
            className="rounded-full bg-red-700 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:bg-red-800 transition"
          >
            Plan Your Adventure
          </button>
        </motion.div>
      </div>
    </section>
  );
}
