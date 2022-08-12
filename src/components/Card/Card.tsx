import classnames from 'classnames';
import { ReactNode } from 'react';

type CardProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  body?: ReactNode;
  actions?: ReactNode[] | ReactNode;
  dense?: boolean;
  children?: ReactNode;
  shadow?: boolean;
  divider?: boolean;
  className?: string;
};

export function Card({
  className, title, subtitle, body, actions, children, dense, divider, shadow = false,
}: CardProps) {
  const cardClass = classnames(
    'r-card',
    {
      'divide-y': divider,
      'r-card-dense': dense,
      'r-card-shadow': shadow,
    },
    className,
  );
  if (children) {
    return <div className={cardClass}>{children}</div>;
  }
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
