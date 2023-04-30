import './MaterialSymbolIcon.css'
import classNames from 'classnames'
import { type CSSProperties, type HTMLAttributes } from 'react'

export function MaterialSymbolIcon ({
  size = 'md',
  type = 'rounded',
  className,
  style = {},
  fill,
  ...props
}: {
  icon: string
  type?: 'rounded' | 'outliend'
  size?: number | 'xs' | 'sm' | 'md' | 'lg'
  fill?: boolean
} & HTMLAttributes<HTMLElement>) {
  const styl: CSSProperties = { verticalAlign: 'bottom', ...style }
  if (typeof size === 'number') {
    styl.fontSize = size
  }
  const clsName = classNames(
    `material-symbols-${type}`,
    'select-none',
    { filled: fill },
    { 'r-icon-xs': size === 'xs' },
    { 'r-icon-sm': size === 'sm' },
    { 'r-icon-md': size === 'md' },
    { 'r-icon-lg': size === 'lg' },
    className,
  )
  return (
    <i
      className={clsName}
      style={styl}
      {...props}
    >
      { props.icon }
    </i>
  )
}
