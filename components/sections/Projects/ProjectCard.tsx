import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
            flex-1
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-primary/40
        "
    >
      {/* Banner */}

      <div
        className="
          relative
          h-64
          overflow-hidden
          border-b
          border-white/10
        "
      >
        <img
          src={project.image}
          alt={project.name}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />

        {/* Categoria */}
        <div
          className="
            absolute
            right-8
            top-8
            rounded-full
            border
            border-white/20
            bg-black/30
            px-3
            py-1
            text-xs
            text-white
            backdrop-blur
          "
        >
          {project.category}
        </div>

        {/* Nome */}
        <div
          className="
            absolute
            bottom-8
            left-8
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            {project.name}
          </h2>
        </div>
      </div>

      {/* Conteúdo */}

      <div className="space-y-8 p-8">
        {/* Sobre */}

        <div>
          <h3 className="text-lg font-semibold">Sobre o projeto</h3>

          <p
            className="
              mt-4
              leading-8
              text-muted-foreground
            "
          >
            {project.description}
          </p>
        </div>

        <div className="border-t border-white/10" />

        {/* Participação */}

        <div>
          <h3 className="mb-4 text-lg font-semibold">Minha participação</h3>

          <ul className="space-y-3">
            {project.role.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  text-muted-foreground
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-primary
                  "
                />

                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10" />

        {/* Tecnologias */}

        <div>
          <h3 className="mb-4 text-lg font-semibold">Tecnologias</h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-3
                  py-1
                  text-xs
                  text-primary
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* Links */}

        {(project.github || project.demo) && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                        text-sm
                        text-primary
                        transition-colors
                        hover:text-primary/80
                        "
                >
                  GitHub →
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                        text-sm
                        text-primary
                        transition-colors
                        hover:text-primary/80
                        "
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
