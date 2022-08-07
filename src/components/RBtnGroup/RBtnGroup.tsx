import "./style.css";
import { ReactNode } from "react";
import classNames from "classnames";
import { colorClass } from "../../utils/colors";
type RChipProps = {
  className?: string;
  children?: ReactNode;
};
export function RBtnGroup({ className, children }: RChipProps) {
  return (
    <div className="relative flex">
      <div
        className={classNames(
          className,
          "r-btn-group",
          colorClass({ border: "zinc" })
        )}
      >
        {children}
      </div>
    </div>
  );
}
