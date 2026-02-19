
import React from 'react';

export const About: React.FC = () => {
  const values = [
    { name: 'Criatividade', color: 'bg-[#8E8E93]' },
    { name: 'Cultura', color: 'bg-white text-black' },
    { name: 'Comunidade', color: 'bg-[#34C759] text-black' },
    { name: 'Impacto', color: 'bg-[#2C2C2E]' }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-6 text-center md:text-left">
          <h4 className="text-[#34C759] font-black uppercase tracking-[0.5em] text-[10px]">Identidade Urbana Premium</h4>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            O MANIFESTO DO <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8E8E93] to-white/20">ZECA PICHOS</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <p className="text-2xl leading-snug text-white/60 font-medium tracking-tight">
            Zeca Pichos é a intersecção entre a estética urbana e o impacto social. Transformamos a arquitetura fria das cidades em galerias vivas que narram histórias de resistência, cultura e renovação.
          </p>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 group transition-all">
              <h3 className="text-white text-2xl font-black mb-4 urban-font tracking-wide">Visão Social</h3>
              <p className="text-base text-white/30 leading-relaxed font-medium">
                Democratizar o acesso à arte contemporânea, ocupando o espaço público com mensagens que provocam reflexão e geram pertencimento em comunidades periféricas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              {values.map((v) => (
                <span key={v.name} className={`${v.color} font-black px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform cursor-default`}>
                  {v.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Abstract Typographic Element instead of images */}
        <div className="pt-20 flex justify-center opacity-5 select-none pointer-events-none">
          <div className="text-[20rem] font-black leading-none tracking-tighter urban-font">ARTISTA</div>
        </div>
      </div>
    </div>
  );
};
