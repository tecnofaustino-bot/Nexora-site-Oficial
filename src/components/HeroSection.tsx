import React from 'react';
import { ArrowDown, CheckCircle, ShieldCheck } from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';
import { DynamicLaunchCounter } from './DynamicLaunchCounter';
import { HeroPlatformMockup } from './HeroPlatformMockup';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-[#DFD4C4] dark:border-[#2E2A27]">
      {/* Subtle warm architectural texture / sand ambient background */}
      <div className="absolute inset-0 bg-[#FAF7F1] dark:bg-[#121110] -z-10 transition-colors"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8D3BC]/30 dark:bg-[#9A5A28]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Slogan Ribbon with Official Logo */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F0E9DE] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] shadow-xs">
            <div className="w-5 h-5 rounded-md overflow-hidden bg-[#1B1917] shrink-0">
              <img
                src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
                alt="Logótipo Nexora"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#9A5A28] dark:text-[#B8763C]">
              NEXORA · CRIE. PUBLIQUE. CRESÇA.
            </span>
          </div>
          <span className="text-xs text-[#7C7369] dark:text-[#A89F92]">Plataforma SaaS para Criadores Digitais</span>
        </div>

        {/* 2-Column Split: Hero Copy + Hero SaaS Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Subheadline & Primary Action Area (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1B1917] dark:text-[#FAF7F1] leading-[1.12] tracking-tight text-balance">
              A TUA PRÓXIMA GRANDE IDEIA PODE TORNAR-SE NUM NEGÓCIO DIGITAL.
            </h1>

            <p className="text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
              Cria aplicações, desenvolve os teus próprios produtos digitais e constrói páginas de vendas profissionais com a Nexora. Tudo numa plataforma criada para transformar ideias em projetos reais, mesmo que estejas a começar do zero.
            </p>

            <p className="text-sm sm:text-base text-[#7C7369] dark:text-[#A89F92] leading-relaxed">
              Não precisas de ter uma grande equipa ou ser um especialista em tecnologia para começar a desenvolver as tuas ideias. Com as ferramentas certas, podes dar os primeiros passos, criar soluções e explorar novas oportunidades no mercado digital.
            </p>

            {/* CTAs Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA (Madeira-600) */}
              <a
                href={OFFICIAL_CHECKOUT_URL}
                className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] rounded-lg bg-[#9A5A28] hover:bg-[#834b20] text-white font-semibold text-base sm:text-[17px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-[#4C5B3C] text-center whitespace-nowrap"
              >
                🚀 QUERO COMEÇAR COM A NEXORA
              </a>

              {/* Secondary CTA (Borda Carvão-900 / Claro no Dark Mode) */}
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center px-6 py-4 min-h-[52px] rounded-lg border-[1.5px] border-[#1B1917] dark:border-[#DFD4C4] text-[#1B1917] dark:text-[#FAF7F1] hover:bg-[#F0E9DE] dark:hover:bg-[#282522] font-semibold text-base sm:text-[17px] transition-all duration-200 text-center whitespace-nowrap gap-1.5"
              >
                <span>Conhecer as funcionalidades</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Microtext below CTA */}
            <div className="flex items-center gap-2 text-xs text-[#7C7369] dark:text-[#A89F92]">
              <ShieldCheck className="w-4 h-4 text-[#4C5B3C] shrink-0" />
              <span>Começa a explorar novas possibilidades no universo digital · Checkout oficial Tutora Pay</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity SaaS Mockup (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroPlatformMockup />
          </div>
        </div>

        {/* Dynamic Launch Counter Strip (Hero focal proof area) */}
        <div className="mt-12 sm:mt-16">
          <DynamicLaunchCounter variant="hero" />
        </div>
      </div>
    </section>
  );
};
