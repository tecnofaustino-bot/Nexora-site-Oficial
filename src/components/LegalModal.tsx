import React from 'react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-[#FAF7F1] dark:bg-[#1B1917] border border-[#DFD4C4] dark:border-[#38332E] p-6 sm:p-8 shadow-2xl text-[#1B1917] dark:text-[#FAF7F1] transition-colors">
        <div className="flex items-center justify-between pb-4 border-b border-[#DFD4C4] dark:border-[#38332E]">
          <h3 className="font-serif text-xl font-bold text-[#1B1917] dark:text-[#FAF7F1]">
            {type === 'terms'
              ? 'Termos e Condições de Utilização'
              : type === 'privacy'
              ? 'Política de Privacidade e Proteção de Dados'
              : 'Aviso Legal de Responsabilidade e Resultados'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-[#7C7369] dark:text-[#A89F92] hover:text-[#1B1917] dark:hover:text-[#FAF7F1] p-1 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm text-[#3A3532] dark:text-[#DFD4C4] leading-relaxed">
          {type === 'terms' && (
            <>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">1. Aceitação dos Termos:</strong> Ao aceder e utilizar a plataforma Nexora, o utilizador concorda em cumprir e vincular-se aos presentes Termos de Serviço.
              </p>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">2. Descrição dos Serviços:</strong> A Nexora fornece software como serviço (SaaS) com ferramentas para criação de aplicações web, páginas de vendas e estruturação de produtos digitais.
              </p>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">3. Aquisição e Acesso:</strong> O acesso comercial é processado com total segurança através da plataforma parceira Tutora Pay. As condições contratuais, tempo de subscrição e especificações são detalhadas no checkout oficial.
              </p>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">4. Propriedade Intelectual:</strong> Todos os projetos, textos, códigos e páginas criados pelo utilizador dentro da plataforma permanecem como propriedade intelectual exclusiva do respetivo criador.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">1. Compromisso com a Privacidade:</strong> Respeitamos a tua privacidade e protegemos com rigor os teus dados cadastrais e as informações dos teus projetos.
              </p>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">2. Recolha de Dados:</strong> Recolhemos apenas as informações estritamente necessárias para a gestão do teu acesso, suporte técnico e melhoria contínua da experiência de utilização da ferramenta.
              </p>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">3. Segurança de Pagamento:</strong> Todos os dados de transações financeiras são processados sob criptografia ponta a ponta pela entidade de processamento Tutora Pay, sem armazenamento de dados de cartões ou credenciais bancárias nos servidores locais da Nexora.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                <strong className="text-[#1B1917] dark:text-[#FAF7F1]">Aviso de Resultados e Isenção Financeira:</strong>
              </p>
              <p>
                A Nexora é uma plataforma exclusivamente tecnológica que fornece ferramentas de software para o desenvolvimento de aplicações, páginas e soluções digitais.
              </p>
              <p>
                Em conformidade com as boas práticas de publicidade e direito do consumidor, deixamos expressamente claro que a utilização da Nexora não constitui promessa de enriquecimento, ganho garantido ou garantia de lucros.
              </p>
              <p>
                Os resultados comerciais e financeiros de qualquer empreendimento digital dependem de múltiplos fatores externos, incluindo a qualidade da ideia, demanda de mercado, estratégia de distribuição, esforço individual e execução prática do utilizador.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#DFD4C4] dark:border-[#38332E] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#1B1917] text-white text-xs font-semibold hover:bg-[#3A3532] dark:bg-[#282522] dark:hover:bg-[#38332E] dark:text-[#FAF7F1] transition-colors"
          >
            Compreendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
