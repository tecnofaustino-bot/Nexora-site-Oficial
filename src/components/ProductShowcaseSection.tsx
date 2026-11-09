import React, { useState } from 'react';
import {
  Eye,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Layers,
  Sparkles,
  ShoppingBag,
  Check
} from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  imageSrc?: string;
  isInteractivePreview?: boolean;
}

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [zoomItem, setZoomItem] = useState<ShowcaseItem | null>(null);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: "screen-1",
      title: "Visão Geral do Ecossistema Nexora",
      subtitle: "Cria aplicações e páginas de vendas profissionais do zero ao resultado",
      category: "Visão Geral",
      description: "Com a Nexora, transformas as tuas ideias em projetos reais, com aparência profissional, alta performance e suporte a aplicativos Android, iOS, Windows e landing pages.",
      imageSrc: "/assets/aistudio/pagee_a7a21dcd.png"
    },
    {
      id: "screen-2",
      title: "Visualizador Mobile e Multi-Dispositivo",
      subtitle: "Garantia de experiência perfeita em telemóveis e tablets",
      category: "Experiência Mobile",
      description: "Cada página e aplicação criada na Nexora adapta-se nativamente a ecrãs de smartphones Android e iOS, mantendo botões confortáveis e navegação fluida.",
      imageSrc: "/src/assets/images/nexora_device_mockup_1793526316964.jpg"
    },
    {
      id: "screen-3",
      title: "Editor Visual de Páginas de Vendas",
      subtitle: "Montagem em blocos de alta conversão sem tocar em código",
      category: "Construtor de Páginas",
      description: "Adiciona blocos de benefícios, contadores de prova social, garantias, acordeão de perguntas frequentes e botões de aquisição diretos.",
      isInteractivePreview: true
    },
    {
      id: "screen-4",
      title: "Estruturador de Aplicações e Ferramentas",
      subtitle: "Definição de fluxos de dados, formulários e lógica interativa",
      category: "Criação de Apps",
      description: "Processo orientado que guia a concepção do produto desde a ideia inicial até à publicação e entrega de valor para os utilizadores.",
      isInteractivePreview: true
    }
  ];

  const current = showcaseItems[activeTab];

  return (
    <section id="demonstracao" className="py-16 sm:py-24 bg-[#FAF7F1] dark:bg-[#121110] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] dark:text-[#A8C78A] bg-[#F0E9DE] dark:bg-[#282522] px-3 py-1 rounded-md">
              Demonstração Visual
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
              NÃO FIQUES APENAS NA IDEIA. VÊ O QUE PODES DESENVOLVER.
            </h2>
            <p className="mt-3 text-base text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
              Explora ecrãs reais, fluxos de trabalho e a qualidade visual das soluções construídas dentro do ecossistema Nexora.
            </p>
          </div>

          {/* Tab Selector Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {showcaseItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-[#1B1917] text-white shadow-sm dark:bg-[#FAF7F1] dark:text-[#1B1917]'
                    : 'bg-[#F0E9DE] text-[#3A3532] hover:bg-[#DFD4C4] dark:bg-[#221F1C] dark:text-[#DFD4C4] dark:hover:bg-[#2E2A27]'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Showcase Frame */}
        <div className="rounded-2xl border border-[#DFD4C4] dark:border-[#38332E] bg-[#F0E9DE] dark:bg-[#1B1917] p-4 sm:p-7 shadow-organic-lg transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Screen Container (8 cols) */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-[#1B1917] dark:bg-[#0E0D0C] border border-[#DFD4C4] dark:border-[#38332E] min-h-[360px] sm:min-h-[480px] flex items-center justify-center group">
              {current.imageSrc ? (
                <img
                  src={current.imageSrc}
                  alt={current.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-101"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Interactive Canvas Representation */
                <div className="w-full h-full p-6 bg-[#1B1917] text-[#FAF7F1] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F1]/10 text-xs">
                      <span className="font-mono text-[#FAF7F1]/60">
                        {current.category} · Ambiente de Criação Nexora
                      </span>
                      <span className="text-[#4C5B3C] font-semibold">● Modo Interativo</span>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="p-3.5 rounded-lg bg-[#FAF7F1]/10 border border-[#FAF7F1]/20">
                        <div className="text-xs text-[#FAF7F1]/60">Módulo Ativo</div>
                        <div className="font-serif text-lg font-bold text-white mt-0.5">
                          {current.title}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="p-2.5 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
                          <span className="text-[#FAF7F1]/60 block text-[10px]">Componentes</span>
                          <span className="font-semibold text-white">Prontos a Usar</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
                          <span className="text-[#FAF7F1]/60 block text-[10px]">Exportação</span>
                          <span className="font-semibold text-[#4C5B3C]">1-Clique</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
                          <span className="text-[#FAF7F1]/60 block text-[10px]">Checkout</span>
                          <span className="font-semibold text-white">Integrado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#FAF7F1]/10 text-[11px] text-[#FAF7F1]/60 flex items-center justify-between">
                    <span>Sem linhas de código obrigatórias</span>
                    <span>Alta conversão garantida pelo design</span>
                  </div>
                </div>
              )}

              {/* Zoom Button */}
              <button
                type="button"
                onClick={() => setZoomItem(current)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-xs transition-colors flex items-center gap-1.5 text-xs"
                title="Ampliar visualização"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>

            {/* Description & Navigation (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A5A28]">
                  {current.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1B1917] dark:text-[#FAF7F1] mt-1">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-[#7C7369] dark:text-[#A89F92] mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 border-t border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : showcaseItems.length - 1))}
                    className="p-2 rounded-lg bg-[#FAF7F1] hover:bg-[#DFD4C4] border border-[#DFD4C4] text-[#1B1917] dark:bg-[#282522] dark:hover:bg-[#38332E] dark:border-[#38332E] dark:text-[#FAF7F1] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab((prev) => (prev < showcaseItems.length - 1 ? prev + 1 : 0))}
                    className="p-2 rounded-lg bg-[#FAF7F1] hover:bg-[#DFD4C4] border border-[#DFD4C4] text-[#1B1917] dark:bg-[#282522] dark:hover:bg-[#38332E] dark:border-[#38332E] dark:text-[#FAF7F1] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <span className="font-mono text-xs text-[#7C7369] dark:text-[#A89F92]">
                  {activeTab + 1} de {showcaseItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {zoomItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs">
          <div className="relative max-w-4xl w-full bg-[#1B1917] rounded-2xl overflow-hidden border border-[#DFD4C4]/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[#FAF7F1]/10 text-white">
              <div>
                <h4 className="font-serif font-bold text-base text-white">{zoomItem.title}</h4>
                <p className="text-xs text-[#FAF7F1]/60">{zoomItem.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setZoomItem(null)}
                className="text-white/70 hover:text-white p-2 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto">
              {zoomItem.imageSrc ? (
                <img
                  src={zoomItem.imageSrc}
                  alt={zoomItem.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl object-contain max-h-[60vh] mx-auto"
                />
              ) : (
                <div className="p-8 text-center text-[#FAF7F1]/80">
                  <p className="font-serif text-xl font-bold text-white mb-2">{zoomItem.title}</p>
                  <p className="text-sm max-w-md mx-auto">{zoomItem.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
