import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Hammer, Send, TrendingUp } from 'lucide-react';
import { SOLUTION_PILLARS, OFFICIAL_CHECKOUT_URL } from '../data/landingData';

export const SolutionSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillarIcons = [
    <Hammer className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />,
    <Send className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />,
    <TrendingUp className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />
  ];

  return (
    <section id="solucao" className="py-16 sm:py-24 bg-[#FAF7F1] dark:bg-[#121110] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] bg-[#F0E9DE] dark:bg-[#1B1917] px-3 py-1 rounded-md border border-[#DFD4C4]/60 dark:border-[#38332E]">
            Ecossistema Completo
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            CONHECE A NEXORA: O TEU ESPAÇO PARA CRIAR, DESENVOLVER E CRESCER NO DIGITAL.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            A Nexora foi pensada para simplificar o processo de criação digital. Reúne ferramentas e recursos que ajudam a transformar uma ideia inicial num projeto estruturado, desde a definição do produto até à criação de aplicações e páginas de vendas.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#7C7369] dark:text-[#A89F92]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C5B3C]"></span>
              Para quem está a começar: processo guiado passo a passo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C5B3C]"></span>
              Para criadores com experiência: velocidade e autonomia
            </span>
          </div>
        </div>

        {/* 3 Interactive Pillars + Visual Spotlight */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3 Pillars Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {SOLUTION_PILLARS.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#F0E9DE] dark:bg-[#24211E] border-[#DFD4C4] dark:border-[#38332E] shadow-organic'
                      : 'bg-[#FAF7F1] dark:bg-[#1B1917] border-[#DFD4C4]/60 dark:border-[#2E2A27] hover:bg-[#F0E9DE]/50 dark:hover:bg-[#221F1C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#FAF7F1] dark:bg-[#1B1917] flex items-center justify-center border border-[#DFD4C4] dark:border-[#38332E]">
                        {pillarIcons[idx]}
                      </div>
                      <span className="font-serif font-bold text-sm tracking-wider uppercase text-[#1B1917] dark:text-[#FAF7F1]">
                        {pillar.label}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="text-xs font-semibold text-[#4C5B3C] bg-[#FAF7F1] dark:bg-[#1B1917] px-2 py-0.5 rounded border border-[#DFD4C4] dark:border-[#38332E]">
                        Ativo
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B1917] dark:text-[#FAF7F1] mt-2">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Rich Visual Showcase with User Uploaded Nexora Orbit Artwork */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DFD4C4] dark:border-[#2E2A27] bg-[#F0E9DE] dark:bg-[#1B1917] p-4 sm:p-6 shadow-organic-lg relative overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#1B1917] shadow-inner group">
                <img
                  src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
                  alt="Nexora — Inovação em Órbita: Crie. Publique. Evolua."
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Active Pillar Information Strip */}
              <div className="mt-4 p-4 rounded-xl bg-[#FAF7F1] dark:bg-[#24211E] border border-[#DFD4C4] dark:border-[#38332E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9A5A28] dark:text-[#B8763C] font-semibold">
                    Etapa Ativa: {SOLUTION_PILLARS[activePillar].label}
                  </span>
                  <div className="font-serif text-sm font-bold text-[#1B1917] dark:text-[#FAF7F1] mt-0.5">
                    {SOLUTION_PILLARS[activePillar].title}
                  </div>
                  <div className="text-[11px] text-[#7C7369] dark:text-[#A89F92] mt-0.5">
                    {SOLUTION_PILLARS[activePillar].description}
                  </div>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#4C5B3C]/10 text-[#4C5B3C] font-semibold text-[11px] border border-[#4C5B3C]/20">
                  ● Pronto a operar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
