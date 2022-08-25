import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { colorClass, Colors } from '../..';
import './Panel.css';

export function Panel({
  color = 'default',
  className,
  border,
  background,
  children,
  nopadding,
  norounded,
  ...others
}: {
  color?: Colors;
  border?: boolean;
  nopadding?: boolean;
  norounded?: boolean;
  background?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  const colorCls = colorClass({
    bg: background ? color : undefined,
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
