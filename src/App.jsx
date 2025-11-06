import React, { useMemo, useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import DestinationSection from './components/DestinationSection';
import BookingForm from './components/BookingForm';
import FooterScene from './components/FooterScene';

const DATA = {
  destinations: [
    {
      name: 'Tokyo',
      scenes: [
        'Animated crossing at Shibuya with flashing neon signs and moving crowds',
        'Skytree and Tokyo Tower parallax, Asakusa temple with lanterns fading in',
      ],
      blurb: 'Where the future meets centuries-old shrines and dazzling city lights.',
    },
    {
      name: 'Kyoto',
      scenes: [
        'Fushimi Inari’s red torii gates in parallax as background layers',
        'Golden Pavilion on a reflective pond with cherry blossoms falling on scroll',
      ],
      blurb: 'Serene temples, magical gardens, and poetic cherry blossoms await.',
    },
    {
      name: 'Osaka',
      scenes: [
        'Dotonbori’s animated street food stands and neon billboards',
        'Osaka Castle surrounded by drifting blossom petals',
      ],
      blurb: 'The nation’s kitchen, full of colorful life and dynamic street culture.',
    },
    {
      name: 'Hiroshima',
      scenes: [
        'Peace Park with serene transitions and animated white cranes',
        'Floating torii of Miyajima shifting gently with water ripples',
      ],
      blurb: 'Peace, remembrance, and hope floating on scenic waters.',
    },
    {
      name: 'Nara',
      scenes: [
        'Todai-ji temple, interactive deer walk as you scroll',
        'Ancient forest paths with lanterns activating with mouse movement',
      ],
      blurb: 'Gentle deer, lantern-lit forests, and ancient Buddhist wonders.',
    },
    {
      name: 'Mount Fuji',
      scenes: [
        'Dynamic shifts between snow, spring blossom and autumn leaves depending on scroll position',
        'Foreground hikers, distant clouds, and animated panorama',
      ],
      blurb: 'Japan’s most iconic landscape with views that change by season.',
    },
  ],
};

export default function App() {
  const [season, setSeason] = useState('Spring');

  const onCTA = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const accent = useMemo(() => {
    switch (season) {
      case 'Spring':
        return 'from-[#F7C9A9] via-pink-100 to-white';
      case 'Summer':
        return 'from-yellow-100 via-amber-100 to-white';
      case 'Autumn':
        return 'from-amber-100 via-red-50 to-white';
      case 'Winter':
        return 'from-sky-50 via-blue-50 to-white';
      default:
        return 'from-white to-white';
    }
  }, [season]);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${accent} text-gray-900`}>      
      <TopBar season={season} onSeasonChange={setSeason} />
      <main>
        <Hero onCTA={onCTA} />

        {DATA.destinations.map((d, i) => (
          <DestinationSection key={d.name} name={d.name} blurb={d.blurb} scenes={d.scenes} index={i + 1} />
        ))}

        <div id="booking">
          <BookingForm />
        </div>
      </main>
      <FooterScene />
    </div>
  );
}
