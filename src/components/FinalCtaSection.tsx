import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="cta-final" className="py-20 sm:py-28 bg-[#1B1917] text-white relative overflow-hidden">
      {/* Warm Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9A5A28]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#4C5B3C]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Nexora Official Emblem Showcase */}
        <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#E8D3BC]/30 shadow-2xl bg-black/60 p-1 backdrop-blur-xs flex items-center justify-center">
          <img
            src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
            alt="Logótipo Oficial Nexora"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#B8763C] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
          DECISÃO ESTRATÉGICA
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
          AS IDEIAS NÃO SE TRANSFORMAM EM REALIDADE SOZINHAS. É PRECISO DAR O PRIMEIRO PASSO.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#FAF7F1]/80 max-w-2xl mx-auto leading-relaxed">
          Podes continuar apenas a imaginar os projetos que gostarias de desenvolver ou começar a explorar as ferramentas que te ajudam a transformar essas ideias em algo concreto.
        </p>

        <p className="mt-3 text-sm sm:text-base text-[#FAF7F1]/60 max-w-xl mx-auto">
          Cria os teus projetos. Desenvolve os teus produtos. Constrói novas possibilidades no digital.
        </p>

        <div className="mt-6 font-serif text-lg sm:text-xl font-bold tracking-wider text-[#E8D3BC]">
          NEXORA — CRIE. PUBLIQUE. CRESÇA.
        </div>

        {/* Primary CTA (Madeira-600) */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href={OFFICIAL_CHECKOUT_URL}
            className="inline-flex items-center justify-center px-10 py-4 min-h-[56px] rounded-lg bg-[#9A5A28] hover:bg-[#834b20] text-white font-semibold text-lg sm:text-xl shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-[#4C5B3C] text-center whitespace-nowrap gap-2"
          >
            <span>SIM! QUERO COMEÇAR COM A NEXORA</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#FAF7F1]/50">
            <ShieldCheck className="w-4 h-4 text-[#4C5B3C]" />
            <span>O próximo projeto pode começar com uma simples decisão · Checkout seguro Tutora Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
};
