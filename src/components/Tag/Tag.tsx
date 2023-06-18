import { type MouseEvent, type KeyboardEvent, type ReactNode } from 'react'
import classnames from 'classnames'
import { type Color } from '../../utils/colors'
import { defaults } from '../../utils/defaults'
import { Btn } from '../Btn'
import { useOpacityColor, useTrueColor } from '../../hooks'
import { TablerX } from '@roku-ui/icons-tabler'
import { calculateContrast } from '../../utils/theme/utils'

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
  const mainColorHex = useTrueColor(color)
  const mainColorOpacity25 = useOpacityColor(color, 0.25)
  const mainColorOpacity50 = useOpacityColor(color, 0.5)
  const mainColorOpacity75 = useOpacityColor(color, 0.75)
  const fgColor = useTrueColor('frontground')
  const bgColor = useTrueColor('background')
  const colorFG = useTrueColor(calculateContrast(mainColorHex, fgColor) > calculateContrast(mainColorHex, bgColor) ? 'frontground' : 'background')
  const tagClass = classnames(
    className,
    'border inline-flex gap-1 cursor-default rounded bg-opacity-10 items-center',
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
      'bg-[var(--r-color-25)] text-[var(--r-fg-color-25)]': !text,
      'hover:bg-[var(--r-color-25)] active:bg-[var(--r-color-50)] text-[var(--r-fg-color)]': onClick && !text,
      'hover:bg-[var(--r-color-25)] active:bg-[var(--r-color-50)]': onClick && text,
    },
    {
      'border-[var(--r-color)]': border,
      'border-transparent': !border,
    },
  )
  return (
    <span
      className={tagClass}
      style={{
        ...others.style,
        ...{
          '--r-color': mainColorHex,
          '--r-color-25': mainColorOpacity25,
          '--r-color-50': mainColorOpacity50,
          '--r-color-75': mainColorOpacity75,
          '--r-fg-color': colorFG,
        },
      }}
      role={onclick ? 'button' : 'text'}
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick != null) {
          onClick(e)
        }
      }}
      {...others}
    >
      { leading && <span>{ leading }</span> }
      <span>{ children }</span>
      { onClose && (
        <Btn
          icon
          color={mainColorHex}
          size="xs"
          onClick={onClose}
        >
          <TablerX />
        </Btn>
      ) }
    </span>
  )
}

export const Tag = Object.assign(ChipRoot, {})
