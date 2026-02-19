
import React from 'react';

const ImpactCard: React.FC<{ icon: string; title: string; desc: string; color: string; iconColor: string }> = ({ icon, title, desc, color, iconColor }) => (
  <div className="group glass p-10 rounded-[3rem] hover:bg-white/5 transition-all duration-700 border border-white/5 flex flex-col items-center text-center">
    <div className={`w-24 h-24 ${color} rounded-[2rem] flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 shadow-inner`}>
      <span className={`text-5xl ${iconColor} transition-all`}>{icon}</span>
    </div>
    <h3 className="text-2xl font-black mb-4 urban-font tracking-wide text-white group-hover:text-[#34C759] transition-colors">{title}</h3>
    <p className="text-base text-white/40 leading-relaxed font-medium tracking-tight">{desc}</p>
  </div>
);

export const Impact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h4 className="text-[#34C759] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Propósito Real</h4>
        <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">Impacto <span className="text-white/10">Social</span></h2>
        <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium leading-relaxed tracking-tight italic">
          O grafite é nossa ferramenta de diálogo. Regeneramos tecidos sociais através da expressão e do engajamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <ImpactCard 
          icon="🎨" 
          title="Arte Pura" 
          desc="Transformamos o cinza em narrativas visuais potentes."
          color="bg-pink-500/5"
          iconColor="drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
        />
        <ImpactCard 
          icon="🤝" 
          title="União" 
          desc="Engajamos a juventude local em projetos coletivos."
          color="bg-[#34C759]/5"
          iconColor="drop-shadow-[0_0_10px_rgba(52,199,89,0.5)]"
        />
        <ImpactCard 
          icon="🔥" 
          title="Atitude" 
          desc="Provocamos mudanças reais através da cultura urbana."
          color="bg-yellow-500/5"
          iconColor="drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
        />
        <ImpactCard 
          icon="🏙️" 
          title="Espaço" 
          desc="Damos nova vida a monumentos e locais esquecidos."
          color="bg-blue-500/5"
          iconColor="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        />
      </div>
    </div>
  );
};
