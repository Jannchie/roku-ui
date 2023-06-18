import classnames from 'classnames'
import { type HTMLAttributes } from 'react'
import { useColorHex, type Color } from '../..'
import { defaults } from '../../utils/defaults'

export interface PanelProps {
  color?: Color
  border?: boolean
  padding?: boolean
  bgOpacity?: 10 | 25 | 50 | 75 | 90
}

export function Panel ({
  color,
  className,
  border = defaults.border,
  children,
  padding,
  bgOpacity,
  ...others
}: PanelProps & HTMLAttributes<HTMLDivElement>) {
  const borderColor = useColorHex(color ?? 'border')
  const bgColor = useColorHex(color ?? 'background')
  return (
    <div
      {...others}
      className={classnames(
        'rounded-lg bg-[var(--r-bg-color)] border-[var(--r-border-color)]',
        border,
        {
          'p-3': padding,
        },
        className,
      )}
      style={{
        ...others.style,
        ...{
          '--r-border-color': borderColor,
          '--r-bg-color': color ? `var(--r-${color}-2)` : bgColor,
        },
      }}
    >
      { children }
    </div>
  )
}
