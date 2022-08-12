import './Avatar.css';
import { MouseEvent, KeyboardEvent, ReactNode } from 'react';
import classNames from 'classnames';

type AvatarProps = {
  className?: string;
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
};
export function Avatar({
  className,
  children,
  outlined,
  size = 'md',
  onClick,
}: AvatarProps) {
  const avatarClass = classNames(
    'r-avatar',
    { 'r-avatar-clickable': onClick !== undefined },
    { 'r-avatar-outlined': outlined },
    `r-avatar-${size}`,
    className,
  );
  return (
    <div
      className={avatarClass}
      role="button"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (onClick) {
            onClick(e);
          }
        }
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
