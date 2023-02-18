import './Anchor.css'
import classNames from 'classnames'
import { type AnchorHTMLAttributes } from 'react'
import { type Colors } from '../..'

export function Anchor ({
  color = 'primary',
  children,
  className,
  ...props
}: {
  color?: Colors
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={classNames(
        className,
        'r-anchor',
        { 'r-anchor-clickable': props.href !== undefined || props.onClick !== undefined },
        { [`decoration-${color}-2 hover:decoration-${color}-2 hover:text-${color}-2`]: props.href !== undefined || props.onClick !== undefined },
      )}
    >
      {children}
    </a>
  )
}
