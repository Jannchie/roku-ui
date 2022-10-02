import './Avatar.css'
import {
  MouseEvent, KeyboardEvent, ReactNode, ImgHTMLAttributes, HTMLAttributes,
} from 'react'
import classNames from 'classnames'
import { Colors } from '../..'

type AvatarProps = {
  className?: string
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  ring?: Colors | boolean
  square?: boolean
  color?: Colors
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>
export function AvatarRoot ({
  className,
  children,
  ring,
  size = 'md',
  onClick,
  square,
  color = 'primary',
  ...others
}: AvatarProps) {
  let ringColor = color
  if (typeof ring === 'string') {
    ringColor = ring
  }
  const bgClass = `bg-${color}-2 text-fg-2`
  const ringClass = ring ? `ring-${ringColor}-2 ring-offset-bg-2` : ''
  let { style } = others
  if (typeof size === 'number') {
    style = {
      ...others.style,
      width: size,
      height: size,
    }
  }
  const avatarClass = classNames(
    'r-avatar',
    { [`r-avatar-${size}`]: typeof size === 'string' },
    { 'r-avatar-clickable': onClick !== undefined },
    { 'r-avatar-outline': ring },
    `r-avatar-${square ? 'square' : 'circle'}`,
    className,
    bgClass,
    ringClass,
  )
  const image = others.src
    ? <img style={style} {...others} alt={others.alt ?? 'Avatar'} />
    : (
      <div style={style}>
        {children}
      </div>
    )

  return (
    (onClick != null)
      ? (
        <div
          className={avatarClass}
          role="button"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (onClick) { onClick(e) }
            }
          }}
          onClick={onClick}
        >
          {image}
        </div>
      )
      : (
        <div className={avatarClass}>
          {image}
        </div>
      )
  )
}

const Group = ({ children, className, ...others }: {
} & HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('r-avatar-group', className)} {...others}>
    {children}
  </div>
)

export const Avatar = Object.assign(AvatarRoot, { Group })
