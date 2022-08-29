import './Avatar.css';
import {
  MouseEvent, KeyboardEvent, ReactNode, ImgHTMLAttributes, HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import { colorClass, Colors } from '../..';

type AvatarProps = {
  className?: string;
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  outline?: Colors | boolean;
  square?: boolean;
  color?: Colors;
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
} & ImgHTMLAttributes<HTMLImageElement>;
export function AvatarRoot({
  className,
  children,
  outline,
  size = 'md',
  onClick,
  square,
  color = 'primary',
  ...others
}: AvatarProps) {
  let outlineColor = color;
  if (typeof outline === 'string') {
    outlineColor = outline;
  }
  const colorCls = colorClass({
    bg: color,
    outline: outline ? outlineColor : undefined,
  });
  let { style } = others;
  if (typeof size === 'number') {
    style = {
      ...others.style,
      width: size,
      height: size,
    };
  }
  const avatarClass = classNames(
    'r-avatar',
    { [`r-avatar-${size}`]: typeof size === 'string' },
    { 'r-avatar-clickable': onClick !== undefined },
    { 'r-avatar-outline': outline },
    `r-avatar-${square ? 'square' : 'circle'}`,
    className,
    colorCls,
  );
  const image = others.src ? <img style={style} {...others} alt={others.alt ?? 'Avatar'} /> : (
    <div style={style}>
      {children}
    </div>
  );

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

const Group = ({ children, className, ...others }: {
} & HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('r-avatar-group', className)} {...others}>
    {children}
  </div>
);

export const Avatar = Object.assign(AvatarRoot, { Group });
