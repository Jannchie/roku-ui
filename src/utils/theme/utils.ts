import { hsl } from 'd3-color'
import { defaultDark, defaultLight, type InputTheme, type ThemeColorObject, type ThemeData } from '.'
function isThemeColor (color: any): color is ThemeColorObject {
  return typeof color?.base === 'string'
}

export const themeMap = new Map<string, InputTheme>()

export function registTheme (name: string, theme: InputTheme) {
  themeMap.set(name, theme)
  appendTheme(name, theme)
}

registTheme('light', defaultLight)
registTheme('dark', defaultDark)

export function appendTheme (name: string, theme: InputTheme) {
  if (typeof document !== 'undefined') {
    let style = document.getElementById(`theme-${name}`)
    if (style) {
      // already exist
      return
    }
    const cssStr = getCSS(theme, name)
    style = document.createElement('style')
    style.id = `theme-${name}`
    style.innerHTML = cssStr
    document.head.appendChild(style)
  }
}

export function getFullThemeData (theme: InputTheme): ThemeData {
  let globalK = 0.2
  const result: ThemeData = { dark: false, color: {} }
  for (const [key, value] of Object.entries(theme)) {
    if (key === 'k') {
      globalK = value
      continue
    }
    if (key === 'dark') {
      result.dark = value
      continue
    }
    if (typeof value === 'string') {
      const color = hsl(value)
      result.color[key] = {
        base: color.formatHex(),
        darker: color.darker(globalK).formatHex(),
        lighter: color.brighter(globalK).formatHex(),
      }
    } else if (isThemeColor(value)) {
      const k = value.k ?? globalK
      const color = hsl(value.base)
      result.color[key] = {
        base: color.formatHex(),
        darker: color.darker(k).formatHex(),
        lighter: color.brighter(k).formatHex(),
      }
    }
  }
  return result
}

export function getCSS (theme: InputTheme, name: string) {
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
  return `[data-theme="${name}"] {${items.join('')}}`.replace(/\s+/g, ' ')
}
