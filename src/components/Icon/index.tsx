import { type HTMLAttributes } from 'react'
import { type Color } from '../../utils/colors'
import { type Size, type Rounded } from '../../utils/type'
import { defaults } from '../../utils/defaults'
import classNames from 'classnames'

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

export type IconVariant = 'default' | 'fill' | 'text'

function variantClassName (variant?: IconVariant, color: Color = 'default') {
  switch (variant) {
    case 'fill':
      return `bg-${color}-2 text-background-2`
    case 'text':
      return `text-${color}-2`
    default:
      return `bg-${color}-2/25 text-${color}-2`
  }
}

export function Icon ({
  variant,
  color = 'default',
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
  return (
    <i
      {...others}
      className={classNames(className, variantClassName(variant, color), sizeClassName(size), roundedClassName(rounded), 'inline-block')}
    >
      { children }
    </i>
  )
}
