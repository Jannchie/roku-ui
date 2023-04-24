import { type ReactNode } from 'react'
import { useTheme } from '../hooks'

export function RokuProvider ({ children }: { children: ReactNode }) {
  useTheme()
  return (
    <>
      { children }
    </>
  )
}
