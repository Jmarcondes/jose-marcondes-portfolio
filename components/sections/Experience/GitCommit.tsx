import { Card } from "@/components/ui/card";

interface GitCommitProps {
  hash: string;
  branch?: string;
  date: string;
  title: string;
  company: string;
  period: string;

  description: string;

  technologies?: string[];

  industries?: string[];

  learning?: string[];
}

export default function GitCommit({
  hash,
  branch = "main",
  date,
  title,
  company,
  period,
  description,
  technologies,
  industries,
  learning,
}: GitCommitProps) {
  const isHead = hash === "HEAD";

  return (
    <Card
      className="
        flex-1
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
      "
    >
      {/* Git Header */}
      <div className="border-b border-white/10 px-6 py-5 font-mono text-sm">
        <p>
          <span className="text-primary">commit</span>{" "}
          <span
            className={
              isHead ? "font-semibold text-green-400" : "text-foreground"
            }
          >
            {hash}
          </span>
          <span className="ml-2 text-muted-foreground">({branch})</span>
        </p>

        <p className="mt-3 text-muted-foreground">Author: José Marcondes</p>

        <p className="text-muted-foreground">Date:&nbsp;&nbsp;&nbsp;{date}</p>

        <p className="mt-5 font-medium text-primary">
          {"    "}feat: {title}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 p-8">
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>

          <p className="mt-1 text-sm text-muted-foreground">{period}</p>
        </div>

        <p className="leading-8 text-muted-foreground">{description}</p>

        {technologies && (
          <div className="space-y-3">
            <p
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-primary
        "
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
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
        )}

        {industries && (
          <div className="space-y-3">
            <p
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-primary
        "
            >
              Industries
            </p>

            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-1
              text-xs
              text-muted-foreground
            "
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        )}

        {learning && (
          <div className="space-y-3">
            <p
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-green-400
        "
            >
              Currently Learning
            </p>

            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-3
              py-1
              text-xs
              text-green-400
            "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
