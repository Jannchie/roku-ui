import { useCallback, useContext, useEffect, useLayoutEffect } from 'react'
import { usePrefersColorScheme } from './usePrefersColorScheme'
import { getFullThemeData, themeMap, useRegistTheme } from '../utils/theme/utils'
import { RokuContext } from '../core'
import { hsl } from 'd3-color'
import { defaultDark, defaultLight } from '../utils/theme'

export function useTheme (key: string = 'roku.theme') {
  useRegistTheme('light', defaultLight)
  useRegistTheme('dark', defaultDark)
  const preferred = usePrefersColorScheme()
  const { theme, setTheme: setThemeValue } = useContext(RokuContext)

  useEffect(() => {
    if (theme === 'system') document.cookie = 'roku.theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    else if (themeMap.has(theme)) document.cookie = `roku.theme=${theme}; path=/;`
  }, [theme])

  useEffect(() => {
    if (preferred) {
      document.cookie = `roku.theme.default=${preferred}; path=/;`
    }
  })

  const setThemeAttributeWithTrueTheme = useCallback((theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const setThemeAttributeWithAnimation = useCallback((theme: string, animation = { x: 0, y: 0 }) => {
    const { x, y } = animation
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      document.documentElement.setAttribute('data-theme', theme)
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: theme !== 'dark' ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: theme !== 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)',
        },
      )
    }).catch(() => { })
  }, [])

  // set theme
  const setThemeAttribute = useCallback((theme: string, animation: boolean | { x: number, y: number } = false) => {
    if (theme === 'system') {
      if (preferred && document.documentElement.getAttribute('data-theme') !== preferred) {
        if (animation) setThemeAttributeWithAnimation(preferred, typeof animation === 'boolean' ? undefined : animation)
        else setThemeAttributeWithTrueTheme(preferred)
      }
    } else if (document.documentElement.getAttribute('data-theme') !== theme) {
      if (animation) setThemeAttributeWithAnimation(theme, typeof animation === 'boolean' ? undefined : animation)
      else setThemeAttributeWithTrueTheme(theme)
    }
  }, [preferred, setThemeAttributeWithAnimation, setThemeAttributeWithTrueTheme])
  const setTheme = useCallback((theme: string, animation: boolean | { x: number, y: number } = false) => {
    setThemeValue(theme)
    setThemeAttribute(theme, animation)
  }, [setThemeAttribute, setThemeValue])
  const toggleTheme = useCallback((event: React.MouseEvent) => {
    if (theme === 'system') {
      setTheme('dark', { x: event.clientX, y: event.clientY })
    } else if (theme === 'dark') {
      setTheme('light', { x: event.clientX, y: event.clientY })
    } else {
      setTheme('system', { x: event.clientX, y: event.clientY })
    }
  }, [setTheme, theme])
  // read from cookies
  useLayoutEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(key + '='))
    if (cookie) {
      const value = cookie.split('=')[1]
      if (value === 'system' || !themeMap.has(value)) {
        // pass
      } else {
        setTheme(value)
        setThemeAttribute(value)
      }
    }
  }, [key, preferred, setTheme, setThemeAttribute])
  useEffect(() => {
    const activeTheme = document.documentElement.getAttribute('data-theme')
    if (!activeTheme) {
      // get ${key}.default
      const defaultCookies = document.cookie
        .split('; ')
        .find((row) => row.startsWith(key + '.default='))?.split('=')[1]
      if (theme !== 'system') {
        setThemeAttribute(theme)
      }
      if (defaultCookies) {
        setThemeAttribute(defaultCookies)
      }
      if (preferred) {
        setThemeAttribute(preferred)
      }
    }
  }, [key, preferred, setThemeAttribute, theme])

  return { theme, setTheme, toggleTheme }
}

export function useTrueTheme (): string {
  const { theme } = useTheme()
  const preferredTheme = usePrefersColorScheme()
  if (theme === 'system') {
    return preferredTheme ?? 'light'
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
