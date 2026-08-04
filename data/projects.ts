export interface Project {
  id: string;

  name: string;

  category: "Pessoal" | "Profissional" | "Open Source" | "Estudo";

  image: string;

  description: string;

  role: string[];

  technologies: string[];

  github?: string;

  demo?: string;
}

export const projects: Project[] = [
  {
    id: "consumer-goods",

    name: "Multinacional de Bens de Consumo",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para o processo comercial de uma multinacional do setor de bens de consumo, utilizando Sales Cloud e Commerce Cloud para gerenciamento de Leads, Oportunidades, Clientes e diferentes cenários de Price Books.",

    role: [
      "Desenvolvimento de componentes Aura",
      "Implementação de Apex, Triggers e Batchs",
      "Desenvolvimento de páginas Visualforce",
      "Criação de funcionalidades customizadas",
      "Modelagem de Objetos, Campos e Regras de Validação",
    ],

    technologies: [
      "Sales Cloud",
      "Commerce Cloud",
      "Apex",
      "Aura Components",
      "Visualforce",
      "SOQL",
      "Batch Apex",
      "Triggers",
    ],
  },
  {
    id: "healthcare",

    name: "Assistência Médica",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para comercialização de planos de assistência médica e gerenciamento interno dos processos da empresa, utilizando Sales Cloud e Commerce Cloud para apoiar o fluxo comercial e operacional.",

    role: [
      "Desenvolvimento de componentes Aura",
      "Implementação de Apex, Triggers e Batch Apex",
      "Criação de funcionalidades customizadas",
      "Modelagem de Objetos, Campos e Regras de Validação",
      "Versionamento de código utilizando Git",
    ],

    technologies: [
      "Sales Cloud",
      "Commerce Cloud",
      "Apex",
      "Aura Components",
      "Visualforce",
      "SOQL",
      "Batch Apex",
      "Triggers",
      "Git",
    ],
  },
  {
    id: "bank",

    name: "Banco",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para integração da operação de telemarketing de um banco ao Salesforce, utilizando Sales Cloud e Service Cloud para apoiar o atendimento e os processos comerciais.",

    role: [
      "Levantamento de requisitos junto ao cliente",
      "Elaboração de propostas de solução",
      "Desenvolvimento de telas e funcionalidades customizadas",
      "Implementação de Apex, Triggers e Batch Apex",
      "Desenvolvimento de integrações REST",
    ],

    technologies: [
      "Sales Cloud",
      "Service Cloud",
      "Apex",
      "Aura Components",
      "REST API",
      "Batch Apex",
      "Triggers",
      "SOQL",
    ],
  },
  {
    id: "bovine-ivf",

    name: "Fertilização In Vitro de Bovinos",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para digitalização do processo de fertilização in vitro de bovinos, acompanhando todo o ciclo reprodutivo, desde a coleta dos oócitos até o acompanhamento gestacional. O objetivo foi substituir processos realizados em planilhas por uma solução centralizada no Salesforce.",

    role: [
      "Levantamento de requisitos junto ao cliente",
      "Proposição de soluções aderentes ao processo de negócio",
      "Desenvolvimento utilizando Flow, Screen Flow e Apex",
      "Implementação de Batch Apex e Processos de Aprovação",
      "Configuração de Perfis, Papéis e permissões",
      "Construção e configuração da Experience Cloud",
    ],

    technologies: [
      "Sales Cloud",
      "Commerce Cloud",
      "Experience Cloud",
      "Apex",
      "Flow",
      "Screen Flow",
      "Batch Apex",
      "Approval Processes",
    ],
  },
  {
    id: "energy-company",

    name: "Companhia Energética",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para sustentação e evolução de uma solução já em produção, atuando na correção de bugs, implementação de melhorias, adaptações de regras de negócio e manutenção de integrações para atender às necessidades do cliente.",

    role: [
      "Correção de bugs e sustentação da aplicação",
      "Implementação de melhorias e novas regras de negócio",
      "Desenvolvimento utilizando Flow, Screen Flow e Apex",
      "Implementação de Batch Apex e automações",
      "Manutenção de integrações SOAP",
      "Evolução contínua da plataforma",
    ],

    technologies: [
      "Sales Cloud",
      "Commerce Cloud",
      "Experience Cloud",
      "Integration Cloud",
      "Apex",
      "Flow",
      "Screen Flow",
      "Process Builder",
      "Batch Apex",
      "SOAP",
    ],
  },
  {
    id: "bank-omnichannel",

    name: "Banco",

    category: "Profissional",

    image: "/projects/placeholder.png",

    description:
      "Projeto Salesforce voltado para sustentação e evolução da plataforma de atendimento de um banco, utilizando Service Cloud e Omnichannel para suportar o atendimento ao cliente. O projeto também envolveu automações, integrações e implementação de soluções para otimizar a experiência dos usuários.",

    role: [
      "Correção de bugs e evolução contínua da plataforma",
      "Implementação de chatbot utilizando Einstein Bot",
      "Desenvolvimento de APIs REST no Salesforce",
      "Integração com serviços internos através de APIs e Gateway",
      "Consumo de APIs internas do banco",
      "Implementação de melhorias no fluxo de atendimento utilizando Omnichannel",
    ],

    technologies: [
      "Sales Cloud",
      "Service Cloud",
      "Omnichannel",
      "Einstein Bot",
      "Natural Language Processing (NLP)",
      "Apex",
      "REST API",
      "JSON",
      "SOQL",
    ],
  },
  {
    id: "portfolio",

    name: "Portfólio Pessoal",

    category: "Pessoal",

    image: "/projects/placeholder.png",

    description:
      "Portfólio desenvolvido para apresentar minha trajetória profissional, experiências e projetos utilizando uma experiência visual inspirada no ecossistema Apple.",

    role: [
      "Arquitetura da aplicação",
      "Desenvolvimento Front-end",
      "UI/UX",
      "Responsividade",
    ],

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    github: "https://github.com/Jmarcondes/jose-marcondes-portfolio",
  },
  {
    id: "menestrel-bot",

    name: "Menestrel Bot",

    category: "Estudo",

    image: "/projects/placeholder.png",

    description:
      "Bot para Discord desenvolvido para automatizar funcionalidades do servidor 'Falha Crítica', oferecendo reprodução de músicas, comandos personalizados e integração com a API do Discord através de uma arquitetura modular em Node.js.",

    role: [
      "Arquitetura da aplicação",
      "Desenvolvimento de comandos Slash",
      "Integração com a API do Discord",
      "Implementação de sistema de reprodução de música",
      "Organização do projeto com estrutura modular",
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "Discord.js",
      "Discord API",
      "FFmpeg",
      "Play-dl",
      "Git",
    ],

    github: "https://github.com/Jmarcondes/menestrel-bot",
  },
];
