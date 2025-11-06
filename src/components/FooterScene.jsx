import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function FooterScene() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-2xl font-serif">
              <span className="inline-block w-7 h-7 rounded-full bg-gradient-to-tr from-red-600 to-amber-400 animate-pulse" aria-hidden />
              Old Japan Travel
            </div>
            <p className="text-sm text-gray-300 mt-2 max-w-md">Step into a world where tradition meets innovation. Explore immersive scenes, curated trips, and timeless culture.</p>
          </div>
          <div className="flex items-center gap-3">
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-400">© {new Date().getFullYear()} Old Japan Travel. All rights reserved.</div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
    </footer>
  );
}
