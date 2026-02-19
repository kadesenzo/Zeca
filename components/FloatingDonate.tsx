
import React from 'react';

export const FloatingDonate: React.FC = () => {
  return (
    <a 
      href="#apoio" 
      className="fixed bottom-10 right-10 z-40 bg-white text-black p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-500 active:scale-95 group flex items-center gap-3 overflow-hidden max-w-[64px] hover:max-w-[240px]"
    >
      <div className="min-w-[24px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <span className="font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pr-2 uppercase text-[11px] tracking-[0.2em]">
        Investir na Arte
      </span>
    </a>
  );
};
