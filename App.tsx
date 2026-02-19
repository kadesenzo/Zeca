
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { DigitalArt } from './components/DigitalArt';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { FloatingDonate } from './components/FloatingDonate';
import { WavySection } from './components/WavySection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#34C759] selection:text-black">
      <Header isScrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <WavySection color="rgba(52, 199, 89, 0.12)" />

        <section id="sobre" className="relative z-10 py-16">
          <About />
        </section>

        <section id="digital" className="bg-[#1C1C1E] rounded-t-[4rem] py-24 shadow-2xl">
          <DigitalArt />
        </section>

        <WavySection color="rgba(52, 199, 89, 0.08)" flip />

        <section id="impacto" className="py-24">
          <Impact />
        </section>

        <section id="apoio" className="bg-[#1C1C1E] rounded-t-[4rem] py-24 shadow-2xl">
          <Donation />
        </section>
      </main>

      <Footer />
      <FloatingDonate />
    </div>
  );
};

export default App;
