
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.me/5511933548568";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div className={`container mx-auto transition-all duration-500 ease-out flex justify-between items-center ${
        isScrolled 
          ? 'max-w-4xl bg-[#1C1C1E]/70 backdrop-blur-3xl py-3 px-8 rounded-full border border-white/10 shadow-2xl' 
          : 'max-w-7xl bg-transparent py-4 px-6'
      }`}>
        <div className="text-xl font-extrabold urban-font tracking-tight flex items-center gap-2">
          ZECA<span className="text-white/30">PICHOS</span>
        </div>
        
        <nav className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#digital" className="hover:text-white transition-colors">Digital</a>
          <a href="#impacto" className="hover:text-white transition-colors">Impacto</a>
          <a href="#apoio" className="hover:text-white transition-colors">Apoiar</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#apoio"
            className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] hover:bg-[#E5E5EA] transition-all shadow-lg"
          >
            Apoiar Projeto
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 glass rounded-full hover:bg-white/10 transition-all border-white/10"
          >
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-12 text-center p-10">
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-4xl font-black urban-font hover:text-[#34C759] transition-colors">Sobre</a>
          <a href="#digital" onClick={() => setIsOpen(false)} className="text-4xl font-black urban-font hover:text-[#34C759] transition-colors">Digital</a>
          <a href="#impacto" onClick={() => setIsOpen(false)} className="text-4xl font-black urban-font hover:text-[#34C759] transition-colors">Impacto</a>
          <a href="#apoio" onClick={() => setIsOpen(false)} className="text-4xl font-black urban-font hover:text-[#34C759] transition-colors text-[#34C759]">Apoiar</a>
          <a href={whatsappLink} target="_blank" onClick={() => setIsOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white/30">WhatsApp</a>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-12 w-16 h-16 rounded-full glass border-white/20 flex items-center justify-center text-white/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
