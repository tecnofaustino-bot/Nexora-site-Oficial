import React from 'react';
import { XCircle, CheckCircle2, Scale } from 'lucide-react';
import { COMPARISON_DATA } from '../data/landingData';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparacao" className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DFD4C4] dark:bg-[#282522] text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] mb-3">
            <Scale className="w-3.5 h-3.5 text-[#9A5A28]" />
            <span>Comparação Direta</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            A DIFERENÇA ESTÁ NA FORMA COMO TRANSFORMAS AS TUAS IDEIAS EM PROJETOS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Ter boas ideias é comum; o que separa um conceito de um negócio digital operacional é a clareza e eficiência do processo de desenvolvimento.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Sem uma plataforma organizada */}
          <div className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] p-7 sm:p-9 shadow-organic flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DFD4C4] dark:border-[#38332E]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C7369] dark:text-[#A89F92]">
                    Cenário Tradicional
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mt-1">
                    Sem Uma Plataforma Organizada
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF7F1] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#9A5A28]" />
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.without.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#3A3532] dark:text-[#DFD4C4]">
                    <span className="w-5 h-5 rounded-full bg-[#DFD4C4]/50 dark:bg-[#38332E] flex items-center justify-center shrink-0 mt-0.5 text-xs text-[#7C7369] dark:text-[#A89F92] font-mono">
                      ✕
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFD4C4]/60 dark:border-[#38332E]/60 text-xs text-[#7C7369] dark:text-[#A89F92]">
              Resulta frequentemente em projetos inacabados e dispersão de tempo.
            </div>
          </div>

          {/* Column 2: Com a Nexora */}
          <div className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border-2 border-[#4C5B3C] p-7 sm:p-9 shadow-organic-lg flex flex-col justify-between relative transition-colors">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-6 bg-[#4C5B3C] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-sm">
              Método Integrado
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DFD4C4] dark:border-[#38332E]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4C5B3C]">
                    Cenário Otimizado
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mt-1">
                    Com a Nexora
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F0E9DE] dark:bg-[#282522] border border-[#4C5B3C]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#4C5B3C]" />
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.withNexora.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#1B1917] dark:text-[#FAF7F1] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#4C5B3C] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFD4C4]/60 dark:border-[#38332E]/60 text-xs text-[#4C5B3C] font-medium">
              Vantagens práticas desenhadas para acelerar a execução real da tua ideia.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
