import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Impact } from './components/Impact.tsx';
import { DigitalArt } from './components/DigitalArt.tsx';
import { Donation } from './components/Donation.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { WavySection } from './components/WavySection.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#34C759] selection:text-black overflow-x-hidden">
      <Header isScrolled={scrolled} />
      
      <main className="overflow-x-hidden">
        <section id="hero" className="relative overflow-hidden">
          <Hero />
          {/* Circular Wave Transition at the bottom of Hero */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
            <WavySection color="#34C759" opacity={0.15} />
          </div>
        </section>

        <section id="sobre" className="relative z-10 pt-20 overflow-hidden">
          <About />
        </section>

        <section id="digital" className="bg-[#1C1C1E] rounded-t-[3rem] md:rounded-t-[5rem] py-32 shadow-2xl relative z-20 mt-[-2rem] overflow-hidden">
           <div className="absolute top-0 left-0 w-full rotate-180 opacity-50">
            <WavySection color="#34C759" opacity={0.1} />
          </div>
          <DigitalArt />
        </section>

        <section id="impacto" className="py-32 relative overflow-hidden">
          <Impact />
        </section>

        <section id="apoio" className="bg-[#1C1C1E] rounded-t-[3rem] md:rounded-t-[5rem] py-32 shadow-2xl relative z-20 mt-[-5rem] overflow-hidden">
          <Donation />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;