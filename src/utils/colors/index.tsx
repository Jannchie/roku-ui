import classNames from 'classnames'
import { hsl } from 'd3-color'
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'default'
  | 'danger'
  | 'warning'
  | 'info'
  | 'background'
  | 'frontground'

export function isColor (color?: string | Color): color is Color {
  const colors = [
    'primary',
    'secondary',
    'default',
    'success',
    'danger',
    'warning',
    'info',
  ]
  if (!color) {
    return false
  }
  return colors.includes(color)
}

export function textColorClass (color?: Color): string {
  if (color === undefined) {
    return ''
  }
  return classNames(
    `text-${color}-2`,
  )
}

export function isDarkColor (color: string): boolean {
  const d3Color = hsl(color)
  const { r, g, b } = d3Color.rgb()
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness < 128
}
