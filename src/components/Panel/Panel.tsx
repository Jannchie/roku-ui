import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { bgColorClass, BgColors, borderColorClass, Colors } from '../..'
import './Panel.css'

export function Panel ({
  color = 'bg-2',
  className,
  border,
  children,
  nopadding,
  norounded,
  ...others
}: {
  color?: Colors | BgColors
  border?: boolean
  nopadding?: boolean
  norounded?: boolean
} & HTMLAttributes<HTMLDivElement>) {
  const bgCls = bgColorClass(color)
  let borderColor: Colors = 'default'
  if (color === 'bg-1' || color === 'bg-2') {
    borderColor = 'default'
  } else {
    borderColor = color
  }
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
          'r-panel-rounded': !norounded,
        },
      )}
    >
      {children}
    </div>
  )
}
