import { hsl } from 'd3-color'
import { Theme, ThemeColorObject } from '.'
function isThemeColor (color: any): color is ThemeColorObject {
  return typeof color?.base === 'string'
}

export function registTheme (name: string, theme: Theme) {
  if (typeof document !== 'undefined') {
    let style = document.getElementById(`theme-${name}`)
    if (style) {
      // already exist
      return
    }
    const items = []
    const regexp = /hsl\(([0-9]{1,}).?[0-9]*,\s*([0-9]{1,}).?[0-9]*%,\s*([0-9]{1,}).?[0-9]*%\)/
    for (const [key, value] of Object.entries(theme)) {
      if (key === 'k') {
        continue
      }
      if (key === 'dark') {
        if (value) {
          items.push('color-scheme: dark;')
        }
        continue
      }
      if (typeof value === 'string') {
        const c = hsl(value)
        if (c) {
          // extract hsl
          items.push(`--r-${key}: ${c.formatHsl().match(regexp)?.slice(1, 4).map((d, i) => i === 0 ? d : d + '%').join(', ') ?? ''};`)
          for (const level of [1, 2, 3]) {
            let newColor = c
            if (level === 1) {
              newColor = c.brighter(level * theme.k)
            }
            if (level === 3) { newColor = c.darker(level * theme.k) }
            items.push(`--r-${key}-${level}: ${newColor.formatHsl().match(regexp)?.slice(1, 4).map((d, i) => i === 0 ? d : d + '%').join(', ') ?? ''};`)
          }
        }
      } else if (isThemeColor(value)) {
        const c = hsl(value.base)
        items.push(`--r-${key}: ${c.formatHsl().match(regexp)?.slice(1, 4).map((d, i) => i === 0 ? d : d + '%').join(', ') ?? ''};`)
        for (const level of [1, 2, 3]) {
          let newColor = c
          if (level === 1) {
            if (value.lighter) {
              newColor = hsl(value.lighter)
            } else {
              newColor = c.brighter(value.k ?? theme.k)
            }
          }
          if (level === 3) {
            if (value.darker) {
              newColor = hsl(value.darker)
            } else {
              newColor = c.darker(value.k ?? theme.k)
            }
          }
          items.push(`--r-${key}-${level}: ${newColor.formatHsl().match(regexp)?.slice(1, 4).map((d, i) => i === 0 ? d : d + '%').join(', ') ?? ''};`)
        }
      }
    }
    style = document.createElement('style')
    style.id = `theme-${name}`
    style.innerHTML = `
    [data-theme="${name}"] {${items.join('')}}`.replace(/\s+/g, ' ')
    document.head.appendChild(style)
  }
}
