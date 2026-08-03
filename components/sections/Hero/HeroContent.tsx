import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaSalesforce,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground">
        Olá, eu sou
      </p>

      <h1 className="mt-6 text-6xl font-bold tracking-tight lg:text-7xl">
        <span className="text-primary">José Marcondes</span>
      </h1>

      <h2 className="mt-5 text-2xl font-medium lg:text-3xl text-primary-foreground flex items-center gap-2">
        Salesforce Developer <FaSalesforce size={35} />
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
        Desenvolvedor especializado em Salesforce, Apex, Lightning Web
        Components e JavaScript. Construindo soluções escaláveis com foco em
        performance, qualidade e experiência do usuário.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          size="lg"
          className="
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                    "
        >
          Ver Projetos
          <FaArrowRight size={20} />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="
                    transition-all
                    duration-300
                    hover:bg-white/5
                    hover:border-primary
                    "
        >
          Entrar em Contato
        </Button>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <a
          href="https://linkedin.com/in/seu-link"
          target="_blank"
          rel="noopener noreferrer"
          className="
                    flex items-center gap-2
                    text-muted-foreground
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-primary
                    "
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
          LinkedIn
        </a>

        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="
                    flex items-center gap-2
                    text-muted-foreground
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-primary
                    "
          aria-label="GitHub"
        >
          <FaGithub size={22} />
          GitHub
        </a>

        <a
          href="mailto:seu@email.com"
          className="
                    flex items-center gap-2
                    text-muted-foreground
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-primary
                    "
          aria-label="Email"
        >
          <MdEmail size={22} />
          Email
        </a>
      </div>
    </div>
  );
}
