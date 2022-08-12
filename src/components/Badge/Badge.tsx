import './Badge.css';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Colors, colorClass } from '../..';

type BadgeProps = {
  className?: string;
  color?: Colors;
  children?: ReactNode;
  dot?: boolean;
  show?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};
export function Badge({
  color = 'red',
  className,
  children,
  show = true,
  dot = false,
  position = 'top-right',
}: BadgeProps) {
  const colorCls = colorClass({
    bg: color,
  });
  const badgePointCls = classNames(
    'r-badge-point',
    { 'r-badge-point-dot': dot },
    { 'r-badge-point-top-left': position === 'top-left' },
    { 'r-badge-point-top-right': position === 'top-right' },
    { 'r-badge-point-bottom-left': position === 'bottom-left' },
    { 'r-badge-point-bottom-right': position === 'bottom-right' },
    colorCls,
    className,
  );

  return (
    <span className="r-badge-wrapper">
      <div className="relative">
        {children}
        <AnimatePresence>
          {show && (
            <motion.span
              animate={{ height: 8, width: 8 }}
              className={badgePointCls}
              exit={{ height: 0, width: 0 }}
              initial={{ height: 0, width: 0 }}
              transition={{ damping: 8, type: 'spring' }}
            />
          )}
        </AnimatePresence>
      </div>
    </span>
  );
}
