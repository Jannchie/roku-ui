import './Badge.css'
import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import { Colors, colorClass } from '../..'

interface BadgeProps {
  className?: string
  color?: Colors
  children?: ReactNode
  dot?: boolean
  show?: boolean
  ping?: boolean
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'lg' | 'sm' | 'md'
  circle?: boolean
  content?: ReactNode
}
export function Badge ({
  color = 'red',
  className,
  children,
  ping,
  size = 'md',
  show = true,
  dot = false,
  position = 'top-right',
  circle = false,
  content = '',
  ...others
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) {
  const colorCls = colorClass({
    bg: color,
  })
  const badgePointCls = classNames(
    'r-badge-point',
    `r-badge-point-${position}`,
    `r-badge-point-${size}`,
    { 'r-badge-point-for-circle': circle },
    { 'r-badge-point-dot': dot },
    { 'r-badge-point-with-content': content },
    colorCls,
    className,
  )

  return (
    <span className={classNames('r-badge-wrapper', className)} {...others}>
      <div className="relative">
        {children}
        {show && (
          <>
            <span
              className={badgePointCls}
            >
              {content}
            </span>
            {ping &&
              <span className={classNames('animate-ping text-transparent', badgePointCls)} >
                {content}
              </span>
            }
          </>
        )}
      </div>
    </span>
  )
}
