import { IconType } from "react-icons";

interface ContactItemProps {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export default function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        flex
        items-center
        gap-4
        px-8
        transition-all
        duration-300
        hover:text-primary
      "
    >
      <Icon
        size={24}
        className="
          text-muted-foreground
          transition-colors
          duration-300
          group-hover:text-primary
        "
      />

      <div>
        <p
          className="
            text-sm
            text-muted-foreground
          "
        >
          {label}
        </p>

        <p
          className="
            font-medium
            text-foreground
            transition-colors
            duration-300
            group-hover:text-primary
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}
