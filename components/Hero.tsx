import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-urban-texture px-4 pt-40 pb-32">
      {/* Background Glows - iOS 26 Depth - Blink Once animation */}
      <div className="absolute top-[-5%] left-[-10%] w-[150%] max-w-[1200px] aspect-square bg-white rounded-full filter blur-[150px] md:blur-[220px] animate-blink-once pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-[120%] max-w-[900px] aspect-square bg-[#34C759] rounded-full filter blur-[150px] md:blur-[220px] opacity-[0.06] pointer-events-none"></div>
      
      <div className="max-w-full mx-auto relative z-10 text-center flex flex-col items-center w-full overflow-hidden">
        {/* iOS style capsule badge */}
        <div className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-4 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-full text-white/40 text-[10px] md:text-[14px] font-black tracking-[0.4em] md:tracking-[0.7em] uppercase mb-16 animate-fade-in hover:bg-white/10 transition-all cursor-default scale-100 md:scale-110">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#34C759] shadow-[0_0_15px_#34C759]"></span>
          A Revolução da Arte Urbana • 2024
        </div>
        
        {/* Colossal Typography - Optimized for Mobile */}
        <h1 className="text-[16vw] sm:text-[18vw] md:text-[20rem] lg:text-[28rem] xl:text-[32rem] font-black mb-12 md:mb-16 tracking-tighter leading-[0.7] md:leading-[0.6] text-white uppercase drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] md:drop-shadow-[0_60px_60px_rgba(0,0,0,0.7)] animate-fade-in select-none w-full">
          ZECA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#8E8E93] to-transparent opacity-80">PICHOS</span>
        </h1>
        
        {/* Premium Subtitle */}
        <p className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-medium text-white/30 max-w-[95%] md:max-w-7xl mx-auto mb-16 md:mb-24 leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          “Transformando a cidade em tela. <br />
          <span className="text-white font-black italic mt-4 md:mt-8 block text-base md:text-4xl lg:text-5xl tracking-normal text-[#34C759]/80 uppercase">Físico & Digital.</span>”
        </p>
        
        {/* Gigantic Interactive Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-full md:max-w-6xl px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://wa.me/5511933548568" 
            target="_blank"
            className="w-full md:w-[450px] px-10 md:px-20 py-6 md:py-10 bg-[#34C759] text-black font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-lg rounded-[2rem] md:rounded-[3rem] hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(52,199,89,0.4)] text-center flex items-center justify-center gap-3 md:gap-4 group"
          >
            Quero Minha Arte
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="#sobre" 
            className="w-full md:w-[450px] px-10 md:px-20 py-6 md:py-10 glass border-white/20 text-white font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-lg rounded-[2rem] md:rounded-[3rem] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-500 text-center flex items-center justify-center gap-3 md:gap-4"
          >
            Sobre o Projeto
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 opacity-50 flex flex-col items-center gap-4 md:gap-6 group cursor-pointer animate-bounce" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] md:tracking-[1em] text-white/40 group-hover:text-[#34C759] transition-colors">Role</span>
        <div className="w-[2px] md:w-[3px] h-12 md:h-24 bg-gradient-to-b from-[#34C759] via-white/10 to-transparent rounded-full shadow-[0_0_15px_#34C759]"></div>
      </div>
    </div>
  );
};