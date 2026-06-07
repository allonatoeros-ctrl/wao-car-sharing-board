import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyBoard from './components/WhyBoard';
import HowItWorks from './components/HowItWorks';
import RideTypeCards from './components/RideTypeCards';
import BoardPreview from './components/BoardPreview';
import SafetySection from './components/SafetySection';
import CommunitySection from './components/CommunitySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <WhyBoard />
        <HowItWorks />
        <RideTypeCards />
        <BoardPreview />
        <SafetySection />
        <CommunitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
