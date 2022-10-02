import { useEffect, useState } from 'react'

export function useTheme () {
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
