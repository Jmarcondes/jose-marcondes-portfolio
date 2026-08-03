export default function AvailabilityBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-2
        backdrop-blur-md
      "
    >
      <span className="relative flex h-3 w-3">
        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full
            bg-green-500
            opacity-75
          "
        />

        <span
          className="
            relative
            inline-flex
            h-3
            w-3
            rounded-full
            bg-green-500
          "
        />
      </span>

      <span
        className="
          text-sm
          font-medium
          text-muted-foreground
        "
      >
        Disponível para novas oportunidades
      </span>
    </div>
  );
}
