interface GitNodeProps {
  isHead?: boolean;
}

export default function GitNode({ isHead = false }: GitNodeProps) {
  return (
    <div
      className="
        relative
        flex
        w-14
        shrink-0
        justify-center
      "
    >
      {/* Nó */}
      <div
        className={`
          relative
          z-10
          mt-10
          h-3
          w-3
          rounded-full
          transition-all
          duration-300
          ${
            isHead
              ? "bg-green-500 shadow-[0_0_14px_rgba(34,197,94,.6)]"
              : "bg-primary"
          }
        `}
      />

      {/* Linha horizontal */}
      <div
        className="
          absolute
          left-7
          top-[45px]
          h-px
          w-10
          bg-white/10
        "
      />
    </div>
  );
}
