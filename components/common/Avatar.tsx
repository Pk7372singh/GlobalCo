import { getInitials } from "@/lib/utils";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({ name, size = "md" }: AvatarProps) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-20 w-20 text-2xl",
  };

  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br
        from-indigo-600
        to-violet-600
        font-bold
        text-white
        shadow-lg
        ${sizes[size]}
      `}
    >
      {getInitials(name)}
    </div>
  );
}
