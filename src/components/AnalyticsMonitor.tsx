import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  BarChart3,
  MousePointerClick,
  Eye,
  X,
  RefreshCw,
  Trash2,
  Download,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Layers,
  Sparkles,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { AnalyticsEvent, AnalyticsSummary } from '../types/analytics';
import {
  getStoredEvents,
  recordLocalEvent,
  computeLocalSummary,
  fetchServerStats,
  clearAllAnalytics,
  formatTime
} from '../utils/analyticsStorage';

// Semantic order of the landing page sections for the funnel
const ORDERED_SECTIONS: Array<{ id: string; name: string }> = [
  { id: 'hero', name: 'Hero (Abertura)' },
  { id: 'problema', name: 'Identificação do Problema' },
  { id: 'solucao', name: 'Solução Nexora' },
  { id: 'funcionalidades', name: 'Funcionalidades & Bento' },
  { id: 'publico-alvo', name: 'Público-Alvo' },
  { id: 'comparacao', name: 'Comparação Sem/Com Nexora' },
  { id: 'passos', name: 'Como Funciona (3 Passos)' },
  { id: 'oportunidades', name: 'Oportunidades de Negócio' },
  { id: 'demonstracao', name: 'Demonstração Visual' },
  { id: 'prova-social', name: 'Prova Social & Vídeos' },
  { id: 'oferta', name: 'Oferta Oficial' },
  { id: 'faq', name: 'Perguntas Frequentes (FAQ)' },
  { id: 'cta-final', name: 'Chamada Final' },
];

