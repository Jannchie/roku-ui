import './Badge.css'
import { type HTMLAttributes, type ReactNode } from 'react'
import classNames from 'classnames'
import { type Colors } from '../..'

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
  color = 'danger',
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
  const colorCls = `bg-${color}-2`
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
      <div className="r-badge-inner">
        {children}
        {show && (
          <>
            <span
              className={badgePointCls}
            >
              {content}
            </span>
            {ping &&
              <span className={classNames('r-badge-ping', badgePointCls)} >
                {content}
              </span>
            }
          </>
        )}
      </div>
    </span>
  )
}
