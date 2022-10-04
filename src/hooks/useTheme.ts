import { useEffect, useState } from 'react'
import { defaultDark, defaultLight } from '../utils/theme'
import { registTheme } from '../utils/theme/utils'

export function useTheme () {
  registTheme('dark', defaultDark)
  registTheme('light', defaultLight)
  const [theme, setTheme] = useState<string>()
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('roku.ui.theme', theme)
    } else {
      let localTheme = localStorage.getItem('roku.ui.theme')
      if (!localTheme) {
        localTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      setTheme(localTheme)
    }
  }, [theme])
  return { theme, setTheme }
}
