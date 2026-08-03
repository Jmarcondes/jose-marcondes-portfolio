import { Card } from "@/components/ui/card";
import CodeEditor from "./CodeEditor";

export default function HeroTerminal() {
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
      "
    >
      <div className="flex items-center border-b border-white/10 px-6 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="ml-auto text-xs text-muted-foreground">
          developer.ts
        </span>
      </div>

      <CodeEditor />
    </Card>
  );
}
