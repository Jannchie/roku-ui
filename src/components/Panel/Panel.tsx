import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { Colors } from '../..'
import './Panel.css'
export type PanelProps = {
  color?: Colors
  border?: boolean
  padding?: boolean
} & HTMLAttributes<HTMLDivElement>

export function Panel ({
  color,
  className,
  border,
  children,
  padding,
  ...others
}: PanelProps) {
  const bgCls = color ? `bg-${color}-2` : 'bg-bg-2'
  const borderColor: Colors = 'default'
  const borderCls = color ? `border-${borderColor}-1` : 'border-bg-1'
  return (
    <div
      {...others}
      className={classNames(
        'r-panel',
        className,
        bgCls,
        {
          [borderCls]: border,
          'r-panel-padding': padding,
          'r-panel-border': border,
        },
      )}
    >
      {children}
    </div>
  )
}
