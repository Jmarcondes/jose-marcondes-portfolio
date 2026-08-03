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
    id: "portfolio",

    name: "Portfólio Pessoal",

    category: "Pessoal",

    image: "/projects/portfolio.png",

    description:
      "Portfólio desenvolvido para apresentar minha trajetória profissional, experiências e projetos utilizando uma experiência visual inspirada no ecossistema Apple.",

    role: [
      "Arquitetura da aplicação",
      "Desenvolvimento Front-end",
      "UI/UX",
      "Responsividade",
    ],

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    github: "https://github.com",
  },
];
