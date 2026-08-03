import Container from "@/components/layout/Container";
import SkillsHeader from "./SkillsHeader";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SkillsHeader />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
