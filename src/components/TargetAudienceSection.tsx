import React from 'react';
import { UserCheck, Compass, Briefcase, Sparkles, DollarSign } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/landingData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="publico-alvo" className="py-16 sm:py-24 bg-[#FAF7F1] dark:bg-[#121110] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] bg-[#F0E9DE] dark:bg-[#1B1917] px-3 py-1 rounded-md border border-[#DFD4C4]/60 dark:border-[#38332E]">
            Público-Alvo
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            NÃO IMPORTA ONDE ESTÁS AGORA. O IMPORTANTE É O QUE QUERES CONSTRUIR.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            A plataforma adapta-se ao teu momento atual, fornecendo as ferramentas necessárias para tirar a tua ideia do papel e colocá-la em funcionamento no mercado digital.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#F0E9DE] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] p-6 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex flex-col justify-between"
            >
              <div>
                <div className="inline-block text-[11px] font-semibold text-[#1B1917] dark:text-[#FAF7F1] bg-[#E8D3BC] dark:bg-[#282522] border border-transparent dark:border-[#38332E] px-2.5 py-0.5 rounded mb-4">
                  {item.badge}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#DFD4C4]/60 dark:border-[#38332E] text-xs font-mono text-[#7C7369] dark:text-[#A89F92]">
                0{idx + 1} // Perfil
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Callout Quote */}
        <div className="mt-12 p-8 rounded-2xl bg-[#F0E9DE] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] text-center max-w-3xl mx-auto shadow-organic">
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#1B1917] dark:text-[#FAF7F1] leading-snug">
            "Não precisas de começar como especialista. Precisas de começar com uma ideia e disposição para a desenvolver."
          </p>
          <div className="mt-3 text-xs uppercase tracking-widest text-[#7C7369] dark:text-[#A89F92] font-medium">
            Princípio Fundamental Nexora
          </div>
        </div>
      </div>
    </section>
  );
};
