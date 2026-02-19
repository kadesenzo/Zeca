
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold urban-font tracking-tighter mb-2">
              ZECA<span className="text-white/30 ml-1">PICHOS</span>
            </div>
            <p className="text-sm text-white/20 uppercase tracking-widest font-semibold">
              Arte Urbana • Cultura • Impacto
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center hover:bg-white hover:text-black transition-all text-white border border-white/5">
               <span className="sr-only">Instagram</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center hover:bg-white hover:text-black transition-all text-white border border-white/5">
               <span className="sr-only">TikTok</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.14-1.35 1.98-.19.99.13 2.04.83 2.75.46.46 1.07.75 1.71.84.9.15 1.84-.04 2.59-.57.8-.52 1.26-1.43 1.3-2.39.04-3.52.02-7.05.02-10.57z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-white/10 uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} ZECA PICHOS. Arte Urbana de Alto Impacto.
        </div>
      </div>
    </footer>
  );
};
