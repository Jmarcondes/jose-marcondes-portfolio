import { MdFolder, MdFolderOpen } from "react-icons/md";

interface ProjectItemProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

export default function ProjectItem({
  name,
  selected,
  onClick,
}: ProjectItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        border
        px-4
        py-3
        text-left
        transition-all
        duration-200
        ${
          selected
            ? "border-primary/20 bg-primary/10"
            : "border-transparent hover:bg-white/5"
        }
      `}
    >
      {selected ? (
        <MdFolderOpen
          size={22}
          className="
            shrink-0
            text-primary
            transition-all
            duration-200
          "
        />
      ) : (
        <MdFolder
          size={22}
          className="
            shrink-0
            text-muted-foreground
            transition-all
            duration-200
            group-hover:text-primary
          "
        />
      )}

      <span
        className={
          selected
            ? "font-medium text-foreground"
            : "text-muted-foreground transition-colors group-hover:text-foreground"
        }
      >
        {name}
      </span>
    </button>
  );
}
