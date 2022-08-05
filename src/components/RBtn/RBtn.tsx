import classnames from "classnames";
import { ButtonProps, Loading } from "./index";

export function RBtn({
  label,
  size = "medium",
  color = "default",
  outline = false,
  dash = false,
  loading = false,
  disabled = false,
  children,
  onClick,
  className,
  icon = false,
}: ButtonProps) {
  const btnClass = classnames(
    icon ? "r-icon-btn r-btn" : "r-btn",
    `r-btn-${size}`,
    `r-btn-${color}`,
    { "r-btn-dash": dash },
    { "r-btn-outline": outline },
    { "r-btn-fill": !outline },
    className
  );
  const body = children ? children : label;
  return (
    <button
      onClick={onClick}
      type="button"
      className={btnClass}
      disabled={disabled}
    >
      {loading ? (
        icon ? (
          <Loading size={size} />
        ) : (
          <div className="flex items-center">
            <div className="mr-2 transition-all">
              <Loading size={size} />
            </div>
            {body}
          </div>
        )
      ) : (
        body
      )}
    </button>
  );
}
