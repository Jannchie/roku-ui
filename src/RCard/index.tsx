import "./RCard.css";
import classnames from "classnames";
import { FC, ReactNode } from "react";
export const RCard: FC<{
  title?: ReactNode;
  subtitle?: ReactNode;
  body?: ReactNode;
  actions?: ReactNode[] | ReactNode;
  dense?: boolean;
  children?: ReactNode;
  shadow?: boolean;
  divider?: boolean;
  className?: string;
}> = ({
  className,
  title,
  subtitle,
  body,
  actions,
  children,
  dense,
  divider,
  shadow: shadow = true,
}) => {
  const cardClass = classnames(
    "r-card",
    {
      "r-card-dense": dense,
      "r-card-shadow": shadow,
      "divide-y": divider,
    },
    className
  );
  if (children) {
    return <div className={cardClass}>{children}</div>;
  } else {
    return (
      <div className={cardClass}>
        {title && (
          <div className="r-card-title">
            <div className="title-line">{title}</div>
            <div className="subtitle-line">{subtitle}</div>
          </div>
        )}
        {body && <div className="r-card-body">{body}</div>}
        {actions && <div className="r-card-actions">{actions}</div>}
      </div>
    );
  }
};
