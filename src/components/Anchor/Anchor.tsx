import './Anchor.css'
import classNames from 'classnames'
import { AnchorHTMLAttributes } from 'react'
import { Colors } from '../..'

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
        'r-anchor',
        { 'r-anchor-clickable': props.href !== undefined || props.onClick !== undefined },
        className,
        `decoration-${color}-2 hover:decoration-${color}-2 hover:text-${color}-2`,
      )}
    >
      {children}
    </a>
  )
}
