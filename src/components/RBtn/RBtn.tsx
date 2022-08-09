import { Transition } from "@headlessui/react";
import classNames from "classnames";
import classnames from "classnames";
import { ReactNode, useEffect, useRef } from "react";
import { Flipped, Flipper, spring } from "react-flip-toolkit";
import { ScaleTransition } from "../../Transitions";
import { colorClass, Colors } from "../../utils/colors";
import { Loading } from "../other/Loading";
import "./RBtn.css";
export type ButtonProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  rounded?: boolean;
  color?: Colors;
  filled?: boolean;
  border?: boolean;
  dash?: boolean;
  text?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  outline?: boolean;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
  loadingIcon?: ReactNode;
  leadingIcon?: ReactNode;
};

export function RBtn({
  label,
  size = "md",
  color = "zinc",
  dash = false,
  loading = false,
  disabled = false,
  border = false,
  outline = false,
  rounded = false,
  filled = true,
  text = false,
  style,
  children,
  onClick,
  className,
  icon = false,
  loadingIcon = <Loading />,
  leadingIcon = null,
}: ButtonProps) {
  const colorCls = colorClass({
    bg: filled && !text ? color : undefined,
    hoverable: color,
    border: border ? color : undefined,
    text: text ? color : undefined,
  });
  const btnClass = classnames(
    "r-btn",
    { "r-btn-icon": icon },
    `r-btn-${size}`,
    { "r-btn-dash": dash },
    { "r-btn-outlined": outline },
    { "r-btn-filled": filled && !text },
    { "r-btn-text": text },
    className,
    colorCls
  );
  const body = children ? children : label;

  const loadingFinalClass = classNames("leading-[0] opacity-100 scale-100", {
    "w-4": size === "sm" || size === "md",
    "mr-1": size === "sm" && !icon,
    "mr-2": (size === "md" || size === "lg") && !icon,
    "w-6": size === "lg",
  });
  if (icon) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={btnClass}
        style={style}
        disabled={disabled}
      >
        <div className={loadingFinalClass}>
          {loading ? loadingIcon : children}
        </div>
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type="button"
        className={btnClass}
        style={style}
        disabled={disabled}
      >
        <div className="flex items-center justify-center">
          {leadingIcon ? (
            <div className={loadingFinalClass}>
              {loading ? loadingIcon : leadingIcon}
            </div>
          ) : (
            <Transition
              appear
              show={loading}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-0 w-0 mr-0"
              enterTo={loadingFinalClass}
              leave="ease-in duration-100"
              leaveFrom={loadingFinalClass}
              leaveTo="opacity-0 scale-0 w-0 mr-0"
            >
              {loadingIcon}
            </Transition>
          )}
          {body}
        </div>
      </button>
    );
  }
}
