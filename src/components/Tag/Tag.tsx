import './Tag.css'
import { type MouseEvent, type KeyboardEvent, type ReactNode } from 'react'
import classNames from 'classnames'
import { type Colors } from '../../utils/colors'
import { defaults } from '../../utils/defaults'
import { Btn } from '../Btn'

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
  // const [hover, setHover] = useState(false)
  // const bgCls = bgColorClass(color, hover && onClick ? 50 : 10)
  // const borderCls = borderColorClass(border ? color : undefined)
  // const textCls = textColorClass(hover && onClick ? 'bg' : color)
  const tagClass = classNames(
    className,
    'r-tag',
    {
      'r-tag-clickable': onClick !== undefined,
      'r-tag-rounded': rounded,
      'r-tag-text': text,
    },
    `r-tag-${size}`,
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
      role="button"
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
        <Btn text icon size="xs" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
        </Btn>
      ) }
    </span>
  )
}

interface GroupProps {
  className?: string
  children?: ReactNode
}
export function Group ({ className, children }: GroupProps) {
  return (
    <span className={classNames(className, 'r-tag-group')}>
      { children }
    </span>
  )
}

export const Tag = Object.assign(ChipRoot, { Group })
