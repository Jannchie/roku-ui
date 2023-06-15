import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'

export function Article ({ children, className, ...others }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <article
      className={classNames('m-auto prose', className)}
      {...others}
    >
      { children }
    </article>
  )
}
