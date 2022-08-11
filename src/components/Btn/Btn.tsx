import classNames from "classnames";
import { ReactNode } from "react";
import { colorClass, Colors } from "../../utils/colors";
import { Loading } from "../other/Loading";
import "./Btn.css";
import { motion, AnimatePresence } from "framer-motion";

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

function BtnRoot({
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
    outline: outline ? color : undefined,
  });
  const btnClass = classNames(
    "r-btn",
    `r-btn-${size}`,
    { "r-btn-icon": icon },
    { "r-btn-rounded": rounded },
    { "r-btn-dash": dash },
    { "r-btn-outlined": outline },
    { "r-btn-filled": filled && !text },
    { "r-btn-text": text },
    className,
    colorCls
  );
  const body = children ? children : label;

  const loadingFinalClass = classNames("leading-[0]", {
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
      <motion.button
        layout
        key="btn-main"
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
            <AnimatePresence>
              {loading && (
                <motion.div
                  layout
                  className={loadingFinalClass}
                  initial={{
                    width: 0,
                    marginRight: 0,
                  }}
                  animate={{
                    width: size === "lg" ? 24 : 16,
                    marginRight: size === "sm" ? 4 : 8,
                  }}
                  exit={{ width: 0, marginRight: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.15,
                  }}
                >
                  {loadingIcon}
                </motion.div>
              )}
            </AnimatePresence>
          )}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              layout
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              key="btn-body"
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.15,
              }}
            >
              {body}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.button>
    );
  }
}

type BtnGroup = {
  className?: string;
  children?: ReactNode;
};
function Group({ className, children }: BtnGroup) {
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

export const Btn = Object.assign(BtnRoot, {
  Group
});