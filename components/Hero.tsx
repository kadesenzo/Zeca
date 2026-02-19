
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-urban-texture px-6 py-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white rounded-full filter blur-[160px] opacity-[0.04]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#34C759] rounded-full filter blur-[160px] opacity-[0.06]"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Floating Badge */}
        <div className="inline-block px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white/40 text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase mb-12 animate-fade-in">
          Digital Urban Culture • Est. 2024
        </div>
        
        {/* Massive Title */}
        <h1 className="text-7xl sm:text-9xl md:text-[16rem] lg:text-[22rem] font-black mb-10 tracking-tighter leading-[0.7] text-white uppercase drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.02]">
          ZECA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#A1A1AA] to-white/5">PICHOS</span>
        </h1>
        
        {/* Subtitle / Impact Phrase */}
        <p className="text-xl md:text-3xl font-medium text-white/40 max-w-3xl mx-auto mb-16 leading-tight tracking-tight px-4">
          “Transformando muros em mensagens. <br />
          <span className="text-white/80 italic font-normal mt-4 block text-2xl md:text-4xl">Sua identidade em estilo urbano, físico ou digital.</span>”
        </p>
        
        {/* Enlarged Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-2xl">
          <a 
            href="#sobre" 
            className="w-full sm:w-[300px] px-12 py-7 bg-white text-black font-black uppercase tracking-[0.25em] text-xs md:text-sm rounded-3xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(255,255,255,0.3)] text-center"
          >
            Explorar Estúdio
          </a>
          <a 
            href="#digital" 
            className="w-full sm:w-[300px] px-12 py-7 glass border-white/10 text-white font-black uppercase tracking-[0.25em] text-xs md:text-sm rounded-3xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Quero Minha Arte
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 hidden md:flex flex-col items-center gap-4 group cursor-pointer" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white group-hover:text-[#34C759] transition-colors">Role para Baixo</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white via-white/50 to-transparent group-hover:from-[#34C759] transition-all duration-500"></div>
      </div>
    </div>
  );
};
