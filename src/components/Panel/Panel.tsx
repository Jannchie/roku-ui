import classNames from 'classnames'
import { type HTMLAttributes } from 'react'
import { type Color } from '../..'
import { defaults } from '../../utils/defaults'
import './Panel.css'
export interface PanelProps {
  color?: Color
  border?: boolean
  padding?: boolean
  bgOpacity?: 10 | 25 | 50 | 75 | 90
}

export function Panel ({
  color,
  className,
  border = defaults.border,
  children,
  padding,
  bgOpacity,
  ...others
}: PanelProps & HTMLAttributes<HTMLDivElement>) {
  let bgCls = color ? `bg-${color}-2` : 'bg-background-2'
  if (bgOpacity) {
    bgCls = `${bgCls}/${bgOpacity}`
  }
  const borderCls = `border-${color ?? 'border'}-2`
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
      { children }
    </div>
  )
}
