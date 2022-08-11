import "./avatar.css";
import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
type Avatar = {
  className?: string;
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  outlined?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  leading?: ReactNode;
};
export function Avatar({
  className,
  children,
  size = "md",
  onClick,
}: Avatar) {
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
