import Cursor from "./Cursor";
import SyntaxHighlight from "./SyntaxHighlight";

interface CodeLineProps {
  number: number;
  text: string;
  showCursor?: boolean;
}

export default function CodeLine({
  number,
  text,
  showCursor = false,
}: CodeLineProps) {
  return (
    <div className="flex gap-4">
      <span className="w-6 select-none text-right text-xs text-zinc-600">
        {number}
      </span>

      <span className="text-white">
        <SyntaxHighlight text={text} />

        {showCursor && <Cursor />}
      </span>
    </div>
  );
}
