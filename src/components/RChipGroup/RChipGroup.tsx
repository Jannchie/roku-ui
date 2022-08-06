import "./style.css";
import { ReactNode } from "react";
import classNames from "classnames";
type RChipProps = {
  className?: string;
  children?: ReactNode;
};
export function RChipGroup({ className, children }: RChipProps) {
  return (
    <span className={classNames(className, "r-chip-group")}>{children}</span>
  );
}
