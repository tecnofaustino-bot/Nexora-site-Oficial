import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  // Only one accordion open at a time as required
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F1] dark:bg-[#121110] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] dark:text-[#A8C78A] bg-[#F0E9DE] dark:bg-[#282522] px-3 py-1 rounded-md">
            Esclarecimentos
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-3 text-base text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Respostas claras para as dúvidas mais comuns sobre o funcionamento e o acesso à Nexora.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#DFD4C4] dark:border-[#38332E] bg-[#F0E9DE] dark:bg-[#1B1917] overflow-hidden transition-all duration-200 shadow-organic"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C5B3C]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1B1917] dark:text-[#FAF7F1] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7F1] dark:bg-[#24211E] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#DFD4C4] dark:bg-[#38332E]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#1B1917] dark:text-[#FAF7F1]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed border-t border-[#DFD4C4]/50 dark:border-[#38332E]/50 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
