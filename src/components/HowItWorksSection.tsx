import React from 'react';
import { ArrowRight, Lightbulb, Wrench, Rocket } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, OFFICIAL_CHECKOUT_URL } from '../data/landingData';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <Lightbulb className="w-6 h-6 text-[#9A5A28]" />,
    <Wrench className="w-6 h-6 text-[#9A5A28]" />,
    <Rocket className="w-6 h-6 text-[#9A5A28]" />
  ];

  return (
    <section id="passos" className="py-16 sm:py-24 bg-[#FAF7F1] dark:bg-[#121110] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] bg-[#F0E9DE] dark:bg-[#282522] dark:text-[#A8C78A] px-3 py-1 rounded-md">
            Passo a Passo
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            DA IDEIA À CRIAÇÃO. COMEÇA COM TRÊS PASSOS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Um caminho simples, transparente e orientado a resultados práticos para colocares o teu projeto em marcha.
          </p>
        </div>

        {/* 3 Steps Animated Line & Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-2xl bg-[#F0E9DE] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] p-7 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F1] dark:bg-[#24211E] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-center shadow-xs">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#1B1917]/30 dark:text-[#FAF7F1]/20">
                    {step.step}
                  </span>
                </div>

                <div className="text-xs font-bold tracking-wider uppercase text-[#9A5A28] mb-1">
                  Passo {idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFD4C4]/60 dark:border-[#38332E]/60 text-xs text-[#7C7369] dark:text-[#A89F92]">
                Fase {idx + 1} de 3
              </div>
            </div>
          ))}
        </div>

        {/* Intermediate Action Callout */}
        <div className="mt-14 text-center">
          <a
            href={OFFICIAL_CHECKOUT_URL}
            className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] rounded-lg bg-[#9A5A28] hover:bg-[#834b20] text-white font-semibold text-base sm:text-[17px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-[#4C5B3C] text-center whitespace-nowrap gap-2"
          >
            <span>QUERO DAR O PRIMEIRO PASSO</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-[#7C7369] dark:text-[#A89F92]">
            Acesso imediato às ferramentas de criação via checkout seguro
          </p>
        </div>
      </div>
    </section>
  );
};
