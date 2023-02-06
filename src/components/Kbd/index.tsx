import { type HTMLAttributes, type ReactNode } from 'react'

export function Kbd ({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLElement>) {
  return <kbd {...props}>{children}</kbd>
}
