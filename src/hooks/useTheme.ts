import { useEffect, useState } from 'react'
import { defaultDark, defaultLight } from '../utils/theme'
import { registTheme } from '../utils/theme/utils'

export function useTheme () {
  registTheme('dark', defaultDark)
  registTheme('light', defaultLight)
  let localTheme = localStorage.getItem('theme')
  if (localTheme === null) {
    localTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [theme, setTheme] = useState<string>(localTheme)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return { theme, setTheme }
}
