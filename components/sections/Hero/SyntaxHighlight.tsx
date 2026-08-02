interface Props {
  text: string;
}

export default function SyntaxHighlight({ text }: Props) {
  const parts = text.split(/(".*?"|\bconst\b|\btrue\b|\bfalse\b)/);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "const") {
          return (
            <span key={index} className="text-blue-400">
              {part}
            </span>
          );
        }

        if (part.startsWith('"')) {
          return (
            <span key={index} className="text-green-400">
              {part}
            </span>
          );
        }

        if (part === "true" || part === "false") {
          return (
            <span key={index} className="text-sky-400">
              {part}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
