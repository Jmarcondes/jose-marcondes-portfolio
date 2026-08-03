import { Card } from "@/components/ui/card";

import { MdDescription } from "react-icons/md";

export default function DeveloperReadme() {
  return (
    <Card
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/30
        hover:shadow-blue-500/10
        shadow-2xl
        max-w-xl
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <MdDescription size={20} className="text-primary" />

          <span className="font-medium">README.md</span>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            text-muted-foreground
          "
        >
          Last updated: Today
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Markdown */}
      <div className="px-10 py-9 font-mono text-[15px] leading-8">
        {/* Título */}
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            <span className="mr-2 text-primary">#</span>
            José Marcondes B. Júnior
          </h3>

          <p className="mt-5 text-muted-foreground">
            Desenvolvedor Salesforce focado na criação de soluções escaláveis.
          </p>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10" />

        {/* Current Focus */}
        <div>
          <h4 className="mt-3 mb-4 text-lg font-semibold">
            <span className="mr-2 text-primary">##</span>
            Current Focus
          </h4>

          <ul className="space-y-2">
            <li>
              <span className="mr-3 text-primary">-</span>
              Salesforce Development
            </li>

            <li>
              <span className="mr-3 text-primary">-</span>
              React & Next.js
            </li>

            <li>
              <span className="mr-3 text-primary">-</span>
              AI for Software Development
            </li>
          </ul>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10" />

        {/* Philosophy */}
        <div>
          <h4 className="mt-3 mb-4 text-lg font-semibold">
            <span className="mr-2 text-primary">##</span>
            Philosophy
          </h4>

          <p className="text-muted-foreground">
            Escrever código limpo, componentizado e escalável, sempre
            priorizando a experiência do usuário e a qualidade do software.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 text-primary">---</div>
      </div>
    </Card>
  );
}
