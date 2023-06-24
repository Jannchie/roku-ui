import { useState, useEffect, useCallback } from 'react'

export function usePrefersColorScheme (): string | undefined {
  const [theme, setTheme] = useState<string | undefined>()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => { setTheme(e.matches ? 'dark' : 'light') }
    mediaQuery.addEventListener('change', handleChange)
    return () => { mediaQuery.removeEventListener('change', handleChange) }
  }, [])

  const getInitialTheme = useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light'
  }, [],
  )
  useEffect(() => {
    setTheme(getInitialTheme())
  }, [getInitialTheme])
  return theme
}
