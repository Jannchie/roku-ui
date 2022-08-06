import "./style.css";
import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import { colorClass, Colors } from "../../utils/colors";
import { RBtn } from "../RBtn";
type RChipProps = {
  className?: string;
  children?: ReactNode;
  color?: Colors;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  outlined?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  leading?: ReactNode;
};
export function RChip({
  color = "primary",
  className,
  children,
  size = "sm",
  outlined = false,
  onClick,
  leading,
}: RChipProps) {
  if (!color) {
    color = "primary";
  }
  const colorCls = colorClass({
    color,
    bg: true,
    text: true,
    outlined,
    hoverable: onClick !== undefined,
  });
  const chipClass = classNames(
    "r-chip",
    { "r-chip-clickable": onClick !== undefined },
    `r-chip-${size}`,
    className,
    colorCls
  );
  return (
    <span className={chipClass} onClick={onClick}>
      <span>{leading}</span>
      <span>{children}</span>
    </span>
  );
}
