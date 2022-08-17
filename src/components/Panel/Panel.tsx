import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { colorClass } from '../..';
import styles from './Panel.module.css';

export function Panel({
  color = 'default',
  className,
  border,
  children,
  nopadding,
  norounded,
  ...others
}: any & HTMLAttributes<HTMLDivElement>) {
  const colorCls = colorClass({
    bg: color,
    border: border ? color : undefined,
  });
  return (
    <div
      {...others}
      className={classNames(
        styles['r-panel'],
        className,
        colorCls,
        {
          [styles['r-panel-padding']]: !nopadding,
          [styles['r-panel-border']]: border,
          [styles['r-panel-rounded']]: !norounded,
        },
      )}
    >
      {children}
    </div>
  );
}
