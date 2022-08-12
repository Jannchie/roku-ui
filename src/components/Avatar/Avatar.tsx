import './Avatar.css';
import {
  MouseEvent, KeyboardEvent, ReactNode, ImgHTMLAttributes,
} from 'react';
import classNames from 'classnames';

type AvatarProps = {
  className?: string;
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
} & ImgHTMLAttributes<HTMLImageElement>;
export function Avatar({
  className,
  children,
  outlined,
  size = 'md',
  onClick,
  ...others
}: AvatarProps) {
  const avatarClass = classNames(
    'r-avatar',
    { 'r-avatar-clickable': onClick !== undefined },
    { 'r-avatar-outlined': outlined },
    `r-avatar-${size}`,
    className,
  );
  const image = others.src ? <img {...others} alt={others.alt ?? 'Avatar'} /> : children;
  return (
    onClick ? (
      <div
        className={avatarClass}
        role="button"
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (onClick) { onClick(e); }
          }
        }}
        onClick={onClick}
      >
        {image}
      </div>
    ) : (
      <div className={avatarClass}>
        {image}
      </div>
    )
  );
}
