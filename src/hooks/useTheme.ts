import { useEffect, useState } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'

export function useTheme () {
  const preferred = usePrefersColorScheme()
  const [theme, setTheme] = useState<'system' | 'dark' | 'light'>('system')
  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.setAttribute('data-theme', preferred)
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [preferred, theme])
  return { theme, setTheme }
}
