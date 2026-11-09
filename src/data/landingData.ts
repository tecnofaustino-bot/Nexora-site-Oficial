/**
 * Nexora Landing Page & Conversion Data
 * Official acquisition URL: https://pay.tutora.co.mz/af52033ef6974f26922de0a6faf5bb35
 */

export const OFFICIAL_CHECKOUT_URL = "https://pay.tutora.co.mz/af52033ef6974f26922de0a6faf5bb35";

export interface CreatorLaunch {
  id: string;
  projectName: string;
  category: 'app' | 'landing' | 'product';
  categoryLabel: string;
  creatorName: string;
  location: string;
  timeAgo: string;
  type: string;
}

export const INITIAL_LAUNCH_COUNT = 2847;

export const RECENT_CREATOR_LAUNCHES: CreatorLaunch[] = [
  {
    id: "l1",
    projectName: "Gestor de Restaurante Web",
    category: "app",
    categoryLabel: "Aplicação Web",
    creatorName: "Mateus T.",
    location: "Maputo",
    timeAgo: "há 2 min",
    type: "App SaaS"
  },
  {
    id: "l2",
    projectName: "Página de Lançamento Imobiliário",
    category: "landing",
    categoryLabel: "Página de Vendas",
    creatorName: "Sara V.",
    location: "Luanda",
    timeAgo: "há 7 min",
    type: "Landing Page"
  },
  {
    id: "l3",
    projectName: "Academia de Finanças Pessoais",
    category: "product",
    categoryLabel: "Produto Digital",
    creatorName: "Carlos M.",
    location: "Beira",
    timeAgo: "há 14 min",
    type: "Portal de Conteúdo"
  },
  {
    id: "l4",
    projectName: "Plataforma de Agendamentos B2B",
    category: "app",
    categoryLabel: "Aplicação Web",
    creatorName: "Érica D.",
    location: "Lisboa",
    timeAgo: "há 22 min",
    type: "App SaaS"
  },
  {
    id: "l5",
    projectName: "Página de Vendas de Curso de Design",
    category: "landing",
    categoryLabel: "Página de Vendas",
    creatorName: "João P.",
    location: "Nampula",
    timeAgo: "há 31 min",
    type: "Landing Page"
  },
  {
    id: "l6",
    projectName: "Catálogo Interativo de Peças",
    category: "product",
    categoryLabel: "Produto Digital",
    creatorName: "Armando S.",
    location: "Matola",
    timeAgo: "há 45 min",
    type: "E-Commerce / Vitrine"
  }
];

export const PROBLEM_CARDS = [
  {
    id: "prob-1",
    question: "Não sabes programar?",
    description: "Tens uma ideia, mas não sabes como transformar o conceito numa aplicação funcional.",
    icon: "code"
  },
  {
    id: "prob-2",
    question: "Não sabes criar uma página de vendas?",
    description: "Tens um produto, mas precisas de uma apresentação profissional para o divulgar e comercializar.",
    icon: "layout"
  },
  {
    id: "prob-3",
    question: "Queres criar um negócio digital?",
    description: "Procuras desenvolver uma solução própria em vez de depender exclusivamente de produtos de outras pessoas.",
    icon: "trending-up"
  },
  {
    id: "prob-4",
    question: "Demasiadas ferramentas e processos?",
    description: "Queres organizar melhor o teu processo de criação e reduzir tarefas desnecessárias.",
    icon: "layers"
  }
];

export const SOLUTION_PILLARS = [
  {
    id: "criar",
    label: "CRIAR",
    title: "Transforma ideias em projetos digitais",
    description: "Estrutura a lógica da tua ideia, define as funcionalidades essenciais e dá vida à tua aplicação ou ferramenta de forma visual e guiada."
  },
  {
    id: "publicar",
    label: "PUBLICAR",
    title: "Prepara as tuas soluções para serem apresentadas ao público",
    description: "Constrói páginas de vendas persuasivas com design responsivo, checkout integrado e layout otimizado para computadores e telemóveis."
  },
  {
    id: "crescer",
    label: "CRESCER",
    title: "Desenvolve produtos e explora oportunidades de negócio",
    description: "Acompanha métricas, otimiza as tuas taxas de conversão e constrói uma operação sustentável com os teus próprios ativos digitais."
  }
];

