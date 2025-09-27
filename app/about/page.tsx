'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';
import MissionSection from './MissionSection';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}