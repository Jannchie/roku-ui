import { useCallback, useContext, useEffect, useLayoutEffect } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'
import { getFullThemeData, themeMap, useRegistTheme } from '../utils/theme/utils'
import { RokuContext } from '../core'
import { hsl } from 'd3-color'
import { defaultDark, defaultLight } from '../utils/theme'

export function useTheme (key: string = 'roku.theme') {
  useRegistTheme('light', defaultLight)
  useRegistTheme('dark', defaultDark)
  const preferred = usePrefersColorScheme()
  const { theme, setTheme } = useContext(RokuContext)

  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('system')
    }
  }, [setTheme, theme])

  useEffect(() => {
    if (theme === 'system') document.cookie = 'roku.theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    else if (themeMap.has(theme)) document.cookie = `roku.theme=${theme}; path=/;`
  }, [theme])

  useEffect(() => {
    if (preferred) {
      document.cookie = `roku.theme.default=${preferred}; path=/;`
    }
  })
  // set theme
  useLayoutEffect(() => {
    if (theme === 'system') {
      if (preferred) {
        document.documentElement.setAttribute('data-theme', preferred)
      }
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  })

  // read from cookies
  useLayoutEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(key + '='))
    if (cookie) {
      const value = cookie.split('=')[1]
      if (value === 'system' || !themeMap.has(value)) {
        // pass
      } else {
        setTheme(value)
      }
    }
  }, [key, preferred, setTheme])
  return { theme, setTheme, toggleTheme }
}

export function useTrueTheme (): string {
  const { theme } = useTheme()
  const preferredTheme = usePrefersColorScheme()
  if (theme === 'system') {
    return preferredTheme ?? 'light'
  }
  return theme
}

export function useThemeData (name?: string) {
  const theme = useTrueTheme()
  const data = themeMap.get(name ?? theme)
  if (!data) {
    throw new Error(`theme ${name ?? theme} not found`)
  }
  return getFullThemeData(data)
}

export function useOpacityColor (color: string, k = 0.25) {
  const themeData = useThemeData()
  if (color in themeData.color) {
    return `hsl(var(--r-${color}-2), ${k})`
  }
  const c = hsl(color)
  c.opacity = k
  return c.formatHex()
}
export function useTrueColor (color: string, level: 1 | 2 | 3 = 2, k = 1) {
  const themeData = useThemeData()
  if (color in themeData.color) {
    return `hsl(var(--r-${color}-${level}))`
  }

  const c = hsl(color)
  if (level === 1) return c.brighter(k).formatHex()
  if (level === 3) return c.darker(k).formatHex()
  return c.formatHex()
}

export function getOpacityColor (color: string, opacity: number) {
  const c = hsl(color)
  c.opacity = opacity
  return c.formatRgb()
}
