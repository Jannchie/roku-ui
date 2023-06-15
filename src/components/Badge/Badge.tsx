import { type HTMLAttributes, type ReactNode } from 'react'
import classNames from 'classnames'
import { type Color } from '../..'

interface BadgeProps {
  className?: string
  color?: Color
  children?: ReactNode
  show?: boolean
  ping?: boolean
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'lg' | 'sm' | 'md'
  offset?: number
  content?: ReactNode
}
export function Badge ({
  color = 'danger',
  className,
  children,
  ping,
  size = 'md',
  show = true,
  position = 'top-right',
  offset = 0,
  content = '',
  ...others
}: BadgeProps & Omit<HTMLAttributes<HTMLSpanElement>, 'content'>) {
  const colorCls = `bg-${color}-2`

  const getTranslate = (position: string) => {
    switch (position) {
      case 'top-right':
        return '50% -50%'
      case 'top-left':
        return '-50% -50%'
      case 'bottom-right':
        return '50% 50%'
      case 'bottom-left':
        return '-50% 50%'
    }
  }

  const getOffset = (position: string) => {
    switch (position) {
      case 'top-right':
        return { top: offset, right: offset }
      case 'top-left':
        return { top: offset, left: offset }
      case 'bottom-right':
        return { bottom: offset, right: offset }
      case 'bottom-left':
        return { bottom: offset, left: offset }
    }
  }

  const badgePointCls = classNames(
    'absolute rounded-full pointer-events-none text-xs z-10 text-white',
    {
      'top-0 -right-0': position === 'top-right',
      'top-0 -left-0': position === 'top-left',
      'bottom-0 -right-0': position === 'bottom-right',
      'bottom-0 -left-0': position === 'bottom-left',
    },
    {
      'w-2 h-2': size === 'sm',
      'w-3 h-3': size === 'md',
      'w-4 h-4': size === 'lg',
    },
    { '!w-auto !h-auto px-1 py-0.5 rounded-lg': content },
    colorCls,
    className,
  )

  return (
    <span
      className={classNames('flex', className)}
      {...others}
    >
      <div className="relative">
        { children }
        { show && (
          <>
            <span
              className={badgePointCls}
              style={{
                translate: getTranslate(position),
                ...getOffset(position),
              }}
            >
              { content }
            </span>
            { ping &&
            <span
              className={classNames('animate-ping text-transparent', badgePointCls)}
              style={{
                translate: getTranslate(position),
                ...getOffset(position),
              }}
            >
              { content }
            </span>
            }
          </>
        ) }
      </div>
    </span>
  )
}
