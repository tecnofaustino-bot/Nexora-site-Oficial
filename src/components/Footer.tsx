import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/landingData';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#FAF7F1] dark:bg-[#0E0D0C] border-t border-[#DFD4C4] dark:border-[#2E2A27] pt-14 pb-20 text-[#3A3532] dark:text-[#DFD4C4] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#DFD4C4] dark:border-[#2E2A27]">
          {/* Brand & Slogan (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] p-0.5 shadow-xs shrink-0">
                <img
                  src="/assets/aistudio/Nexora__Inova__o_em__rbita_ea56f470.png"
                  alt="Logótipo Nexora"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1B1917] dark:text-[#FAF7F1]">
                Nexora
              </span>
            </div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#9A5A28]">
              Crie. Publique. Cresça.
            </div>
            <p className="text-sm text-[#7C7369] dark:text-[#A89F92] max-w-sm leading-relaxed">
              Plataforma SaaS para criação de produtos digitais, aplicações web e páginas de vendas de alta conversão. Criada para aproximar ideias, tecnologia e negócios digitais reais.
            </p>
          </div>

          {/* Quick Internal Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B1917] dark:text-[#FAF7F1] block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm text-[#7C7369] dark:text-[#A89F92]">
              <li>
                <a href="#problema" className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors">
                  O Desafio de Criar
                </a>
              </li>
              <li>
                <a href="#solucao" className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors">
                  A Solução Nexora
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors">
                  Demonstração Visual
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust Policies (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B1917] dark:text-[#FAF7F1] block">
              Termos e Segurança
            </span>
            <ul className="space-y-2 text-sm text-[#7C7369] dark:text-[#A89F92]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors text-left"
                >
                  Termos e Condições de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors text-left"
                >
                  Aviso Legal de Rendimentos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-analytics-monitor'))}
                  className="hover:text-[#1B1917] dark:hover:text-[#FAF7F1] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Métricas & Monitorização</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#9A5A28]/20 text-[#9A5A28] dark:text-[#E8D3BC] font-mono font-semibold">
                    Live
                  </span>
                </button>
              </li>
              <li className="pt-1">
                <a
                  href={OFFICIAL_CHECKOUT_URL}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A5A28] dark:text-[#B8763C] hover:underline"
                >
                  <span>Plataforma Oficial de Pagamento Tutora Pay</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#F0E9DE] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] text-xs text-[#7C7369] dark:text-[#A89F92] leading-relaxed">
          <p>
            <strong className="text-[#1B1917] dark:text-[#FAF7F1]">Aviso Legal Importante:</strong> A Nexora é uma ferramenta de tecnologia que viabiliza o desenvolvimento e a publicação de aplicações e páginas de vendas. Os resultados financeiros não são garantidos e dependem exclusivamente da qualidade do produto desenvolvido, da aceitação do mercado, da estratégia de divulgação e do trabalho empreendido por cada utilizador.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C7369] dark:text-[#A89F92]">
          <p>© 2026 Nexora. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com foco em alta conversão e integridade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
