import React from 'react';
import { Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_OPPORTUNITIES } from '../data/landingData';

export const BusinessOpportunitySection: React.FC = () => {
  return (
    <section id="oportunidades" className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] dark:text-[#A8C78A] bg-[#FAF7F1] dark:bg-[#282522] px-3 py-1 rounded-md border border-[#DFD4C4] dark:border-[#38332E]">
            Visão de Futuro
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            IMAGINA TERES UM PRODUTO DIGITAL CRIADO POR TI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Em vez de apenas consumires ferramentas e produtos digitais desenvolvidos por terceiros, podes posicionar-te como produtor e desenvolvedor das tuas próprias soluções.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#7C7369] dark:text-[#A89F92] leading-relaxed">
            Podes criar uma aplicação que resolva determinado problema prático, desenvolver um produto específico para o teu nicho ou construir páginas de vendas para comercializar aquilo que criaste.
          </p>
        </div>

        {/* 6 Opportunities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OPPORTUNITIES.map((opp, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] p-6 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F0E9DE] dark:bg-[#282522] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#4C5B3C]" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium text-[#7C7369] dark:text-[#A89F92]">
                  Oportunidade 0{idx + 1}
                </span>
                <p className="font-serif text-base font-semibold text-[#1B1917] dark:text-[#FAF7F1] mt-1 leading-snug">
                  {opp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Phrase Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#1B1917] dark:bg-[#121110] border border-transparent dark:border-[#38332E] text-white shadow-organic-lg text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B8763C]">
              Visão Estratégica
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-balance">
              "O teu conhecimento pode transformar-se numa solução. A tua solução pode transformar-se num produto. E o teu produto pode tornar-se uma oportunidade de negócio."
            </p>
            <div className="pt-2 text-xs text-[#FAF7F1]/60">
              NEXORA — CRIE. PUBLIQUE. CRESÇA.
            </div>
          </div>
        </div>

        {/* Credibility & Transparency Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] text-xs text-[#7C7369] dark:text-[#A89F92] leading-relaxed max-w-3xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#9A5A28] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1B1917] dark:text-[#FAF7F1] font-semibold">Aviso de Credibilidade e Transparência: </strong>
            A Nexora disponibiliza ferramentas e suporte técnico para criação. Os resultados comerciais dependem de fatores como a qualidade da tua oferta, a procura real do mercado, a estratégia de divulgação e a tua dedicação. Não existem rendimentos garantidos ou milagres automáticos.
          </div>
        </div>
      </div>
    </section>
  );
};
