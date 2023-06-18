
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

export function isColor (color: string): color is Color {
  return [
    'primary',
    'secondary',
    'success',
    'default',
    'danger',
    'warning',
    'info',
    'background',
    'frontground',
  ].includes(color)
}
