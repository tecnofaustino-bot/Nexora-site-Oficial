import React, { useState, useEffect } from 'react';
import { Rocket, ShieldCheck } from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';

export const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after first scroll (e.g. 280px down)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F1]/95 dark:bg-[#121110]/95 backdrop-blur-md border-t border-[#DFD4C4] dark:border-[#2E2A27] px-4 py-3 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] shrink-0 p-0.5">
            <img
              src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
              alt="Nexora"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-sm text-[#1B1917] dark:text-[#FAF7F1] truncate">
              Nexora SaaS
            </div>
            <div className="text-[10px] text-[#4C5B3C] dark:text-[#A8C78A] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C5B3C] dark:bg-[#A8C78A]"></span>
              <span>Acesso Oficial Imediato</span>
            </div>
          </div>
        </div>

        <a
          href={OFFICIAL_CHECKOUT_URL}
          className="px-5 py-2.5 rounded-lg bg-[#9A5A28] hover:bg-[#834b20] text-white font-semibold text-xs sm:text-sm whitespace-nowrap shadow-sm shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#4C5B3C]"
        >
          <span>Quero Começar</span>
          <Rocket className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
