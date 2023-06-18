import { useCallback, useContext, useEffect, useRef } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'
import { getFullThemeData, themeMap, useRegistTheme } from '../utils/theme/utils'
import { RokuContext } from '../core'
import { hsl } from 'd3-color'
import { defaultDark, defaultLight } from '../utils/theme'

type ThemeValue = 'system' | 'dark' | 'light' | string

export function useTheme (localstorageKey: string = 'roku.theme') {
  useRegistTheme('light', defaultLight)
  useRegistTheme('dark', defaultDark)
  const preferred = usePrefersColorScheme()
  const defaultTheme = useRef('dark')
  useEffect(() => {
    const localTheme = localStorage?.getItem(localstorageKey) ?? 'system'
    if (localTheme === 'system') {
      defaultTheme.current = preferred
    } else {
      defaultTheme.current = localTheme
    }
  }, [localstorageKey, preferred])
  const { theme, setTheme: setThemeValue } = useContext(RokuContext)
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(localstorageKey)
      if (savedTheme) {
        defaultTheme.current = savedTheme
      }
      if (defaultTheme.current === 'system') {
        document.documentElement.setAttribute('data-theme', preferred)
      } else {
        document.documentElement.setAttribute('data-theme', defaultTheme.current)
      }
    }
  })
  useEffect(() => {
    const savedTheme = localStorage.getItem(localstorageKey)
    if (savedTheme) {
      setThemeValue(savedTheme)
    }
  }, [localstorageKey, setThemeValue])

  const setTheme = useCallback((theme: ThemeValue) => {
    localStorage.setItem(localstorageKey, theme)
    setThemeValue(theme)
  }, [localstorageKey, setThemeValue])

  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('system')
    }
  }, [setTheme, theme])
  return { theme, setTheme, toggleTheme }
}

export function useTrueTheme () {
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

export function useColorHex (color: string, level: 1 | 2 | 3 = 2, k = 1) {
  const themeData = useThemeData()
  if (color in themeData.color) {
    if (level === 1) return themeData.color[color].lighter
    if (level === 2) return themeData.color[color].base
    if (level === 3) return themeData.color[color].darker
  }
  const c = hsl(color)
  if (level === 1) return c.brighter(k).formatHex()
  if (level === 3) return c.darker(k).formatHex()
  return hsl(color).formatHex()
}

export function getOpacityColor (color: string, opacity: number) {
  const c = hsl(color)
  c.opacity = opacity
  return c.formatRgb()
}
