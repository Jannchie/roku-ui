import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function usePrefersColorScheme (): Theme {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => { setTheme(e.matches ? 'dark' : 'light') }
    mediaQuery.addEventListener('change', handleChange)
    return () => { mediaQuery.removeEventListener('change', handleChange) }
  }, [])

  function getInitialTheme (): Theme {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light'
  }

  return theme
}
