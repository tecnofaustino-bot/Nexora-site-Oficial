import React from 'react';
import { Code, Layout, TrendingUp, Layers, HelpCircle } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Code className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
      case 'layers':
      default:
        return <Layers className="w-5 h-5 text-[#9A5A28] dark:text-[#B8763C]" />;
    }
  };

  return (
    <section id="problema" className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DFD4C4] dark:bg-[#282522] text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#9A5A28] dark:text-[#B8763C]" />
            <span>O Ponto de Partida</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            TENS IDEIAS, MAS AINDA NÃO CONSEGUISTE TRANSFORMÁ-LAS EM REALIDADE?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Muitas pessoas têm ideias de aplicações, ferramentas digitais, plataformas ou negócios online. O problema é que, muitas vezes, não sabem por onde começar.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#7C7369] dark:text-[#A89F92] leading-relaxed">
            Outras encontram dificuldades para desenvolver os seus projetos, criar uma apresentação profissional ou construir uma página capaz de apresentar e comercializar aquilo que desenvolveram. E existe ainda quem tenha conhecimentos e boas ideias, mas perca demasiado tempo a trabalhar com várias ferramentas diferentes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] p-6 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0E9DE] dark:bg-[#2A2623] flex items-center justify-center border border-[#DFD4C4] dark:border-[#38332E]">
                    {getIcon(card.icon)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#7C7369] dark:text-[#A89F92]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B1917] dark:text-[#FAF7F1] mb-2">
                  {card.question}
                </h3>
                <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DFD4C4]/60 dark:border-[#38332E] text-[11px] font-medium text-[#7C7369] dark:text-[#A89F92]">
                Desafio comum de criadores
              </div>
            </div>
          ))}
        </div>

        {/* Transition Quote */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] text-center max-w-3xl mx-auto shadow-organic">
          <p className="font-serif text-lg sm:text-xl font-semibold text-[#1B1917] dark:text-[#FAF7F1]">
            "Não precisas de continuar a tratar cada etapa como um desafio separado. Conhece uma nova forma de trabalhar."
          </p>
          <span className="mt-2 block text-xs font-medium text-[#4C5B3C]">
            Ecossistema Integrado Nexora
          </span>
        </div>
      </div>
    </section>
  );
};
