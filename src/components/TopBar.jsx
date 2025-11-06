import React from 'react';
import { Sun, Leaf, Snowflake, Sprout, Globe } from 'lucide-react';

const SEASONS = [
  { id: 'Spring', Icon: Sprout },
  { id: 'Summer', Icon: Sun },
  { id: 'Autumn', Icon: Leaf },
  { id: 'Winter', Icon: Snowflake },
];

export default function TopBar({ season, onSeasonChange }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="text-red-700" size={22} aria-hidden />
          <span className="font-semibold tracking-wide">Old Japan Travel</span>
        </div>
        <nav className="hidden sm:flex items-center gap-2" aria-label="Season switcher">
          {SEASONS.map(({ id, Icon }) => (
            <button
              key={id}
              onClick={() => onSeasonChange(id)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-all border ${
                season === id
                  ? 'bg-white text-gray-900 shadow-sm border-black/10'
                  : 'bg-white/50 text-gray-700 hover:bg-white/80 border-transparent'
              }`}
              aria-pressed={season === id}
            >
              <Icon size={16} />
              {id}
            </button>
          ))}
        </nav>
        <div className="sm:hidden">
          <select
            className="bg-white/80 rounded-md px-3 py-1.5 text-sm border border-black/10"
            value={season}
            onChange={(e) => onSeasonChange(e.target.value)}
            aria-label="Select season"
          >
            {SEASONS.map((s) => (
              <option key={s.id} value={s.id}>{s.id}</option>
            ))}
          </select>
        </div>
      </div>
      <SeasonAccent season={season} />
    </header>
  );
}

function SeasonAccent({ season }) {
  const map = {
    Spring: 'from-pink-100/90 via-rose-100/70 to-pink-200/60',
    Summer: 'from-yellow-100/90 via-orange-100/70 to-amber-200/60',
    Autumn: 'from-amber-100/90 via-red-100/70 to-orange-200/60',
    Winter: 'from-blue-100/90 via-sky-100/70 to-cyan-200/60',
  };
  return (
    <div aria-hidden className={`h-1 w-full bg-gradient-to-r ${map[season]}`} />
  );
}
