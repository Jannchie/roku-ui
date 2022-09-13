import './Tag.css'
import { MouseEvent, KeyboardEvent, ReactNode } from 'react'
import classNames from 'classnames'
import { Colors, colorClass, borderColorClass } from '../../utils/colors'

type ChipProps = {
  className?: string
  children?: ReactNode
  color?: Colors
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  text?: boolean
  border?: boolean
  style?: React.CSSProperties
  rounded?: boolean
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
  leading?: ReactNode
} & React.HTMLAttributes<HTMLSpanElement>
export function ChipRoot ({
  color = 'primary',
  className,
  children,
  size = 'md',
  text,
  border,
  onClick,
  rounded,
  leading,
  ...others
}: ChipProps) {
  const colorCls = colorClass({
    bg: color,
    border: border ? color : undefined,
    hoverable: onClick !== undefined ? color : undefined,
    text: color,
  })
  const chipClass = classNames(
    'r-tag',
    {
      [borderColorClass(color)]: border,
      'r-tag-clickable': onClick !== undefined,
      'r-tag-rounded': rounded,
      'r-tag-text': text,
    },
    `r-tag-${size}`,
    className,
    colorCls,
  )
  return (
    <span
      className={chipClass}
      role="button"
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={
        (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (onClick != null) {
              onClick(e)
            }
          }
        }
      }
      {...others}
    >
      {leading && <span>{leading}</span>}
      <span>{children}</span>
    </span>
  )
}

interface GroupProps {
  className?: string
  children?: ReactNode
}
export function Group ({ className, children }: GroupProps) {
  return (
    <span className={classNames(className, 'r-tag-group')}>{children}</span>
  )
}

export const Tag = Object.assign(ChipRoot, { Group })
