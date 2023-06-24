import { useCallback, useContext, useLayoutEffect, useRef } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'
import { getFullThemeData, themeMap, useRegistTheme } from '../utils/theme/utils'
import { RokuContext } from '../core'
import { hsl } from 'd3-color'
import { defaultDark, defaultLight } from '../utils/theme'

type ThemeValue = 'system' | 'dark' | 'light' | string

export function useTheme (key: string = 'roku.theme') {
  useRegistTheme('light', defaultLight)
  useRegistTheme('dark', defaultDark)
  const preferred = usePrefersColorScheme()
  const defaultTheme = useRef('system')
  const { theme, setTheme: setThemeValue } = useContext(RokuContext)
  const trueTheme = useTrueTheme()
  const setTheme = useCallback((theme: ThemeValue) => {
    localStorage.setItem(key, theme)
    document.cookie = `${key}=${trueTheme};path=/;max-age=31536000`
    setThemeValue(theme)
  }, [key, setThemeValue, trueTheme])

  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('system')
    }
  }, [setTheme, theme])
  useLayoutEffect(() => {
    if (typeof localStorage === 'undefined') return
    const localTheme = localStorage?.getItem(key) ?? 'system'
    if (localTheme === 'system') {
      defaultTheme.current = preferred
    } else {
      defaultTheme.current = localTheme
    }
  }, [key, preferred])

  // set theme
  useLayoutEffect(() => {
    if (typeof localStorage === 'undefined') return
    const savedTheme = localStorage.getItem(key)
    if (savedTheme) {
      defaultTheme.current = savedTheme
    }
    if (defaultTheme.current === 'system') {
      document.documentElement.setAttribute('data-theme', preferred)
    } else {
      document.documentElement.setAttribute('data-theme', defaultTheme.current)
    }
  })

  // read from localstorage
  useLayoutEffect(() => {
    if (typeof localStorage === 'undefined') return
    const savedTheme = localStorage.getItem(key)
    if (savedTheme) {
      setThemeValue(savedTheme)
    }
  }, [key, setThemeValue])
  return { theme, setTheme, toggleTheme }
}

export function useTrueTheme (): string {
  const { theme } = useTheme()
  const preferredTheme = usePrefersColorScheme()
  if (theme === 'system') {
    return preferredTheme
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
