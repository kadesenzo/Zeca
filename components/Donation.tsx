import React from 'react';

export const Donation: React.FC = () => {
  const whatsappLink = "https://wa.me/5511933548568?text=Olá! Gostaria de apoiar o projeto Zeca Pichos.";

  return (
    <div className="py-24 container mx-auto px-6 flex justify-center">
      <div className="max-w-5xl w-full glass rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border-white/5">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#34C759] filter blur-[120px] opacity-[0.08]"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h4 className="text-[#34C759] font-black uppercase tracking-[0.5em] text-[10px] mb-8">Investimento Cultural</h4>
          <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter">APOIE A <br /><span className="text-white/20">NOSSA MISSÃO</span></h2>
          
          <p className="text-white/50 mb-16 text-xl md:text-2xl font-medium leading-relaxed tracking-tight max-w-3xl">
            Sua contribuição mantém nossas latas cheias e nossas oficinas ativas. Transforme a realidade urbana conosco através do apoio direto.
          </p>

          <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center shadow-inner">
            <div className="w-24 h-24 bg-[#34C759]/10 rounded-full flex items-center justify-center mb-8 border border-[#34C759]/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#34C759]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-3xl font-black mb-4 urban-font">Apoio via WhatsApp</h3>
            <p className="text-white/40 mb-12 text-sm uppercase tracking-widest font-bold">Consulte como contribuir e receber recompensas exclusivas</p>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-[#34C759] hover:text-black text-black font-black py-8 rounded-[2rem] transition-all duration-500 uppercase tracking-[0.4em] text-sm shadow-[0_20px_60px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4"
            >
              Falar com a Equipe
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mt-8">
              Sua contribuição muda o cenário das ruas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};