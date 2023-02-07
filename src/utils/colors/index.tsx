import classNames from 'classnames'

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'default'
  | 'danger'
  | 'warning'
  | 'info'
  | 'background'
  | 'frontground'

export function isColor (color?: string | Colors): color is Colors {
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

export function textColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  return classNames(
    `text-${color}-2`,
  )
}
