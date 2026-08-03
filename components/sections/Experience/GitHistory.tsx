import GitCommit from "./GitCommit";
import GitNode from "./GitNode";

import { experiences } from "@/data/experience";

export default function GitHistory() {
  return (
    <div className="relative">
      {/* Linha vertical */}
      <div
        className="
          absolute
          left-[27px]
          top-10
          bottom-10
          w-px
          bg-white/10
        "
      />

      <div className="space-y-10">
        {experiences.map((experience) => (
          <div key={experience.hash} className="flex items-start">
            <GitNode isHead={experience.hash === "HEAD"} />

            <GitCommit {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
}
