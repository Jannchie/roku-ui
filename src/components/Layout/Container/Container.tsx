import { type ReactNode } from 'react'
import './Container.css'

export function Container ({ children }: { children: ReactNode }) {
  return (
    <div className="r-container">
      {children}
    </div>
  )
}
