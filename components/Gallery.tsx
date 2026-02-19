
import React from 'react';

export const Gallery: React.FC = () => {
  const items = [
    { title: 'Cidade Viva', code: 'ZP-01' },
    { title: 'Voz do Muro', code: 'ZP-02' },
    { title: 'Cores Urbanas', code: 'ZP-03' },
    { title: 'Grito Visual', code: 'ZP-04' },
    { title: 'Ritmo da Rua', code: 'ZP-05' },
    { title: 'Identidade', code: 'ZP-06' },
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h4 className="text-white/30 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Exposição Permanente</h4>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">ARTE NAS <span className="text-white/20">RUAS</span></h2>
        </div>
        <p className="text-white/40 italic max-w-sm text-right text-sm">
          Cada mural é um diálogo com a arquitetura urbana e o movimento social.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-black border border-white/5">
            {/* Abstract Placeholder with Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E] to-black group-hover:from-[#2C2C2E] group-hover:to-[#111111] transition-all duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border border-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-all duration-700 urban-font">{item.code}</span>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10"></div>
               </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
              <h3 className="text-3xl font-black urban-font text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {item.title}
              </h3>
              <div className="w-10 h-1 bg-[#34C759] mt-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200"></div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em] mt-4">Mural de Impacto Social</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
