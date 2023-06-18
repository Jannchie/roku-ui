import classnames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'

export function Container ({ children, className, ...others }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classnames('container m-auto', className)}
      {...others}
    >
      { children }
    </div>
  )
}
