import { useCallback, useContext, useEffect } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'
import { getFullThemeData, themeMap } from '../utils/theme/utils'
import { RokuContext } from '../core'

type ThemeValue = 'system' | 'dark' | 'light' | string

export function useTheme (localstorageKey: string = 'roku.theme') {
  const preferred = usePrefersColorScheme()
  let defaultTheme: ThemeValue = 'system'
  const { theme, setTheme: setThemeValue } = useContext(RokuContext)
  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem(localstorageKey)
    if (savedTheme) {
      defaultTheme = savedTheme
    }
    if (defaultTheme === 'system') {
      document.documentElement.setAttribute('data-theme', preferred)
    } else {
      document.documentElement.setAttribute('data-theme', defaultTheme)
    }
  }
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