export const FEATURES = [
  {
    id: "feat-1",
    title: "Criação de aplicações",
    description: "Desenvolve projetos de aplicações com um processo orientado, desde a definição da ideia até à estruturação das funcionalidades e da experiência do utilizador.",
    highlights: ["Fluxos passo a passo", "Lógica visual sem código complexo", "Exportação e publicação rápida"]
  },
  {
    id: "feat-2",
    title: "Planeamento inteligente de projetos",
    description: "Organiza os requisitos do teu projeto, identifica necessidades, define funcionalidades e estrutura uma solução com um planeamento mais completo.",
    highlights: ["Mapeamento de escopo", "Estruturação de dados", "Checklist de viabilidade"]
  },
  {
    id: "feat-3",
    title: "Editor visual",
    description: "Trabalha na organização e personalização dos teus projetos através de ferramentas de edição visual, de acordo com os recursos disponibilizados pela plataforma.",
    highlights: ["Interface intuitiva", "Ajuste fino de componentes", "Visualização em tempo real"]
  },
  {
    id: "feat-4",
    title: "Criação de páginas de vendas",
    description: "Desenvolve páginas de vendas e landing pages modernas, com secções profissionais, apresentação estratégica de benefícios e chamadas à ação.",
    highlights: ["Blocos focados em conversão", "Gatilhos visuais claros", "Integração simplificada com checkout"]
  },
  {
    id: "feat-5",
    title: "Criação de produtos digitais",
    description: "Explora a possibilidade de transformar conhecimentos, ideias e oportunidades em produtos digitais que possam ser apresentados e comercializados online.",
    highlights: ["Monetização direta", "Estruturação modular", "Formatos diversificados"]
  },
  {
    id: "feat-6",
    title: "Experiência orientada para diferentes níveis",
    description: "Uma plataforma pensada tanto para quem está a começar do zero como para quem já possui experiência prática no universo digital.",
    highlights: ["Zero pré-requisitos técnicos", "Suporte para fluxos avançados", "Curva de aprendizagem rápida"]
  }
];

export const TARGET_AUDIENCE = [
  {
    id: "target-1",
    title: "Para quem está a começar",
    description: "Nunca criaste uma aplicação ou produto digital? Começa a explorar ferramentas que ajudam a organizar as tuas ideias e a dar os primeiros passos.",
    badge: "Iniciantes"
  },
  {
    id: "target-2",
    title: "Para quem quer empreender",
    description: "Desenvolve projetos próprios e procura oportunidades para construir um negócio através da Internet sem intermediários complexos.",
    badge: "Empreendedores"
  },
  {
    id: "target-3",
    title: "Para profissionais digitais",
    description: "Melhora o teu processo de trabalho e explora novas formas de desenvolver soluções completas para clientes e projetos pessoais.",
    badge: "Freelancers e Agências"
  },
  {
    id: "target-4",
    title: "Para quem procura rendimento extra",
    description: "Constrói competências digitais valiosas e desenvolve produtos que possam abrir novas oportunidades concretas de rendimento.",
    badge: "Nova Fonte de Rendimento"
  }
];

