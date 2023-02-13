import { useScreen } from './useScreen'

const breakpoints = [
  { name: 'sm', value: 640 },
  { name: 'md', value: 768 },
  { name: 'lg', value: 1024 },
  { name: 'xl', value: 1280 },
  { name: '2xl', value: 1536 },
]

export function useBreakpoint (): 'sm' | 'md' | 'lg' | 'xl' | '2xl' {
  const screen = useScreen()
  if (screen) {
    for (const breakpoint of breakpoints) {
      if (screen.width < breakpoint.value) {
        return breakpoint.name as 'sm' | 'md' | 'lg' | 'xl' | '2xl'
      }
    }
  }
  return '2xl'
}
