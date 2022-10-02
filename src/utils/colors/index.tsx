import classNames from 'classnames'

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'default'
  | 'danger'
  | 'warning'
  | 'info'
  | 'bg'
  | 'fg'

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

export function bgColorClass (color?: Colors, opacity?: 10 | 25 | 50 | 75 | 90): string {
  if (color === undefined) {
    return ''
  }
  if (opacity) {
    return classNames(`bg-${color}-2/${opacity}`, `hover:bg-${color}-3/${opacity}`)
  }
  return classNames(
    `bg-${color}-2`,
    `hover:bg-${color}-3`,
    'text-white',
  )
}

export function hoverBgColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  if (color === 'default') {
    return 'bg-fg-1'
  }
  return classNames(
    `hover:bg-${color}-1`,
    `active:bg-${color}-3`,
  )
}

export function textColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  return classNames(
    `text-${color}-2`,
  )
}

export function borderColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  return classNames(
    `border-${color}-3`,
    'border',
  )
}

export function ringColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  if (color === 'default') {
    return 'ring-fg-1'
  }
  return classNames(
    `ring-${color}-2`,
    'ring-offset-bg-2',
    'ring',
  )
}

export function outlineColorClass (color?: Colors): string {
  if (color === undefined) {
    return ''
  }
  if (color === 'default') {
    return 'outline-fg-1'
  }
  return classNames(
    `outline-${color}-2`,
    'outline',
  )
}
