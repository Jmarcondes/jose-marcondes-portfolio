"use client";

import { useEffect, useState } from "react";
import { codeLines } from "./Data";
import CodeLine from "./CodeLine";

export default function CodeEditor() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) return;

    const line = codeLines[currentLine];

    const timer = setTimeout(() => {
      if (currentChar < line.length) {
        setCurrentChar((prev) => prev + 1);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  return (
    <div className="space-y-2 p-8 font-mono text-sm leading-7">
      {codeLines.map((line, index) => {
        const isCurrentLine = index === currentLine;

        const text =
          index < currentLine
            ? line
            : isCurrentLine
              ? line.slice(0, currentChar)
              : "";

        if (!text) return null;

        return (
          <CodeLine
            key={index}
            number={index + 1}
            text={text}
            showCursor={isCurrentLine}
          />
        );
      })}
    </div>
  );
}
