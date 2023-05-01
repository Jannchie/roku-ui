import classNames from 'classnames'

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
