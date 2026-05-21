'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SatelliteProjects from './components/SatelliteProjects';
import DocsList from './components/DocsList';
import Footer from './components/Footer';

interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export default function HomePage() {
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  const handleSelectRepo = (repo: Repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-4 space-y-5">
          <Hero />
          <div className="grid grid-cols-2 gap-5">
            <SatelliteProjects onSelectRepo={handleSelectRepo} selectedRepoName={selectedRepo?.name} />
            <DocsList />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}