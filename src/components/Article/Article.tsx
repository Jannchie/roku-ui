import classnames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'

export function Article ({ children, className, ...others }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <article
      className={classnames('m-auto prose', className)}
      {...others}
    >
      { children }
    </article>
  )
}
