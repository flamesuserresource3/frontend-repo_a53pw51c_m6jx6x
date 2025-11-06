import React from 'react';
import { motion } from 'framer-motion';

const palette = {
  Tokyo: 'from-[#2C2C2C] to-[#FFFFFF]',
  Kyoto: 'from-[#F7C9A9] to-[#FFFFFF]',
  Osaka: 'from-[#D4AF37]/20 to-[#FFFFFF]',
  Hiroshima: 'from-[#96B5AE]/20 to-[#FFFFFF]',
  Nara: 'from-[#FFFFFF] to-[#F7C9A9]/30',
  'Mount Fuji': 'from-[#FFFFFF] to-[#96B5AE]/20',
};

export default function DestinationSection({ name, blurb, scenes, index }) {
  const gradient = palette[name] || 'from-white to-white';

  return (
    <section className="relative">
      <div className={`bg-gradient-to-b ${gradient}`}>
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-serif"
            >
              {index.toString().padStart(2, '0')} — {name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-gray-700"
            >
              {blurb}
            </motion.p>
            <ul className="mt-6 space-y-2 text-gray-600 list-disc list-inside">
              {scenes.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {scenes.slice(0, 2).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl bg-white/70 border border-black/5 p-4 shadow-sm"
              >
                <p className="text-sm text-gray-500">Scene</p>
                <p className="font-medium text-gray-800">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
