import { hsl } from 'd3-color'
import { Theme } from '.'

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
      const c = hsl(value)
      if (c) {
        // extract hsl
        console.log(c.formatHsl().match(regexp), c.formatHsl())
        items.push(`--r-${key}: ${c.formatHsl().match(regexp)?.slice(1, 4).map((d, i) => i === 0 ? d : d + '%').join(', ') ?? ''};`)
        for (const level of [1, 2, 3]) {
          let newColor = c
          if (level === 1) { newColor = c.brighter(level * theme.k) }
          if (level === 3) { newColor = c.darker(level * theme.k) }
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
