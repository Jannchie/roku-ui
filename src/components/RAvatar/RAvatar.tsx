import "./style.css";
import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import { colorClass, Colors } from "../../utils/colors";
import { RBtn } from "../RBtn";
type RAvatarProps = {
  className?: string;
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  outlined?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  leading?: ReactNode;
};
export function RAvatar({
  className,
  children,
  size = "md",
  onClick,
}: RAvatarProps) {
  const avatarClass = classNames(
    "r-avatar",
    { "r-avatar-clickable": onClick !== undefined },
    `r-avatar-${size}`,
    className
  );
  return (
    <div className={avatarClass} onClick={onClick}>
      {children}
    </div>
  );
}
