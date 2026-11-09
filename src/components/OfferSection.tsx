import React from 'react';
import { ShieldCheck, Lock, ExternalLink, CheckCircle } from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#FAF7F1] dark:bg-[#221F1C] border-2 border-[#DFD4C4] dark:border-[#38332E] p-8 sm:p-12 shadow-organic-lg text-center relative overflow-hidden transition-colors">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#E8D3BC]/40 dark:bg-[#9A5A28]/20 rounded-full blur-2xl pointer-events-none"></div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] dark:text-[#A8C78A] bg-[#F0E9DE] dark:bg-[#282522] px-3.5 py-1.5 rounded-md inline-block">
            Acesso Oficial à Plataforma
          </span>

          <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            ESTÁ NA HORA DE COMEÇARES A DESENVOLVER AS TUAS PRÓPRIAS IDEIAS.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed max-w-2xl mx-auto">
            A Nexora coloca à tua disposição um conjunto de ferramentas para começares a explorar a criação de produtos digitais, aplicações e páginas de vendas. Não fiques apenas a imaginar aquilo que poderias construir.
          </p>

          <p className="mt-2 text-sm text-[#7C7369] dark:text-[#A89F92] max-w-xl mx-auto">
            Conhece a plataforma e consulta as condições e detalhes de acesso diretamente na página segura de pagamento.
          </p>

          {/* Primary CTA Button (Madeira-600) */}
          <div className="mt-8 flex flex-col items-center">
            <a
              href={OFFICIAL_CHECKOUT_URL}
              className="inline-flex items-center justify-center px-10 py-4 min-h-[56px] rounded-lg bg-[#9A5A28] hover:bg-[#834b20] text-white font-semibold text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-[#4C5B3C] text-center whitespace-nowrap gap-2 w-full sm:w-auto"
            >
              <span>🚀 QUERO ACEDER À NEXORA</span>
            </a>

            {/* Trust Elements below button */}
            <div className="mt-6 pt-6 border-t border-[#DFD4C4] dark:border-[#38332E] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#4C5B3C] dark:text-[#A8C78A] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3A3532] dark:text-[#DFD4C4] leading-snug">
                  Acesso através da plataforma de pagamento oficial Tutora Pay
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#4C5B3C] dark:text-[#A8C78A] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3A3532] dark:text-[#DFD4C4] leading-snug">
                  Consulta das condições e termos apresentados no checkout
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#4C5B3C] dark:text-[#A8C78A] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3A3532] dark:text-[#DFD4C4] leading-snug">
                  Informações transparentes sobre o acesso antes de concluir a compra
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
