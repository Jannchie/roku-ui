import {
  type MouseEvent, type KeyboardEvent, type ReactNode, type ImgHTMLAttributes, type HTMLAttributes,
} from 'react'
import classnames from 'classnames'
import { useTrueColor, type Color } from '../..'

type AvatarProps = {
  className?: string
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  ring?: string | boolean
  square?: boolean
  color?: Color
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>
export function AvatarRoot ({
  className,
  children,
  ring = false,
  size = 'md',
  onClick,
  square,
  color = 'background',
  ...others
}: AvatarProps) {
  const bgClass = 'bg-[var(--r-main-color)] text-f-2'
  const ringClass = ring ? 'ring-[var(--r-ring-color)] ring-offset-2 ring-offset-[hsl(var(--r-background-2))]' : ''
  const mainColor = useTrueColor(color)
  let { style } = others
  const ringColor = useTrueColor(ring === true ? color : (ring || 'background'))
  if (typeof size === 'number') {
    style = {
      ...others.style,
      width: size,
      height: size,
    }
  }
  const avatarClass = classnames(
    'relative overflow-hidden text-sm justify-center items-center flex',
    {
      'w-4 h-4': size === 'xs',
      'w-6 h-6': size === 'sm',
      'w-8 h-8': size === 'md',
      'w-12 h-12': size === 'lg',
      'w-16 h-16': size === 'xl',
    },
    {
      'rounded-full': !square,
      'rounded-xl': square,
    },
    { 'cursor-pointer': onClick !== undefined },
    { 'ring-offset-2 ring-offset-background-2 ring-2': ring },
    className,
    bgClass,
    ringClass,
  )
  const image = others.src
    ? (
      <img
        style={{
          ...style,
          ...{
            '--r-ring-color': ringColor,
            '--r-main-color': mainColor,
          },
        }}
        {...others}
        alt={others.alt ?? 'Avatar'}
      />
    )
    : (
      <div
        style={{
          ...style,
          ...{
            '--r-ring-color': ringColor,
            '--r-main-color': mainColor,
          },
        }}
        className="bg-[var(--r-main-color)]"
      >
        { children }
      </div>
    )

  return (
    (onClick != null)
      ? (
        <div
          style={{
            ...style,
            ...{
              '--r-ring-color': ringColor,
              '--r-main-color': mainColor,
            },
          }}
          className={avatarClass}
          role="button"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onClick) { onClick(e) }
          }}
          onClick={onClick}
        >
          { image }
        </div>
      )
      : (
        <div
          style={{
            ...style,
            ...{
              '--r-ring-color': ringColor,
              '--r-main-color': mainColor,
            },
          }}
          className={avatarClass}
        >
          { image }
        </div>
      )
  )
}

const Group = ({ children, className, ...others }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classnames('flex flex-row flex-wrap justify-center -space-x-3 children:ring-4 children:ring-background-2', className)}
    {...others}
  >
    { children }
  </div>
)

export const Avatar = Object.assign(AvatarRoot, { Group })
