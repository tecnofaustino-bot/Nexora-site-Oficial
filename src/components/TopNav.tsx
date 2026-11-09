import React from 'react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';
import { ThemeToggle } from './ThemeToggle';

export const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F1]/90 dark:bg-[#121110]/90 backdrop-blur-md border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Nexora Official Logo Lockup */}
        <a
          href="#"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group hover:opacity-95 transition-all"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-[#DFD4C4] dark:border-[#38332E] bg-[#1B1917] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
              alt="Logótipo Oficial Nexora"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1B1917] dark:text-[#FAF7F1]">
            Nexora
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A3532] dark:text-[#DFD4C4]">
          <a
            href="#problema"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            O Desafio
          </a>
          <a
            href="#solucao"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            A Solução
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            Funcionalidades
          </a>
          <a
            href="#demonstracao"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            Demonstração
          </a>
          <a
            href="#prova-social"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            Resultados
          </a>
          <a
            href="#faq"
            className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors whitespace-nowrap shrink-0"
          >
            Perguntas
          </a>
        </nav>

        {/* Zone 3: Theme Toggle & 1 Primary Action */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <ThemeToggle />
          <a
            href={OFFICIAL_CHECKOUT_URL}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#9A5A28] hover:bg-[#834b20] rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-[#4C5B3C] shadow-sm whitespace-nowrap shrink-0"
          >
            Quero Começar
          </a>
        </div>
      </div>
    </header>
  );
};
