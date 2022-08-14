import './Chip.css';
import { MouseEvent, KeyboardEvent, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, colorClass } from '../../utils/colors';

type ChipProps = {
  className?: string;
  children?: ReactNode;
  color?: Colors;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
  leading?: ReactNode;
};
export function ChipRoot({
  color = 'primary',
  className,
  children,
  size = 'sm',
  border = false,
  onClick,
  leading,
}: ChipProps) {
  const colorCls = colorClass({
    bg: color,
    border: border ? color : undefined,
    hoverable: onClick !== undefined ? color : undefined,
    text: color,
  });
  const chipClass = classNames(
    'r-chip',
    { 'r-chip-clickable': onClick !== undefined },
    `r-chip-${size}`,
    className,
    colorCls,
    'bg-opacity-25 dark:bg-opacity-25',
  );
  return (
    <span
      className={chipClass}
      role="button"
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={
        (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (onClick) {
              onClick(e);
            }
          }
        }
      }
    >
      <span>{leading}</span>
      <span>{children}</span>
    </span>
  );
}

type GroupProps = {
  className?: string;
  children?: ReactNode;
};
export function Group({ className, children }: GroupProps) {
  return (
    <span className={classNames(className, 'r-chip-group')}>{children}</span>
  );
}

export const Chip = Object.assign(ChipRoot, { Group });
