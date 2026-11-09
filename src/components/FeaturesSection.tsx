import React from 'react';
import {
  Smartphone,
  Compass,
  LayoutTemplate,
  ShoppingBag,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { FEATURES } from '../data/landingData';

export const FeaturesSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Smartphone className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 2:
        return <LayoutTemplate className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 3:
        return <Layers className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 4:
        return <ShoppingBag className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 5:
      default:
        return <Sparkles className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
    }
  };

  return (
    <section id="funcionalidades" className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] bg-[#FAF7F1] dark:bg-[#221F1C] px-3 py-1 rounded-md border border-[#DFD4C4] dark:border-[#38332E]">
            Recursos da Plataforma
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            TUDO COMEÇA COM UMA IDEIA. A NEXORA AJUDA-TE A DESENVOLVÊ-LA.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Desenvolvido para proporcionar clareza e agilidade. Cada funcionalidade foi desenhada para resolver gargalos práticos no processo de criação digital.
          </p>
        </div>

        {/* 6 Cards Grid (Bento style 3x2) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] p-6 sm:p-7 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0E9DE] dark:bg-[#2A2623] flex items-center justify-center border border-[#DFD4C4] dark:border-[#38332E]">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#7C7369] dark:text-[#A89F92]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed mb-5">
                  {feature.description}
                </p>
              </div>

              {/* Highlights with Olive Checkmarks (#4C5B3C) */}
              <div className="pt-4 border-t border-[#DFD4C4]/60 dark:border-[#38332E] space-y-2">
                {feature.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[#3A3532] dark:text-[#DFD4C4]">
                    <CheckCircle2 className="w-4 h-4 text-[#4C5B3C] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Note as defined in PRD */}
        <div className="mt-10 p-4 rounded-xl bg-[#FAF7F1]/80 dark:bg-[#221F1C]/80 border border-[#DFD4C4] dark:border-[#38332E] text-xs text-[#7C7369] dark:text-[#A89F92] text-center max-w-2xl mx-auto">
          Disponibilidade de suporte para aplicações Web, Android, iOS e Windows e integrações avançadas estruturadas de acordo com o plano ativo na versão comercial da Nexora.
        </div>
      </div>
    </section>
  );
};