export const COMPARISON_DATA = {
  without: [
    "Dificuldade constante em estruturar e validar as ideias.",
    "Processos de criação desorganizados e demorados.",
    "Necessidade de subscrever e alternar entre várias ferramentas dispersas.",
    "Dificuldade em construir uma apresentação profissional para comercializar.",
    "Mais obstáculos técnicos que impedem transformar conceitos em projetos reais."
  ],
  withNexora: [
    "Processo de criação guiado e estruturado do início ao fim.",
    "Organização clara das necessidades, regras e funcionalidades.",
    "Ferramentas integradas para desenvolver projetos digitais em poucas etapas.",
    "Criação ágil de páginas de vendas de alto padrão visual.",
    "Um ecossistema centralizado para transformar ideias em soluções reais."
  ]
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Define a tua ideia",
    description: "Identifica o produto, aplicação ou solução digital que pretendes desenvolver, alinhando o objetivo ao teu público."
  },
  {
    step: "02",
    title: "Utiliza a Nexora",
    description: "Explora as ferramentas disponíveis, organiza os requisitos essenciais e desenvolve a estrutura do teu projeto no editor."
  },
  {
    step: "03",
    title: "Prepara e apresenta a tua solução",
    description: "Trabalha na finalização do projeto e prepara a sua apresentação profissional ao público através de páginas de venda."
  }
];

export const BUSINESS_OPPORTUNITIES = [
  "Criar e comercializar aplicações web e mobile.",
  "Desenvolver ferramentas digitais para nichos específicos.",
  "Criar produtos digitais informacionais e sistemas para mercados locais.",
  "Prestar serviços profissionais de desenvolvimento e automação para clientes.",
  "Construir páginas de vendas de alta conversão para produtos próprios ou terceiros.",
  "Explorar o marketing digital com soluções completas prontas a vender."
];

export const FAQ_ITEMS = [
  {
    question: "1. Preciso de saber programar para utilizar a Nexora?",
    answer: "A Nexora foi concebida para tornar o processo de criação mais acessível e orientado. O nível de conhecimento técnico necessário varia conforme a complexidade do teu projeto, mas grande parte das ferramentas conta com editores visuais e fluxos estruturados para quem está a começar do zero."
  },
  {
    question: "2. A Nexora é apenas para profissionais?",
    answer: "Não. A proposta da plataforma é servir diferentes níveis de experiência. Seja para um iniciante a dar os primeiros passos no digital, seja para um freelancer ou criador experiente que busca acelerar a produção de aplicações e páginas de vendas."
  },
  {
    question: "3. Que tipos de produtos posso desenvolver?",
    answer: "Podes explorar a criação de aplicações digitais, ferramentas interativas, infoprodutos estruturados e páginas de vendas completas, de acordo com as funcionalidades disponíveis na plataforma."
  },
  {
    question: "4. Posso utilizar a Nexora para criar uma página de vendas?",
    answer: "Sim. A criação de páginas de vendas e landing pages profissionais faz parte da proposta central da Nexora, com secções estratégicas pensadas para comunicar benefícios e guiar o cliente até à compra."
  },
  {
    question: "5. Posso utilizar a Nexora para criar um negócio online?",
    answer: "Podes utilizar as ferramentas para desenvolver produtos e soluções que possam ser comercializados online. A concretização e sucesso de um negócio dependem também da validação da ideia, da procura do mercado, da estratégia de divulgação e da gestão."
  },
  {
    question: "6. A Nexora garante que vou ganhar dinheiro?",
    answer: "Não. Nenhuma ferramenta pode garantir vendas ou rendimentos automáticos. A Nexora oferece recursos para criação e desenvolvimento de soluções digitais, mas os resultados comerciais dependem de fatores de mercado, qualidade da oferta e do trabalho dedicado de cada utilizador."
  },
  {
    question: "7. Como posso adquirir o acesso?",
    answer: "Basta clicar em qualquer botão de acesso nesta página. Serás direcionado com segurança para o checkout oficial na plataforma de pagamento Tutora Pay, onde poderás consultar todas as condições e concluir o teu pedido."
  },
  {
    question: "8. Onde posso consultar o preço e as condições de acesso?",
    answer: "As informações comerciais, formas de pagamento locais e condições de acesso vigentes são apresentadas de forma transparente diretamente na página oficial de checkout antes da conclusão da compra."
  }
];
