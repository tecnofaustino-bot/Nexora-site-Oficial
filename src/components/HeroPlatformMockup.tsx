import React, { useState } from 'react';
import {
  LayoutDashboard,
  Smartphone,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  Eye,
  Sliders,
  Code2,
  FileText,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const HeroPlatformMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'appBuilder' | 'pageEditor' | 'store'>('dashboard');

  return (
    <div className="w-full rounded-2xl bg-[#1B1917] text-[#FAF7F1] p-3 sm:p-5 shadow-2xl border border-[#DFD4C4]/20 overflow-hidden relative">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#B8763C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#4C5B3C]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Mockup Window Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#FAF7F1]/10 text-xs">
        {/* Mac OS Window Controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#DFD4C4]/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#DFD4C4]/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#DFD4C4]/30"></div>
          <span className="ml-2 font-mono text-[11px] text-[#FAF7F1]/50 tracking-wider">
            nexora.app/workspace/studio
          </span>
        </div>

        {/* Status & Logo Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[#FAF7F1]/10 px-2.5 py-1 rounded-lg border border-white/10">
            <img
              src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
              alt="Nexora"
              className="w-4 h-4 rounded object-cover"
            />
            <span className="font-serif font-bold text-[11px] text-white">Nexora Studio</span>
          </div>
          <span className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[#FAF7F1]/80 bg-[#FAF7F1]/5 px-2.5 py-1 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4C5B3C]"></span>
            Modo Criador
          </span>
        </div>
      </div>

      {/* Interactive Screen Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-4">
        <button
          type="button"
          onClick={() => setActiveTab('dashboard')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'dashboard'
              ? 'bg-[#FAF7F1] text-[#1B1917] font-semibold shadow-sm'
              : 'text-[#FAF7F1]/70 hover:bg-[#FAF7F1]/10'
          }`}
        >
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Dashboard Geral</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('appBuilder')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'appBuilder'
              ? 'bg-[#FAF7F1] text-[#1B1917] font-semibold shadow-sm'
              : 'text-[#FAF7F1]/70 hover:bg-[#FAF7F1]/10'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Criador de Apps</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('pageEditor')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'pageEditor'
              ? 'bg-[#FAF7F1] text-[#1B1917] font-semibold shadow-sm'
              : 'text-[#FAF7F1]/70 hover:bg-[#FAF7F1]/10'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Editor de Páginas</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('store')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'store'
              ? 'bg-[#FAF7F1] text-[#1B1917] font-semibold shadow-sm'
              : 'text-[#FAF7F1]/70 hover:bg-[#FAF7F1]/10'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Produtos Digitais</span>
        </button>
      </div>

      {/* Screen 1: Dashboard Geral */}
      {activeTab === 'dashboard' && (
        <div className="space-y-3.5 animate-fadeIn">
          {/* Top KPI Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-2.5">
              <span className="text-[11px] text-[#FAF7F1]/60 block">Projetos Ativos</span>
              <span className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white">4</span>
              <span className="text-[10px] text-[#4C5B3C] block mt-0.5 font-medium">● Todos publicados</span>
            </div>
            <div className="rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-2.5">
              <span className="text-[11px] text-[#FAF7F1]/60 block">Visitantes Totais</span>
              <span className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white">12.840</span>
              <span className="text-[10px] text-[#4C5B3C] block mt-0.5 font-medium">↑ +38% este mês</span>
            </div>
            <div className="rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-2.5">
              <span className="text-[11px] text-[#FAF7F1]/60 block">Taxa de Conversão</span>
              <span className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white">4.8%</span>
              <span className="text-[10px] text-[#FAF7F1]/70 block mt-0.5">Média da página</span>
            </div>
            <div className="rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-2.5">
              <span className="text-[11px] text-[#FAF7F1]/60 block">Checkout Seguro</span>
              <span className="text-lg sm:text-xl font-bold font-mono tabular-nums text-[#4C5B3C]">Tutora Pay</span>
              <span className="text-[10px] text-[#FAF7F1]/70 block mt-0.5">Sincronizado</span>
            </div>
          </div>

          {/* Main Workspace Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Project List */}
            <div className="md:col-span-2 rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-3">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FAF7F1]/10 text-xs">
                <span className="font-semibold text-white">Os Teus Projetos em Produção</span>
                <span className="text-[#FAF7F1]/50 text-[11px]">4 ativos</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Portal Educativo Saber+", type: "Aplicação Web", status: "Online", views: "3.420 acessos" },
                  { name: "Página de Captura Consultoria", type: "Landing Page", status: "Online", views: "6.120 acessos" },
                  { name: "Ebook Gestão Moderna", type: "Produto Digital", status: "Checkout Ativo", views: "3.300 acessos" }
                ].map((proj, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-[#FAF7F1]/5 text-xs hover:bg-[#FAF7F1]/10 transition-colors">
                    <div>
                      <div className="font-semibold text-white">{proj.name}</div>
                      <div className="text-[11px] text-[#FAF7F1]/60">{proj.type} · {proj.views}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[#4C5B3C]/30 text-[#FAF7F1] border border-[#4C5B3C]/50 font-medium">
                      {proj.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 p-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-white block mb-1">Ações Rápidas</span>
                <p className="text-[11px] text-[#FAF7F1]/70 leading-relaxed mb-3">
                  Escolhe o próximo formato para criar e publicar hoje mesmo.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FAF7F1]/5 text-[#FAF7F1]/90">
                    <span>+ Nova Aplicação Web</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8763C]" />
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FAF7F1]/5 text-[#FAF7F1]/90">
                    <span>+ Nova Página de Vendas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8763C]" />
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#FAF7F1]/10 text-[10px] text-[#FAF7F1]/50">
                Sem necessidade de programar
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen 2: Criador de Apps */}
      {activeTab === 'appBuilder' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="p-3 rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-white">Estruturação de Aplicação Web / Mobile</span>
              <p className="text-[11px] text-[#FAF7F1]/70">Define rotas, ecrãs e regras de negócio com orientação passo a passo.</p>
            </div>
            <span className="text-[11px] px-2 py-1 rounded bg-[#4C5B3C]/40 text-[#FAF7F1] font-mono">
              Status: Pronto a Publicar
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
              <span className="font-semibold text-white block">1. Definição do Escopo</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block mt-1">✓ Formulários de utilizador</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block">✓ Painel de dados</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
              <span className="font-semibold text-white block">2. Fluxo de Navegação</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block mt-1">✓ Autenticação simples</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block">✓ Notificações automáticas</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
              <span className="font-semibold text-white block">3. Publicação Imediata</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block mt-1">✓ Domínio personalizado</span>
              <span className="text-[11px] text-[#FAF7F1]/60 block">✓ Responsivo para telemóveis</span>
            </div>
          </div>
        </div>
      )}

      {/* Screen 3: Editor de Páginas */}
      {activeTab === 'pageEditor' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="p-3 rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FAF7F1]/10 text-xs">
              <span className="font-semibold text-white">Canvas Visual de Página de Alta Conversão</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#FAF7F1]/60">Desktop / Mobile preview</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="p-2 rounded bg-[#FAF7F1]/10 border border-[#FAF7F1]/20 flex items-center justify-between text-xs">
                <span className="font-medium text-white">Bloco 1: Hero com Proposta de Valor & CTA</span>
                <span className="text-[10px] text-[#4C5B3C]">✓ Otimizado</span>
              </div>
              <div className="p-2 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#FAF7F1]/80">Bloco 2: Identificação do Problema e Dores</span>
                <span className="text-[10px] text-[#4C5B3C]">✓ 4 Cartões</span>
              </div>
              <div className="p-2 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#FAF7F1]/80">Bloco 3: Comparação & Benefícios Concretos</span>
                <span className="text-[10px] text-[#4C5B3C]">✓ Pronto</span>
              </div>
              <div className="p-2 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#FAF7F1]/80">Bloco 4: Checkout Seguro Integrado</span>
                <span className="text-[10px] text-[#4C5B3C]">✓ Tutora Pay</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen 4: Produtos Digitais */}
      {activeTab === 'store' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="p-3 rounded-xl bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FAF7F1]/10 text-xs">
              <span className="font-semibold text-white">Produtos Digitais Estruturados</span>
              <span className="text-[11px] text-[#4C5B3C]">✓ Pronto para faturar</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
                <div className="font-semibold text-white">Guia Estratégico Digital</div>
                <div className="text-[11px] text-[#FAF7F1]/60 mt-0.5">Ebook em formato interativo</div>
                <div className="mt-2 text-[11px] text-[#FAF7F1]/80">Entrega imediata via checkout</div>
              </div>
              <div className="p-2.5 rounded bg-[#FAF7F1]/5 border border-[#FAF7F1]/10">
                <div className="font-semibold text-white">Ferramenta SaaS de Agendamentos</div>
                <div className="text-[11px] text-[#FAF7F1]/60 mt-0.5">Acesso recorrente por subscrição</div>
                <div className="mt-2 text-[11px] text-[#FAF7F1]/80">Área de membros protegida</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Micro Footer of Mockup */}
      <div className="mt-3 pt-2 border-t border-[#FAF7F1]/10 flex flex-wrap items-center justify-between text-[11px] text-[#FAF7F1]/60">
        <span>Ambiente seguro com hospedagem e certificados incluídos</span>
        <span className="font-mono text-[10px] text-[#FAF7F1]/50">NEXORA SUITE v2026</span>
      </div>
    </div>
  );
};
