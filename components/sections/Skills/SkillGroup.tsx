interface SkillGroupProps {
  title: string;
  skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      "
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
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
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
