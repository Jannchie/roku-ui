import { Theme, HSLColor } from '.'

export function hexToHsl (hex: string): [number, number, number] {
  if (hex.length === 4) {
    hex = hex.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])/i, '#$1$1$2$2$3$3')
  }
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [h, s, l]
}

export function registTheme (name: string, theme: Theme) {
  let style = document.getElementById(`theme-${name}`)
  if (style) {
    // already exist
    return
  }
  const items = []
  for (const [key, value] of Object.entries(theme)) {
    items.push(`--r-${key.slice(0, -1) + '-' + key.slice(-1)}: ${HSLColor.fromHex(value).toString()};`)
  }
  style = document.createElement('style')
  style.id = `theme-${name}`
  style.innerHTML = `
    [data-theme="${name}"] {${items.join('')}}`.replace(/\s+/g, ' ')
  document.head.appendChild(style)
}
