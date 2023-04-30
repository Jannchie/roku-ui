import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'
import './Container.css'

export function Container ({ children, className, ...others }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames('r-container', className)}
      {...others}
    >
      { children }
    </div>
  )
}
