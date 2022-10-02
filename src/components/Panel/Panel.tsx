import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { bgColorClass, borderColorClass, Colors } from '../..'
import './Panel.css'

export function Panel ({
  color,
  className,
  border,
  children,
  nopadding,
  rounded = '2xl',
  ...others
}: {
  color?: Colors
  border?: boolean
  nopadding?: boolean
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none'
} & HTMLAttributes<HTMLDivElement>) {
  const bgCls = color ? bgColorClass(color) : 'bg-bg-2'
  const borderColor: Colors = 'default'
  const borderCls = borderColorClass(borderColor)
  return (
    <div
      {...others}
      className={classNames(
        'r-panel',
        className,
        bgCls,
        {
          [borderCls]: border,
          'r-panel-padding': !nopadding,
          'r-panel-border': border,
          [`r-panel-rounded-${rounded}`]: rounded !== 'none',
        },
      )}
    >
      {children}
    </div>
  )
}
