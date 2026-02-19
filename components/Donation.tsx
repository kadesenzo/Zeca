
import React, { useState } from 'react';

export const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const goals = { target: 1000, current: 620 };
  const progress = (goals.current / goals.target) * 100;
  const presets = [10, 25, 50];
  const supporters = ['Carlos M.', 'Ana Paula', 'StreetCrewBR', 'Juliana S.', 'Pedro V.'];

  return (
    <div className="py-24 container mx-auto px-6 flex justify-center">
      <div className="max-w-5xl w-full glass rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border-white/5">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white filter blur-[120px] opacity-[0.04]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h4 className="text-[#34C759] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Financiamento Coletivo</h4>
            <h2 className="text-5xl font-black mb-10 leading-[1] tracking-tighter">APOIE A <br /><span className="text-white/20">CULTURA URBANA</span></h2>
            <p className="text-white/50 mb-12 text-lg font-medium leading-relaxed tracking-tight">
              Apoie a manutenção dos materiais e oficinas. Sua ajuda gera oportunidades reais para novos artistas.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Meta Mensal</span>
                <span className="text-2xl font-black text-white">{Math.round(progress)}%</span>
              </div>
              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <h4 className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">Últimos Apoiadores</h4>
              <div className="flex flex-wrap gap-3">
                {supporters.map((s, i) => (
                  <span key={i} className="text-[10px] font-black bg-white/5 px-5 py-2.5 rounded-full text-white/50 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-10 rounded-[3.5rem] border border-white/10 flex flex-col justify-between shadow-inner max-w-md mx-auto w-full">
            <div>
              <h3 className="text-[10px] font-black mb-10 text-center uppercase tracking-[0.5em] text-white/40">Valor da Doação</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {presets.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`py-5 rounded-[1.5rem] font-black transition-all duration-300 text-sm ${
                      selectedAmount === amt 
                        ? 'bg-white text-black scale-105 shadow-xl' 
                        : 'bg-white/5 text-white/40 hover:text-white border border-white/5'
                    }`}
                  >
                    R$ {amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Valor Personalizado"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] py-5 px-8 text-center text-white font-black text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-white/10"
              />
            </div>

            <button className="w-full bg-white hover:bg-[#E5E5EA] text-black font-black py-5 rounded-[1.5rem] mt-8 transition-all duration-500 uppercase tracking-[0.3em] text-xs shadow-xl">
              Gerar PIX
            </button>
            
            <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] mt-6 text-center">
              Seguro • Direto • Transparente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
