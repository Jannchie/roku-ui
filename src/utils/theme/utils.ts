import { hsl, rgb } from 'd3-color'
import { type InputTheme, type ThemeColorObject, type ThemeData } from '.'
import { useEffect } from 'react'
function isThemeColor (color: any): color is ThemeColorObject {
  return typeof color?.base === 'string'
}

export const themeMap = new Map<string, InputTheme>()

export function useRegistTheme (name: string, theme: InputTheme) {
  themeMap.set(name, theme)
  // useAppendTheme(name, theme)
}

export function useAppendTheme (name: string, theme: InputTheme) {
  useEffect(() => {
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
  }, [name, theme])
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

export function calculateContrast (color1: string, color2: string) {
  // 将颜色值转换为 RGB 格式
  const rgb1 = rgb(color1)
  const rgb2 = rgb(color2)
  // 计算亮度
  const l1 = relativeLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = relativeLuminance(rgb2.r, rgb2.g, rgb2.b)
  // 计算对比度
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export function getConstractColor (bg: string) {
  const colorWhite = '#fff'
  const colorBlack = '#000'
  const contrastWhite = calculateContrast(bg, colorWhite)
  const contrastBlack = calculateContrast(bg, colorBlack)
  return contrastWhite > contrastBlack ? colorWhite : colorBlack
}

// function calculateRelativeLuminance (rgb: RGBColor) {
//   const { r, g, b } = rgb
//   return 0.2126 * r / 255 + 0.7152 * g / 255 + 0.0722 * b / 255
// }

function relativeLuminance (r8: number, g8: number, b8: number) {
  const bigR = srgb8ToLinear(r8)
  const bigG = srgb8ToLinear(g8)
  const bigB = srgb8ToLinear(b8)
  return 0.2126 * bigR + 0.7152 * bigG + 0.0722 * bigB
}

/**
 * Convert an 8-bit color component from sRGB space (the default web color
 * space) into the linear RGB color space.
 *
 * This is a helper function for `relativeLuminance`, and at the moment isn't
 * needed except as part of calling that function.
 *
 * @param c8 number  An 8-bit integer color channel in the sRGB color space. In
 *                   other words, a number between 0 and 255 (inclusive).
 *                   Anything outside this range will be clamped and truncated.
 *
 * @returns  number  The value of the channel in a linear RGB color space -- a
 *                   number between 0.0 and 1.0, inclusive.
 */
const srgb8ToLinear = (function () {
  // There are only 256 possible different input values (0 <= input <= 255),
  // so we just use a lookup table, which to avoid repeating the (somewhat
  // costly) computation 3 times for each input.
  const srgbLookupTable = new Float64Array(256)
  for (let i = 0; i < 256; ++i) {
    const c = i / 255.0
    srgbLookupTable[i] = (c <= 0.04045)
      ? c / 12.92
      : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  return function srgb8ToLinear (c8: number) {
    // Input should be an integer between 0 and 255 already, but clamp if
    // for some reason it is not.
    const index = Math.min(Math.max(c8, 0), 255) & 0xff
    return srgbLookupTable[index]
  }
}())
