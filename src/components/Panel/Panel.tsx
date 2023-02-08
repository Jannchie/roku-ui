import classNames from 'classnames'
import { type HTMLAttributes } from 'react'
import { type Colors } from '../..'
import './Panel.css'
export interface PanelProps {
  color?: Colors
  border?: boolean
  padding?: boolean
  bgOpacity?: 10 | 25 | 50 | 75 | 90
}

export function Panel ({
  color,
  className,
  border,
  children,
  padding,
  bgOpacity,
  ...others
}: PanelProps & HTMLAttributes<HTMLDivElement>) {
  let bgCls = color ? `bg-${color}-2` : 'bg-background-2'
  if (bgOpacity) {
    bgCls = `${bgCls}/${bgOpacity}`
  }
  const borderCls = `border-${color ?? 'border'}-1`
  return (
    <div
      {...others}
      className={classNames(
        'r-panel',
        bgCls,
        {
          [borderCls]: border,
          'r-panel-padding': padding,
          'r-panel-border': border,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