export const AnalyticsMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'funnel' | 'events' | 'ctas'>('funnel');
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Keep track of sections seen in the current session to avoid duplicate count on jitter
  const seenSectionsRef = useRef<Set<string>>(new Set());

  // Load initial local data
  useEffect(() => {
    const local = getStoredEvents();
    setEvents(local);
    setSummary(computeLocalSummary(local));

    // Try fetching aggregated stats from server API
    fetchServerStats().then((serverData) => {
      if (serverData) {
        setSummary(serverData);
      }
    });

    // Listen for custom trigger event
    const handleOpenTrigger = () => setIsOpen(true);
    window.addEventListener('open-analytics-monitor', handleOpenTrigger);
    return () => {
      window.removeEventListener('open-analytics-monitor', handleOpenTrigger);
    };
  }, []);

  // 1. Automatic Section View Tracking via IntersectionObserver
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const el = entry.target as HTMLElement;
            // Determine section ID and descriptive name
            const sId =
              el.id ||
              el.getAttribute('data-section') ||
              ORDERED_SECTIONS.find((s) => el.innerText.toLowerCase().includes(s.name.toLowerCase()))?.id ||
              'seccao-' + Math.abs(el.offsetTop);

            // Avoid rapid multiple logs for same section in a short 8-second window
            if (!seenSectionsRef.current.has(sId)) {
              seenSectionsRef.current.add(sId);

              // Find friendly name
              const matched = ORDERED_SECTIONS.find((s) => s.id === sId);
              const friendlyName = matched ? matched.name : `Secção ${sId}`;

              const newEvent: AnalyticsEvent = {
                id: `ev-view-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
                type: 'section_view',
                name: friendlyName,
                sectionId: sId,
                timestamp: Date.now(),
                timeFormatted: formatTime(),
                metadata: {
                  viewportWidth: window.innerWidth,
                },
              };

              const updatedEvents = recordLocalEvent(newEvent);
              setEvents(updatedEvents);
              setSummary(computeLocalSummary(updatedEvents));

              // Reset memory for this section after 8 seconds of scrolling away
              setTimeout(() => {
                seenSectionsRef.current.delete(sId);
              }, 8000);
            }
          }
        });
      },
      {
        threshold: [0.3],
        rootMargin: '0px 0px -10% 0px',
      }
    );

    sectionElements.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Automatic CTA Click Tracking
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const isTutoraCheckout = href.includes('pay.tutora.co.mz');
      const hasCtaAttr = target.hasAttribute('data-cta');
      const text = (target.textContent || '').trim();

      // Check if button text matches conversion keywords
      const isConversionCta =
        isTutoraCheckout ||
        hasCtaAttr ||
        text.toLowerCase().includes('começar') ||
        text.toLowerCase().includes('aceder') ||
        text.toLowerCase().includes('primeiro passo') ||
        text.toLowerCase().includes('quero') ||
        text.toLowerCase().includes('checkout');

      if (isConversionCta) {
        // Find closest parent section
        const parentSection = target.closest('section');
        const sId = parentSection?.id || 'geral';
        const matched = ORDERED_SECTIONS.find((s) => s.id === sId);
        const sectionName = matched ? matched.name : sId;

        const ctaEvent: AnalyticsEvent = {
          id: `ev-cta-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          type: 'cta_click',
          name: `Clique: ${text.slice(0, 32)}`,
          sectionId: sId,
          timestamp: Date.now(),
          timeFormatted: formatTime(),
          metadata: {
            buttonText: text.slice(0, 48),
            targetUrl: href || '#',
            sectionName,
          },
        };

        const updatedEvents = recordLocalEvent(ctaEvent);
        setEvents(updatedEvents);
        setSummary(computeLocalSummary(updatedEvents));
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  // Manual refresh / sync with server
  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const serverData = await fetchServerStats();
      if (serverData) {
        setSummary(serverData);
        setNotification('Dados sincronizados com a API com sucesso!');
      } else {
        const local = getStoredEvents();
        setSummary(computeLocalSummary(local));
        setNotification('Métricas locais atualizadas.');
      }
    } catch {
      setNotification('Erro ao conectar com API.');
    } finally {
      setIsSyncing(false);
      setTimeout(() => setNotification(null), 3500);
    }
  };

  // Clear all data
  const handleClear = async () => {
    if (window.confirm('Tem a certeza que deseja reiniciar os contadores e limpar os eventos de monitorização?')) {
      await clearAllAnalytics();
      setEvents([]);
      setSummary({
        totalEvents: 0,
        totalSectionViews: 0,
        totalCtaClicks: 0,
        overallCtr: 0,
        viewsBySection: {},
        clicksByCta: {},
        recentEvents: [],
        lastUpdated: Date.now(),
      });
      setNotification('Métricas limpas com sucesso.');
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Simulate a test CTA click
  const handleSimulateCta = () => {
    const simulated: AnalyticsEvent = {
      id: `ev-cta-test-${Date.now()}`,
      type: 'cta_click',
      name: 'Clique Simulado: QUERO ACEDER À NEXORA',
      sectionId: 'oferta',
      timestamp: Date.now(),
      timeFormatted: formatTime(),
      metadata: {
        buttonText: 'Simulação: Aceder à Nexora',
        targetUrl: 'https://pay.tutora.co.mz/af52033ef6974f26922de0a6faf5bb35',
        sectionName: 'Oferta Oficial',
      },
    };

    const updated = recordLocalEvent(simulated);
    setEvents(updated);
    setSummary(computeLocalSummary(updated));
    setNotification('Clique em CTA simulado e registado!');
    setTimeout(() => setNotification(null), 3000);
  };

  // Export JSON Report
  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(
        JSON.stringify(
          {
            summary,
            events,
            exportedAt: new Date().toISOString(),
          },
          null,
          2
        )
      );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `nexora_analytics_${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const totalViews = summary?.totalSectionViews || 0;
  const totalClicks = summary?.totalCtaClicks || 0;
  const ctr = summary?.overallCtr || 0;

  return (
    <>
      {/* Discreet Floating Monitoring Trigger Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
        {!isMinimized ? (
          <div className="flex items-center gap-2 bg-[#1B1917]/90 dark:bg-[#221F1C]/90 text-white p-1.5 pl-3 pr-2 rounded-full border border-[#DFD4C4]/20 shadow-2xl backdrop-blur-md transition-all hover:scale-102">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold focus:outline-none"
              title="Abrir painel de monitorização"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <Activity className="w-3.5 h-3.5 text-[#B8763C]" />
              <span className="hidden sm:inline">Monitorização:</span>
              <span className="font-mono text-[#E8D3BC]">{totalViews} views</span>
              <span className="text-white/40">·</span>
              <span className="font-mono text-emerald-400 font-bold">{totalClicks} cliques</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="w-5 h-5 rounded-full hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center text-[10px]"
              title="Minimizar indicador"
            >
              <Minimize2 className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            className="w-10 h-10 rounded-full bg-[#1B1917] dark:bg-[#221F1C] text-[#E8D3BC] border border-[#DFD4C4]/20 shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
            title="Expandir indicador de monitorização"
          >
            <Activity className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Analytics Monitoring Drawer / Dashboard */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs animate-fadeIn"
        >
          <div className="relative w-full max-w-xl h-full bg-[#FAF7F1] dark:bg-[#181615] border-l border-[#DFD4C4] dark:border-[#38332E] shadow-2xl flex flex-col justify-between overflow-hidden text-[#1B1917] dark:text-[#FAF7F1] transition-colors">
            {/* Drawer Top Header */}
            <div className="p-5 sm:p-6 border-b border-[#DFD4C4] dark:border-[#38332E] bg-[#F0E9DE] dark:bg-[#1B1917]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8D3BC] dark:bg-[#2A231E] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-center text-[#9A5A28]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B1917] dark:text-[#FAF7F1] leading-tight">
                      Monitorização de Conversão
                    </h3>
                    <p className="text-xs text-[#7C7369] dark:text-[#A89F92]">
                      Visualizações de Secção & Cliques em CTAs
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#FAF7F1] dark:bg-[#282522] text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] text-[#4C5B3C] dark:text-[#A8C78A] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>LocalStorage Ativo ({events.length} ev)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] text-[#9A5A28] dark:text-[#E8D3BC] font-semibold">
                  <span>API: /api/analytics</span>
                </span>
                <button
                  type="button"
                  onClick={handleSync}
                  disabled={isSyncing}
                  className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#DFD4C4] dark:bg-[#2E2822] text-[#1B1917] dark:text-[#FAF7F1] hover:bg-[#D0C2AE] text-[10px] transition-colors"
                >
                  <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>Sincronizar</span>
                </button>
              </div>

              {notification && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{notification}</span>
                </div>
              )}
            </div>

            {/* KPI Summary Cards */}
            <div className="p-5 sm:p-6 grid grid-cols-3 gap-3 border-b border-[#DFD4C4] dark:border-[#38332E] bg-[#FAF7F1] dark:bg-[#181615]">
              <div className="p-3 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E]">
                <div className="flex items-center gap-1.5 text-xs text-[#7C7369] dark:text-[#A89F92]">
                  <Eye className="w-3.5 h-3.5 text-[#9A5A28]" />
                  <span>Views</span>
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-bold font-mono text-[#1B1917] dark:text-[#FAF7F1]">
                  {totalViews}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E]">
                <div className="flex items-center gap-1.5 text-xs text-[#7C7369] dark:text-[#A89F92]">
                  <MousePointerClick className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Cliques</span>
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-bold font-mono text-[#1B1917] dark:text-[#FAF7F1]">
                  {totalClicks}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E]">
                <div className="flex items-center gap-1.5 text-xs text-[#7C7369] dark:text-[#A89F92]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#4C5B3C] dark:text-[#A8C78A]" />
                  <span>CTR Global</span>
                </div>
                <div className="mt-1 font-serif text-xl sm:text-2xl font-bold font-mono text-[#4C5B3C] dark:text-[#A8C78A]">
                  {ctr}%
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-5 sm:px-6 pt-3 flex items-center gap-2 border-b border-[#DFD4C4] dark:border-[#38332E] text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('funnel')}
                className={`pb-2.5 font-semibold transition-colors border-b-2 ${
                  activeTab === 'funnel'
                    ? 'border-[#9A5A28] text-[#9A5A28] dark:text-[#E8D3BC]'
                    : 'border-transparent text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
                }`}
              >
                Funil de Secções
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ctas')}
                className={`pb-2.5 font-semibold transition-colors border-b-2 ${
                  activeTab === 'ctas'
                    ? 'border-[#9A5A28] text-[#9A5A28] dark:text-[#E8D3BC]'
                    : 'border-transparent text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
                }`}
              >
                Cliques em CTAs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('events')}
                className={`pb-2.5 font-semibold transition-colors border-b-2 ${
                  activeTab === 'events'
                    ? 'border-[#9A5A28] text-[#9A5A28] dark:text-[#E8D3BC]'
                    : 'border-transparent text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
                }`}
              >
                Feed em Tempo Real ({events.length})
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {/* TAB 1: FUNNEL OF SECTIONS */}
              {activeTab === 'funnel' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7C7369] dark:text-[#A89F92] mb-1">
                    <span>Secção da Landing Page</span>
                    <span>Visualizações / Frequência</span>
                  </div>

                  {ORDERED_SECTIONS.map((sec, idx) => {
                    const views = summary?.viewsBySection[sec.id] || 0;
                    // Max view reference (usually Hero)
                    const maxViews = Math.max(...Object.values(summary?.viewsBySection || {}), 1);
                    const percent = Math.min(Math.round((views / maxViews) * 100), 100);

                    return (
                      <div
                        key={sec.id}
                        className="p-3 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#1B1917] dark:text-[#FAF7F1] flex items-center gap-1.5">
                            <span className="font-mono text-[10px] text-[#7C7369] dark:text-[#A89F92] w-4">
                              0{idx + 1}
                            </span>
                            <span>{sec.name}</span>
                          </span>
                          <span className="font-mono text-xs font-bold text-[#1B1917] dark:text-[#FAF7F1]">
                            {views} {views === 1 ? 'view' : 'views'}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-[#DFD4C4] dark:bg-[#2E2822] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#9A5A28] to-[#B8763C] rounded-full transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 2: CTA CLICKS BREAKDOWN */}
              {activeTab === 'ctas' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7C7369] dark:text-[#A89F92] mb-1">
                    <span>Botão de CTA / Ação</span>
                    <span>Total de Cliques</span>
                  </div>

                  {Object.keys(summary?.clicksByCta || {}).length === 0 ? (
                    <div className="text-center py-8 text-xs text-[#7C7369] dark:text-[#A89F92] bg-[#F0E9DE] dark:bg-[#221F1C] rounded-2xl p-6 border border-[#DFD4C4] dark:border-[#38332E]">
                      <MousePointerClick className="w-8 h-8 mx-auto text-[#9A5A28] mb-2 opacity-60" />
                      <p className="font-semibold text-[#1B1917] dark:text-[#FAF7F1]">Nenhum clique registado ainda nesta sessão.</p>
                      <p className="mt-1">Clica num dos botões da página ou usa o botão abaixo para simular um clique.</p>
                      <button
                        type="button"
                        onClick={handleSimulateCta}
                        className="mt-4 px-4 py-2 rounded-lg bg-[#9A5A28] text-white text-xs font-semibold hover:bg-[#834b20] transition-colors"
                      >
                        Simular Clique de Teste
                      </button>
                    </div>
                  ) : (
                    Object.entries(summary?.clicksByCta || {}).map(([btnName, count]) => (
                      <div
                        key={btnName}
                        className="p-3.5 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-[#9A5A28]/20 flex items-center justify-center text-[#9A5A28] shrink-0">
                            <MousePointerClick className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] truncate">
                            {btnName}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#DFD4C4] dark:bg-[#2E2822] text-[#1B1917] dark:text-[#FAF7F1] shrink-0">
                          {count} {count === 1 ? 'clique' : 'cliques'}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 3: REAL-TIME EVENT STREAM */}
              {activeTab === 'events' && (
                <div className="space-y-2">
                  {events.length === 0 ? (
                    <div className="text-center py-8 text-xs text-[#7C7369] dark:text-[#A89F92]">
                      Nenhum evento capturado. Faz scroll na página para gerar eventos.
                    </div>
                  ) : (
                    events.map((ev) => (
                      <div
                        key={ev.id}
                        className="p-2.5 rounded-xl bg-[#F0E9DE] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] text-xs flex items-center justify-between gap-2 transition-all hover:bg-[#E8D3BC]/40 dark:hover:bg-[#28221D]"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              ev.type === 'cta_click'
                                ? 'bg-amber-500'
                                : ev.type === 'section_view'
                                ? 'bg-emerald-500'
                                : 'bg-blue-500'
                            }`}
                          ></span>
                          <span className="font-mono text-[10px] text-[#7C7369] dark:text-[#A89F92] shrink-0">
                            {ev.timeFormatted}
                          </span>
                          <span className="font-semibold text-[#1B1917] dark:text-[#FAF7F1] truncate">
                            {ev.name}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold shrink-0 ${
                            ev.type === 'cta_click'
                              ? 'bg-[#9A5A28]/20 text-[#9A5A28] dark:text-[#E8D3BC]'
                              : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                          }`}
                        >
                          {ev.type === 'cta_click' ? 'Clique CTA' : 'View'}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions Toolbar */}
            <div className="p-4 sm:p-5 border-t border-[#DFD4C4] dark:border-[#38332E] bg-[#F0E9DE] dark:bg-[#1B1917] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSimulateCta}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F1] dark:bg-[#282522] border border-[#DFD4C4] dark:border-[#38332E] text-[#1B1917] dark:text-[#FAF7F1] hover:border-[#9A5A28] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MousePointerClick className="w-3.5 h-3.5 text-[#9A5A28]" />
                  <span>Simular Clique</span>
                </button>

                <button
                  type="button"
                  onClick={handleExportJson}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F1] dark:bg-[#282522] border border-[#DFD4C4] dark:border-[#38332E] text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Descarregar relatório de métricas em formato JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar JSON</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-500/10 text-xs font-semibold flex items-center gap-1.5 transition-colors ml-auto"
                title="Limpar todos os dados gravados localmente e no servidor"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Limpar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
