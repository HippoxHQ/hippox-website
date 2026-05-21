'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import StatsChart from './components/StatsChart';
import SatelliteProjects from './components/SatelliteProjects';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-4 space-y-5">
          <Hero />
          <div className="grid grid-cols-2 gap-5">
            <StatsChart />
            <SatelliteProjects />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}