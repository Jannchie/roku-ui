import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { colorClass } from '../..';
import './Panel.css';

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
        'r-panel',
        className,
        colorCls,
        {
          'r-panel-padding': !nopadding,
          'r-panel-border': border,
          'r-panel-rounded': !norounded,
        },
      )}
    >
      {children}
    </div>
  );
}
