import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ComparisonSection } from './components/ComparisonSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BusinessOpportunitySection } from './components/BusinessOpportunitySection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { LegalModal } from './components/LegalModal';
import { FadeUp } from './components/FadeUp';
import { ThemeProvider } from './context/ThemeContext';
import { AnalyticsMonitor } from './components/AnalyticsMonitor';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF7F1] dark:bg-[#121110] text-[#3A3532] dark:text-[#DFD4C4] flex flex-col font-sans selection:bg-[#E8D3BC] dark:selection:bg-[#9A5A28] selection:text-[#1B1917] dark:selection:text-white transition-colors">
        {/* 3-Zone Clean Top Navigation */}
        <TopNav />

      {/* Main Page Flow (Wrapped with smooth 300ms organic Fade-Up animations) */}
      <main className="flex-1">
        {/* Section 1: Hero Section + Dynamic Creator Product Launch Counter */}
        <FadeUp>
          <HeroSection />
        </FadeUp>

        {/* Section 2: Identificação do Problema */}
        <FadeUp>
          <ProblemSection />
        </FadeUp>

        {/* Section 3: Apresentação da Solução Nexora */}
        <FadeUp>
          <SolutionSection />
        </FadeUp>

        {/* Section 4: Funcionalidades e Benefícios */}
        <FadeUp>
          <FeaturesSection />
        </FadeUp>

        {/* Section 5: Para Quem é a Nexora */}
        <FadeUp>
          <TargetAudienceSection />
        </FadeUp>

        {/* Section 6: Comparação Sem e Com a Nexora */}
        <FadeUp>
          <ComparisonSection />
        </FadeUp>

        {/* Section 7: Como Funciona (3 Passos) */}
        <FadeUp>
          <HowItWorksSection />
        </FadeUp>

        {/* Section 8: Oportunidades de Negócio Digital */}
        <FadeUp>
          <BusinessOpportunitySection />
        </FadeUp>

        {/* Section 9: Demonstração Visual do Produto */}
        <FadeUp>
          <ProductShowcaseSection />
        </FadeUp>

        {/* Prova Social & Casos de Criadores Reais */}
        <FadeUp>
          <SocialProofSection />
        </FadeUp>

        {/* Section 10: Oferta e Acesso */}
        <FadeUp>
          <OfferSection />
        </FadeUp>

        {/* Section 11: Perguntas Frequentes (FAQ Acordeão) */}
        <FadeUp>
          <FaqSection />
        </FadeUp>

        {/* Section 12: Chamada Final de Alta Conversão */}
        <FadeUp>
          <FinalCtaSection />
        </FadeUp>
      </main>

      {/* Section 13: Rodapé Profissional */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Mobile-Only Sticky CTA Bar (triggers after scroll) */}
      <MobileStickyCta />

      {/* Real-time Analytics & Section/CTA Monitoring System */}
      <AnalyticsMonitor />

      {/* Terms, Privacy and Disclaimer Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  </ThemeProvider>
);
}
