import { ReactNode } from "react";
import { clsx } from "clsx";
import Image from "next/image";

export interface AvatarProps {
  avatar: "circular" | "square";
  children?: ReactNode;
  className?: string;
}


export function Avatar({
  avatar = "circular",
  children,
  className,
}: AvatarProps) {
  return (
    <div className={clsx("relative w-full text-gray-100 font-sans", className)}>
      <Image
        className={clsx("", {
          'avatarCircular': avatar === "circular",
          'avatarSquare': avatar === "square",
        })}
        src="/avatar.jpg"
        alt="Avatar de João Andrade"
        width={128}
        height={128}
      />
    {children}
    </div>
  );
}
