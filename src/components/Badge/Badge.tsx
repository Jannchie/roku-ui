import "./Badge.css";
import { ReactNode } from "react";
import classNames from "classnames";
import { colorClass, Colors } from "../..";
import { motion, AnimatePresence } from "framer-motion";

type RBadgeProps = {
  className?: string;
  color?: Colors;
  children?: ReactNode;
  dot?: boolean;
  show?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};
export function Badge({
  color = "red",
  className,
  children,
  show = true,
  dot = false,
  position = "top-right",
}: RBadgeProps) {
  const colorCls = colorClass({
    bg: color,
  });
  const badgePointCls = classNames(
    "r-badge-point",
    { "r-badge-point-dot": dot },
    { "r-badge-point-top-left": position === "top-left" },
    { "r-badge-point-top-right": position === "top-right" },
    { "r-badge-point-bottom-left": position === "bottom-left" },
    { "r-badge-point-bottom-right": position === "bottom-right" },
    colorCls,
    className
  );

  return (
    <span className="r-badge-wrapper">
      <div className="relative">
        {children}
        <AnimatePresence>
          {show && (
            <motion.span
              initial={{ width: 0, height: 0 }}
              animate={{ width: 8, height: 8 }}
              exit={{ width: 0, height: 0 }}
              transition={{ type: "spring", damping: 8 }}
              className={badgePointCls}
            ></motion.span>
          )}
        </AnimatePresence>
      </div>
    </span>
  );
}
