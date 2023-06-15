import { type MouseEvent, type KeyboardEvent, type ReactNode } from 'react'
import classNames from 'classnames'
import { type Color } from '../../utils/colors'
import { defaults } from '../../utils/defaults'
import { Btn } from '../Btn'

type ChipProps = {
  className?: string
  children?: ReactNode
  color?: Color
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  text?: boolean
  border?: boolean
  style?: React.CSSProperties
  rounded?: boolean
  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
  onClose?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
  closeIcon?: ReactNode
  leading?: ReactNode
} & React.HTMLAttributes<HTMLSpanElement>
export function ChipRoot ({
  color = 'frontground',
  className,
  children,
  size = 'md',
  text,
  border = defaults.border,
  onClick,
  rounded,
  leading,
  onMouseEnter,
  onMouseLeave,
  onClose,
  closeIcon,
  ...others
}: ChipProps) {
  const tagClass = classNames(
    className,
    'border inline-flex gap-1 cursor-default rounded bg-opacity-10 dark:bg-opacity-10 items-center',
    {
      'cursor-pointer': onClick !== undefined,
      'rounded-full': rounded,
      'bg-opacity-0': text,
    },
    {
      'px-0.5 py-0.25 text-xs': size === 'xs',
      'px-1 py-0.5 text-xs': size === 'sm',
      'px-1.5 py-0.75 text-xs': size === 'md',
      'px-1.5 py-0.75 text-sm': size === 'lg',
      'px-2 py-1 text-base': size === 'xl',
    },
    {
      [`bg-${color}-2/10`]: !text,
      [`hover:bg-${color}-2/75 active:bg-${color}-2 hover:text-background-2`]: onClick && !text,
      [`hover:bg-${color}-2/25 active:bg-${color}-2/50`]: onClick && text,
      [`text-${color}-2`]: true,
    },
    {
      [`border-${color}-2`]: border,
      'border-transparent': !border,
      'hover:text-b-2': onClick,
    },
  )
  return (
    <span
      className={tagClass}
      role={onclick ? 'button' : 'text'}
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (onClick != null) {
            onClick(e)
          }
        }
      }}
      {...others}
    >
      { leading && <span>{ leading }</span> }
      <span>{ children }</span>
      { onClose && (
        <Btn
          text
          icon
          size="xs"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
            />
          </svg>
        </Btn>
      ) }
    </span>
  )
}

export const Tag = Object.assign(ChipRoot, {})
