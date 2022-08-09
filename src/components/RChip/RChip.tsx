import "./style.css";
import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import { colorClass, Colors } from "../../utils/colors";
type RChipProps = {
  className?: string;
  children?: ReactNode;
  color?: Colors;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  leading?: ReactNode;
};
export function RChip({
  color = "primary",
  className,
  children,
  size = "sm",
  border = false,
  onClick,
  leading,
}: RChipProps) {
  if (!color) {
    color = "primary";
  }
  const colorCls = colorClass({
    bg: color,
    text: color,
    border: border ? color : undefined,
    hoverable: onClick !== undefined ? color : undefined,
  });
  const chipClass = classNames(
    "r-chip",
    { "r-chip-clickable": onClick !== undefined },
    `r-chip-${size}`,
    className,
    colorCls,
    "bg-opacity-25 dark:bg-opacity-25"
  );
  return (
    <span className={chipClass} onClick={onClick}>
      <span>{leading}</span>
      <span>{children}</span>
    </span>
  );
}
