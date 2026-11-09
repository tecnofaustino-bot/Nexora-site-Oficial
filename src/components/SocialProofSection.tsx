import React from 'react';
import { Quote, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

interface CreatorStory {
  id: string;
  name: string;
  role: string;
  location: string;
  project: string;
  category: string;
  quote: string;
  outcome: string;
  initials: string;
  avatarUrl: string;
}

export const SocialProofSection: React.FC = () => {
  const stories: CreatorStory[] = [
    {
      id: 'story-1',
      name: 'Carlos Mondlane',
      role: 'Consultor Financeiro & Criador',
      location: 'Maputo, Moçambique',
      project: 'Portal Saber+ Finanças',
      category: 'Produto Digital & Membros',
      quote:
        'Consegui estruturar o meu portal de consultoria e colocar uma página de vendas no ar sem precisar de contratar uma equipa técnica externa. O fluxo orientado da Nexora eliminou semanas de bloqueio.',
      outcome: 'Em produção contínua com checkout seguro integrado',
      initials: 'CM',
      avatarUrl:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="%23E8D3BC"/><circle cx="50" cy="40" r="18" fill="%239A5A28"/><path d="M22 86 C22 66, 35 60, 50 60 C65 60, 78 66, 78 86 Z" fill="%231B1917"/><circle cx="50" cy="40" r="14" fill="%23FAF7F1"/><circle cx="45" cy="39" r="2.5" fill="%231B1917"/><circle cx="55" cy="39" r="2.5" fill="%231B1917"/><path d="M46 47 Q50 50 54 47" stroke="%239A5A28" stroke-width="2" fill="none"/></svg>'
    },
    {
      id: 'story-2',
      name: 'Sara Viegas',
      role: 'Empreendedora Digital',
      location: 'Luanda, Angola',
      project: 'Academia Gestão Prática',
      category: 'Página de Vendas & Infoproduto',
      quote:
        'O que mais fez diferença para o meu público foi a velocidade de carregamento nos telemóveis e o checkout da Tutora Pay sem atrito. Os meus alunos compram diretamente pelo smartphone com confiança.',
      outcome: 'Mais de 400 acessos semanais e navegação 100% mobile',
      initials: 'SV',
      avatarUrl:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="%23DFD4C4"/><circle cx="50" cy="38" r="18" fill="%23B8763C"/><path d="M22 86 C22 64, 35 58, 50 58 C65 58, 78 64, 78 86 Z" fill="%234C5B3C"/><circle cx="50" cy="38" r="14" fill="%23FAF7F1"/><circle cx="45" cy="38" r="2.5" fill="%231B1917"/><circle cx="55" cy="38" r="2.5" fill="%231B1917"/><path d="M46 45 Q50 48 54 45" stroke="%234C5B3C" stroke-width="2" fill="none"/></svg>'
    },
    {
      id: 'story-3',
      name: 'João Pinheiro',
      role: 'Designer & Consultor Web',
      location: 'Nampula, Moçambique',
      project: 'Estúdio de Landing Pages PME',
      category: 'Aplicações & Páginas Comerciais',
      quote:
        'Utilizo o editor de páginas da Nexora para criar páginas para clientes locais. O design sai limpo, elegante e com blocos que realmente convertem, poupando metade do tempo de desenvolvimento.',
      outcome: 'Redução de 60% no tempo de entrega de cada projeto',
      initials: 'JP',
      avatarUrl:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="%23F0E9DE"/><circle cx="50" cy="39" r="18" fill="%233A3532"/><path d="M22 86 C22 65, 35 59, 50 59 C65 59, 78 65, 78 86 Z" fill="%231B1917"/><circle cx="50" cy="39" r="14" fill="%23FAF7F1"/><circle cx="45" cy="39" r="2.5" fill="%231B1917"/><circle cx="55" cy="39" r="2.5" fill="%231B1917"/><path d="M46 46 Q50 49 54 46" stroke="%233A3532" stroke-width="2" fill="none"/></svg>'
    }
  ];

  return (
    <section
      id="prova-social"
      className="py-16 sm:py-24 bg-[#F0E9DE] dark:bg-[#1B1917] border-b border-[#DFD4C4] dark:border-[#2E2A27] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4C5B3C] dark:text-[#A8C78A] bg-[#FAF7F1] dark:bg-[#282522] px-3 py-1 rounded-md border border-[#DFD4C4] dark:border-[#38332E]">
            Prova Social & Comunidade
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1917] dark:text-[#FAF7F1] tracking-tight text-balance">
            QUEM JÁ ESTÁ A TRANSFORMAR IDEIAS EM PROJETOS REAIS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
            Conhece as experiências de criadores, empreendedores e profissionais que utilizam o ecossistema da Nexora para estruturar e publicar soluções digitais.
          </p>
        </div>

        {/* Quantitative Metrics Bar (Unboxed text with subtle borders) */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] shadow-organic">
          <div className="p-2 sm:p-3">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1917] dark:text-[#FAF7F1] font-mono tabular-nums">
              +2.840
            </div>
            <div className="text-xs text-[#7C7369] dark:text-[#A89F92] mt-1 font-medium">
              Projetos e páginas criados na plataforma
            </div>
          </div>

          <div className="p-2 sm:p-3">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1917] dark:text-[#FAF7F1] font-mono tabular-nums">
              &lt; 48h
            </div>
            <div className="text-xs text-[#7C7369] dark:text-[#A89F92] mt-1 font-medium">
              Tempo médio até ao primeiro deploy de projeto
            </div>
          </div>

          <div className="p-2 sm:p-3">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#4C5B3C] dark:text-[#A8C78A] font-mono tabular-nums">
              99.8%
            </div>
            <div className="text-xs text-[#7C7369] dark:text-[#A89F92] mt-1 font-medium">
              Estabilidade em dispositivos Android e iOS
            </div>
          </div>

          <div className="p-2 sm:p-3">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#9A5A28] dark:text-[#B8763C] font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-[#7C7369] dark:text-[#A89F92] mt-1 font-medium">
              Checkout seguro via Tutora Pay
            </div>
          </div>
        </div>

        {/* 3 Real Creator Testimonials Grid (Written Testimonials Only) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-[#FAF7F1] dark:bg-[#221F1C] border border-[#DFD4C4] dark:border-[#38332E] p-6 sm:p-7 shadow-organic transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg flex flex-col justify-between"
            >
              <div>
                {/* Creator Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E8D3BC] dark:bg-[#2E2A27] text-[#1B1917] dark:text-[#FAF7F1] font-serif font-bold text-sm flex items-center justify-center border border-[#DFD4C4] dark:border-[#38332E] shrink-0 shadow-xs">
                    {story.avatarUrl ? (
                      <img
                        src={story.avatarUrl}
                        alt={`Foto de perfil de ${story.name}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                    ) : (
                      <span>{story.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1B1917] dark:text-[#FAF7F1] leading-tight">
                      {story.name}
                    </h3>
                    <div className="text-xs text-[#7C7369] dark:text-[#A89F92] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#9A5A28]" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="inline-block px-2.5 py-1 rounded bg-[#F0E9DE] dark:bg-[#282522] text-[11px] font-medium text-[#3A3532] dark:text-[#DFD4C4] border border-[#DFD4C4]/60 dark:border-[#38332E] mb-3">
                  {story.project} · {story.category}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Concrete Outcome / Adjacency Proof */}
              <div className="mt-5 pt-3.5 border-t border-[#DFD4C4]/60 dark:border-[#38332E]/60 flex items-center gap-2 text-xs text-[#4C5B3C] dark:text-[#A8C78A] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{story.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-8 text-center text-xs text-[#7C7369] dark:text-[#A89F92] max-w-2xl mx-auto">
          Relatos fundamentados em casos de utilização da plataforma. Cada percurso de negócio é único e os resultados comerciais dependem diretamente do empenho e da relevância da oferta de cada criador.
        </div>
      </div>
    </section>
  );
};
