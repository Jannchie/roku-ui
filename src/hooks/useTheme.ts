import { useCallback, useEffect, useState } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'

type ThemeValue = 'system' | 'dark' | 'light'

export function useTheme (localstorageKey: string = 'roku.theme') {
  const preferred = usePrefersColorScheme()
  let defaultTheme: ThemeValue = 'system'
  const [theme, setThemeValue] = useState<ThemeValue>(defaultTheme)
  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem(localstorageKey)
    if (savedTheme) {
      defaultTheme = savedTheme as ThemeValue
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
      setThemeValue(savedTheme as ThemeValue)
    }
  }, [localstorageKey])

  const setTheme = useCallback((theme: ThemeValue) => {
    localStorage.setItem(localstorageKey, theme)
    setThemeValue(theme)
  }, [localstorageKey])

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
