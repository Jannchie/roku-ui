import classnames from "classnames";
import { FC, ReactNode } from "react";
import "./RBtn.css";
export { RBtn } from "./RBtn";
export type ButtonProps = {
  label?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "danger" | "warning" | "default";
  outline?: boolean;
  dash?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
};
export function Loading({ size }: { size: string }) {
  const loadingClass = classnames({
    "w-4 h-4": size === "small",
    "w-5 h-5": size === "medium",
    "w-6 h-6": size === "large",
    "transition-all": true,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={loadingClass}
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke-width="8"
        stroke="rgba(255, 255, 255, 0.25)"
        stroke-dasharray="50.26548245743669 50.26548245743669"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="23"
        stroke-width="8"
        stroke="rgba(255, 255, 255, 0.50)"
        stroke-dasharray="36.12831551628262 36.12831551628262"
        stroke-dashoffset="36.12831551628262"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
}
