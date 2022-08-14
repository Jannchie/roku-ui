import './Anchor.css';
import classNames from 'classnames';
import { AnchorHTMLAttributes } from 'react';

export function Anchor({
  children,
  className,
  ...props
}: {
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={classNames(
        'r-anchor',
        { 'r-anchor-clickable': props.href !== undefined || props.onClick !== undefined },
        className,
      )}
    >
      {children}
    </a>
  );
}
