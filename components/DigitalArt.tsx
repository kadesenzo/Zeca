
import React from 'react';

const ProductCard: React.FC<{ title: string; items: string[]; icon: string; color: string }> = ({ title, items, icon, color }) => (
  <div className="group glass p-8 rounded-[3.5rem] hover:bg-white/5 transition-all duration-500 border border-white/5 flex flex-col h-full items-center text-center">
    <div className={`w-20 h-20 ${color} rounded-[2rem] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
      <span className="text-4xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-black mb-6 urban-font tracking-wide text-white">{title}</h3>
    <ul className="space-y-4 mb-10 flex-grow">
      {items.map((item, i) => (
        <li key={i} className="text-xs text-white/40 flex items-center justify-center gap-2 font-medium tracking-tight">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] opacity-50"></div>
          {item}
        </li>
      ))}
    </ul>
    <div className="pt-8 border-t border-white/5 w-full flex justify-center">
      <a 
        href="https://wa.me/5511933548568" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all"
      >
        Consultar Venda
      </a>
    </div>
  </div>
);

export const DigitalArt: React.FC = () => {
  const whatsappLink = "https://wa.me/5511933548568?text=Olá! Quero uma arte personalizada do Zeca Pichos.";

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h4 className="text-[#34C759] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Manifesto Cibernético</h4>
        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">Arte Urbana <span className="text-white/20">Digital</span></h2>
        <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed tracking-tight mb-6">
          O asfalto encontra o silício. Transformamos a estética das ruas em identidades digitais personalizadas para o mundo virtual.
        </p>
        <div className="inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
          <p className="text-[#34C759] font-black uppercase tracking-[0.2em] text-xs">
            🎨 Vendas personalizadas de grafite (Físico & Digital)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <ProductCard 
          icon="✨" 
          title="Grafite Custom" 
          items={['Arte 100% Exclusiva', 'Formatos para Web/Impresão', 'Estilo Signature Zeca', 'Suporte Especializado']}
          color="bg-purple-500/10"
        />
        <ProductCard 
          icon="🌐" 
          title="Social ID Street" 
          items={['Packs para Streamers', 'Banners Urbanos', 'Avatar Ilustrado', 'Cores Neon Personalizadas']}
          color="bg-blue-500/10"
        />
        <ProductCard 
          icon="🖌️" 
          title="Encomendas" 
          items={['Telas por Encomenda', 'Murais Digitais', 'NFT Collections', 'Merchandising Arte']}
          color="bg-green-500/10"
        />
      </div>

      <div className="mt-24 text-center">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-6 bg-[#34C759] text-black rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-[0_20px_60px_rgba(52,199,89,0.3)]"
        >
          Quero Minha Arte
        </a>
        <p className="mt-8 text-white/20 font-black text-[10px] uppercase tracking-[0.5em]">
          Entre em contato direto pelo WhatsApp: 11 93354-8568
        </p>
      </div>
    </div>
  );
};
