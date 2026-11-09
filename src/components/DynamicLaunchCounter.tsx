import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Sparkles, CheckCircle2, ChevronRight, Activity, Globe, Plus, RotateCcw } from 'lucide-react';
import { INITIAL_LAUNCH_COUNT, RECENT_CREATOR_LAUNCHES, CreatorLaunch } from '../data/landingData';

interface DynamicLaunchCounterProps {
  className?: string;
  variant?: 'hero' | 'compact';
}

const STORAGE_KEY_COUNT = 'nexora_launch_count';
const STORAGE_KEY_LAST_TIME = 'nexora_launch_last_time';
const STORAGE_KEY_LAUNCHES = 'nexora_creator_launches';
const STORAGE_KEY_TIMEFRAME = 'nexora_counter_timeframe';

export const DynamicLaunchCounter: React.FC<DynamicLaunchCounterProps> = ({
  className = '',
  variant = 'hero'
}) => {
  // 1. Initial State with LocalStorage Persistence & Offline Recovery
  const [count, setCount] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_COUNT);
      const lastTimeStr = localStorage.getItem(STORAGE_KEY_LAST_TIME);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= INITIAL_LAUNCH_COUNT) {
          // If returning user, compute realistic natural elapsed launches (~1 launch per 14s)
          if (lastTimeStr) {
            const elapsedMs = Date.now() - parseInt(lastTimeStr, 10);
            if (elapsedMs > 0) {
              const extraLaunches = Math.min(Math.floor(elapsedMs / 14000), 120); // capped reasonably
              const newTotal = parsed + extraLaunches;
              localStorage.setItem(STORAGE_KEY_COUNT, newTotal.toString());
              localStorage.setItem(STORAGE_KEY_LAST_TIME, Date.now().toString());
              return newTotal;
            }
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage error reading launch count:', e);
    }
    return INITIAL_LAUNCH_COUNT;
  });

  const [timeframe, setTimeframe] = useState<'total' | 'month' | 'today'>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_TIMEFRAME);
      if (stored === 'total' || stored === 'month' || stored === 'today') {
        return stored;
      }
    } catch {}
    return 'total';
  });

  const [launches, setLaunches] = useState<CreatorLaunch[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LAUNCHES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage error reading creator launches:', e);
    }
    return RECENT_CREATOR_LAUNCHES;
  });

  const [activeLaunchIndex, setActiveLaunchIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [showSimModal, setShowSimModal] = useState<boolean>(false);
  const [simProjectName, setSimProjectName] = useState<string>('');
  const [simCategory, setSimCategory] = useState<'app' | 'landing' | 'product'>('app');
  const [simCity, setSimCity] = useState<string>('Maputo');
  const [celebrationToast, setCelebrationToast] = useState<string | null>(null);

  // 2. Persist Count & Timestamp whenever count changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COUNT, count.toString());
      localStorage.setItem(STORAGE_KEY_LAST_TIME, Date.now().toString());
    } catch (e) {
      console.warn('Failed to save count to localStorage:', e);
    }
  }, [count]);

  // 3. Persist Timeframe Preference
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TIMEFRAME, timeframe);
    } catch {}
  }, [timeframe]);

  // 4. Persist Launches list whenever a new creator launch is added
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LAUNCHES, JSON.stringify(launches));
    } catch (e) {
      console.warn('Failed to save launches to localStorage:', e);
    }
  }, [launches]);

  // 5. Cross-tab synchronization via window 'storage' event
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY_COUNT && e.newValue) {
        const val = parseInt(e.newValue, 10);
        if (!isNaN(val)) setCount(val);
      } else if (e.key === STORAGE_KEY_LAUNCHES && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) setLaunches(parsed);
        } catch {}
      } else if (e.key === STORAGE_KEY_TIMEFRAME && e.newValue) {
        if (e.newValue === 'total' || e.newValue === 'month' || e.newValue === 'today') {
          setTimeframe(e.newValue);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // 6. Background ticker: naturally increments every ~14 seconds to reflect live platform activity
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 14000);
    return () => clearInterval(timer);
  }, []);

  // 7. Rotate through recent launches every 4.5 seconds
  useEffect(() => {
    const launchInterval = setInterval(() => {
      setActiveLaunchIndex((prev) => (prev + 1) % launches.length);
    }, 4500);
    return () => clearInterval(launchInterval);
  }, [launches.length]);

  const displayedCount =
    timeframe === 'total'
      ? count
      : timeframe === 'month'
      ? Math.round(count * 0.18)
      : Math.round(count * 0.012);

  // 8. Handle New Simulated Launch with Instant Local Persistence
  const handleSimulateLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simProjectName.trim()) return;

    setIsSimulating(true);

    setTimeout(() => {
      const categoryLabels: Record<string, string> = {
        app: 'Aplicação Web',
        landing: 'Página de Vendas',
        product: 'Produto Digital'
      };

      const newLaunch: CreatorLaunch = {
        id: `sim-${Date.now()}`,
        projectName: simProjectName.trim(),
        category: simCategory,
        categoryLabel: categoryLabels[simCategory],
        creatorName: 'Novo Criador Nexora',
        location: simCity,
        timeAgo: 'agora mesmo',
        type: simCategory === 'app' ? 'App SaaS' : simCategory === 'landing' ? 'Landing Page' : 'Portal Digital'
      };

      const updatedLaunches = [newLaunch, ...launches];
      setLaunches(updatedLaunches);
      setCount((prev) => prev + 1);
      setActiveLaunchIndex(0);
      setIsSimulating(false);
      setShowSimModal(false);
      setCelebrationToast(`🎉 Lançamento guardado com sucesso: "${simProjectName.trim()}"!`);
      setSimProjectName('');

      setTimeout(() => setCelebrationToast(null), 5000);
    }, 400);
  };

  // Optional: Reset simulated launches back to default if desired
  const handleResetCounter = () => {
    if (window.confirm('Pretende repor o contador e a lista de lançamentos para os valores originais?')) {
      localStorage.removeItem(STORAGE_KEY_COUNT);
      localStorage.removeItem(STORAGE_KEY_LAST_TIME);
      localStorage.removeItem(STORAGE_KEY_LAUNCHES);
      setCount(INITIAL_LAUNCH_COUNT);
      setLaunches(RECENT_CREATOR_LAUNCHES);
      setActiveLaunchIndex(0);
      setCelebrationToast('Contador reinicializado com sucesso.');
      setTimeout(() => setCelebrationToast(null), 3000);
    }
  };

  const activeLaunch = launches[activeLaunchIndex] || launches[0];

  return (
    <div
      className={`rounded-2xl border border-[#DFD4C4] dark:border-[#38332E] bg-[#FAF7F1] dark:bg-[#1B1917] p-5 sm:p-6 shadow-organic transition-all duration-300 ${className}`}
    >
      {/* Top Banner: Real-time Telemetry & Timeframe Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DFD4C4] dark:border-[#38332E]">
        <div className="flex items-center gap-2">
          <div className="flex h-2.5 w-2.5 items-center justify-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4C5B3C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4C5B3C]"></span>
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4C5B3C] dark:text-[#A8C78A]">
            Em direto na Plataforma
          </span>
          <span className="text-xs text-[#7C7369] dark:text-[#A89F92]">· Estado persistido offline</span>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center rounded-lg bg-[#F0E9DE] dark:bg-[#121110] p-1 border border-[#DFD4C4] dark:border-[#38332E]">
          <button
            type="button"
            onClick={() => setTimeframe('total')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              timeframe === 'total'
                ? 'bg-[#FAF7F1] dark:bg-[#282522] text-[#1B1917] dark:text-[#FAF7F1] shadow-sm font-semibold'
                : 'text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
            }`}
          >
            Total Acumulado
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('month')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              timeframe === 'month'
                ? 'bg-[#FAF7F1] dark:bg-[#282522] text-[#1B1917] dark:text-[#FAF7F1] shadow-sm font-semibold'
                : 'text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
            }`}
          >
            Este Mês
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('today')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              timeframe === 'today'
                ? 'bg-[#FAF7F1] dark:bg-[#282522] text-[#1B1917] dark:text-[#FAF7F1] shadow-sm font-semibold'
                : 'text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1]'
            }`}
          >
            Hoje
          </button>
        </div>
      </div>

      {/* Main Counter Display */}
      <div className="py-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B1917] dark:text-[#FAF7F1] font-mono tabular-nums">
              {displayedCount.toLocaleString('pt-PT')}
            </span>
            <span className="text-xl sm:text-2xl font-serif font-medium text-[#4C5B3C] dark:text-[#A8C78A]">
              +
            </span>
          </div>
          <p className="mt-1 text-sm sm:text-base font-medium text-[#3A3532] dark:text-[#DFD4C4]">
            Lançamentos de produtos digitais e páginas concluídos com sucesso por criadores na Nexora
          </p>
        </div>

        {/* Action Buttons: Simulate Launch + Reset */}
        <div className="flex items-center gap-2 self-start sm:self-end">
          <button
            type="button"
            onClick={() => setShowSimModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] bg-[#F0E9DE] dark:bg-[#24211E] hover:bg-[#DFD4C4] dark:hover:bg-[#302B27] border border-[#DFD4C4] dark:border-[#38332E] rounded-lg transition-colors"
            title="Experimente simular a publicação de uma nova ideia"
          >
            <Plus className="w-3.5 h-3.5 text-[#4C5B3C]" />
            <span>Simular Novo Lançamento</span>
          </button>
        </div>
      </div>

      {/* Category Breakdown Bar */}
      <div className="pt-3 pb-4 border-t border-[#DFD4C4]/60 dark:border-[#38332E]/60 grid grid-cols-3 gap-2 text-center sm:text-left">
        <div className="rounded-lg bg-[#F0E9DE]/60 dark:bg-[#121110]/60 p-2 border border-[#DFD4C4]/50 dark:border-[#38332E]/50">
          <div className="text-xs text-[#7C7369] dark:text-[#A89F92]">Aplicações Web</div>
          <div className="font-mono text-sm sm:text-base font-semibold text-[#1B1917] dark:text-[#FAF7F1] tabular-nums">
            {Math.round(displayedCount * 0.44).toLocaleString('pt-PT')}
          </div>
        </div>
        <div className="rounded-lg bg-[#F0E9DE]/60 dark:bg-[#121110]/60 p-2 border border-[#DFD4C4]/50 dark:border-[#38332E]/50">
          <div className="text-xs text-[#7C7369] dark:text-[#A89F92]">Páginas de Vendas</div>
          <div className="font-mono text-sm sm:text-base font-semibold text-[#1B1917] dark:text-[#FAF7F1] tabular-nums">
            {Math.round(displayedCount * 0.36).toLocaleString('pt-PT')}
          </div>
        </div>
        <div className="rounded-lg bg-[#F0E9DE]/60 dark:bg-[#121110]/60 p-2 border border-[#DFD4C4]/50 dark:border-[#38332E]/50">
          <div className="text-xs text-[#7C7369] dark:text-[#A89F92]">Produtos Digitais</div>
          <div className="font-mono text-sm sm:text-base font-semibold text-[#1B1917] dark:text-[#FAF7F1] tabular-nums">
            {Math.round(displayedCount * 0.20).toLocaleString('pt-PT')}
          </div>
        </div>
      </div>

      {/* Live Activity Feed Stream Item */}
      {activeLaunch && (
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#F0E9DE] dark:bg-[#24211E] border border-[#DFD4C4] dark:border-[#38332E] text-xs transition-all duration-300">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#E8D3BC] dark:bg-[#38332E] text-[#1B1917] dark:text-[#FAF7F1] font-semibold text-[10px]">
              {activeLaunch.category === 'app' ? 'APP' : activeLaunch.category === 'landing' ? 'LP' : 'PROD'}
            </span>
            <div className="truncate">
              <span className="font-semibold text-[#1B1917] dark:text-[#FAF7F1]">
                {activeLaunch.projectName}
              </span>
              <span className="text-[#7C7369] dark:text-[#A89F92] hidden sm:inline">
                {' '}— por {activeLaunch.creatorName} ({activeLaunch.location})
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 text-[#7C7369] dark:text-[#A89F92]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4C5B3C]"></span>
            <span>{activeLaunch.timeAgo}</span>
          </div>
        </div>
      )}

      {/* Toast Notification on user simulation */}
      {celebrationToast && (
        <div className="mt-3 p-3 rounded-lg bg-[#E8D3BC] dark:bg-[#2A231E] border border-[#DFD4C4] dark:border-[#38332E] text-[#1B1917] dark:text-[#FAF7F1] text-xs font-medium flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#4C5B3C] dark:text-[#A8C78A] shrink-0" />
          <span>{celebrationToast}</span>
        </div>
      )}

      {/* Simulation Modal for User Testing */}
      {showSimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-[#FAF7F1] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#DFD4C4] dark:border-[#38332E]">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#4C5B3C]" />
                <h3 className="font-serif text-lg font-bold text-[#1B1917] dark:text-[#FAF7F1]">
                  Simular Lançamento na Nexora
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSimModal(false)}
                className="text-[#7C7369] hover:text-[#1B1917] dark:hover:text-[#FAF7F1] text-sm p-1"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-xs text-[#7C7369] dark:text-[#A89F92] leading-relaxed">
              Experimente a sensação de colocar um novo projeto no ar. O contador grava o progresso localmente no navegador, garantindo que o seu histórico permanece guardado mesmo se a ligação for interrompida.
            </p>

            <form onSubmit={handleSimulateLaunch} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] mb-1">
                  Nome do Projeto ou Aplicação
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Gestor de Consultoria, App de Vendas..."
                  value={simProjectName}
                  onChange={(e) => setSimProjectName(e.target.value)}
                  className="w-full rounded-lg border border-[#DFD4C4] dark:border-[#38332E] bg-white dark:bg-[#24211E] px-3 py-2 text-sm text-[#1B1917] dark:text-[#FAF7F1] placeholder:text-[#7C7369] dark:placeholder:text-[#6A635B] focus:outline-none focus:border-[#4C5B3C] focus:ring-1 focus:ring-[#4C5B3C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] mb-1">
                    Tipo de Projeto
                  </label>
                  <select
                    value={simCategory}
                    onChange={(e) => setSimCategory(e.target.value as any)}
                    className="w-full rounded-lg border border-[#DFD4C4] dark:border-[#38332E] bg-white dark:bg-[#24211E] px-3 py-2 text-xs text-[#1B1917] dark:text-[#FAF7F1] focus:outline-none focus:border-[#4C5B3C]"
                  >
                    <option value="app">Aplicação Web</option>
                    <option value="landing">Página de Vendas</option>
                    <option value="product">Produto Digital</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B1917] dark:text-[#FAF7F1] mb-1">
                    Localização do Criador
                  </label>
                  <select
                    value={simCity}
                    onChange={(e) => setSimCity(e.target.value)}
                    className="w-full rounded-lg border border-[#DFD4C4] dark:border-[#38332E] bg-white dark:bg-[#24211E] px-3 py-2 text-xs text-[#1B1917] dark:text-[#FAF7F1] focus:outline-none focus:border-[#4C5B3C]"
                  >
                    <option value="Maputo">Maputo</option>
                    <option value="Matola">Matola</option>
                    <option value="Beira">Beira</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Luanda">Luanda</option>
                    <option value="Lisboa">Lisboa</option>
                  </select>
                </div>
              </div>

              {/* Quick suggestions */}
              <div className="pt-2">
                <span className="text-[11px] text-[#7C7369] dark:text-[#A89F92] block mb-1">Sugestões rápidas:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['SaaS Delivery Express', 'Página Vendas Ebook', 'Portal de Membros VIP'].map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setSimProjectName(sug)}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#F0E9DE] dark:bg-[#282522] text-[#3A3532] dark:text-[#DFD4C4] hover:bg-[#DFD4C4] dark:hover:bg-[#38332E] transition-colors"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#DFD4C4] dark:border-[#38332E]">
                <button
                  type="button"
                  onClick={handleResetCounter}
                  className="inline-flex items-center gap-1 text-[11px] text-[#7C7369] dark:text-[#A89F92] hover:text-red-500 transition-colors"
                  title="Repor contador para valor padrão"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Repor Padrão</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSimModal(false)}
                    className="px-3 py-2 text-xs font-medium text-[#3A3532] dark:text-[#DFD4C4] hover:text-[#1B1917] dark:hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSimulating}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#4C5B3C] hover:bg-[#3d4a30] rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    {isSimulating ? 'A Publicar...' : 'Simular Publicação em Direto'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
