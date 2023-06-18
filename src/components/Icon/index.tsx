import { type HTMLAttributes } from 'react'
import { type Color } from '../../utils/colors'
import { type Size, type Rounded } from '../../utils/type'
import { defaults } from '../../utils/defaults'
import classnames from 'classnames'
import { useColorHex } from '../../hooks'

function sizeClassName (size: Size) {
  switch (size) {
    case 'xs':
      return 'h-4 w-4 text-xs p-0.5'
    case 'sm':
      return 'h-5 w-5 text-sm p-0.75'
    case 'base':
      return 'h-6 w-6 text-base p-1'
    case 'md':
      return 'h-8 w-8 text-base p-1.25'
    case 'lg':
      return 'h-10 w-10 text-lg p-1.5'
    case 'xl':
      return 'h-12 w-12 text-xl p-1.75'
  }
}

function roundedClassName (rounded: Rounded) {
  switch (rounded) {
    case 'none':
      return ''
    case 'xs':
      return 'rounded-xs'
    case 'sm':
      return 'rounded-sm'
    case 'md':
      return 'rounded-md'
    case 'base':
      return 'rounded'
    case 'lg':
      return 'rounded-lg'
    case 'xl':
      return 'rounded-xl'
    case 'full':
      return 'rounded-full'
  }
}

export type IconVariant = 'default' | 'fill' | 'text' | 'dual'

function variantClassName (variant?: IconVariant, color: Color = 'frontground') {
  switch (variant) {
    case 'fill':
      return 'bg-[var(--r-main-color)] text-background-2'
    case 'text':
      return 'text-[var(--r-main-color)]'
    case 'dual':
      return 'bg-[var(--r-main-opacity-color)] text-[var(--r-main-color)]'
    default:
      return 'text-[var(--r-main-color)]'
  }
}

export function Icon ({
  variant = 'text',
  color,
  rounded = defaults.rounded,
  size = 'base',
  children,
  className,
  ...others
}: {
  variant?: IconVariant
  color?: Color
  rounded?: Rounded
  size?: Size
} & HTMLAttributes<HTMLElement>) {
  if (color === 'default') {
    color = undefined
  }
  if (variant === 'text' && !color) {
    color = 'frontground'
  } else if (!color) {
    color = 'frontground'
  }
  const mainColorHex = useColorHex(color)
  return (
    <i
      {...others}
      style={{
        width: typeof size === 'number' ? size : undefined,
        ...others.style,
        ...{
          '--r-main-color': mainColorHex,
          '--r-main-opacity-color': `${mainColorHex}33`,
        },
      }}
      className={classnames(className, variantClassName(variant, color), sizeClassName(size), roundedClassName(rounded), 'inline-block')}
    >
      { children }
    </i>
  )
}
