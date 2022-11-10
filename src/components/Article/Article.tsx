import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import './Article.css'

export function Article ({ children, className, ...others }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <article className={classNames('r-article prose', className)} {...others}>
      {children}
    </article>
  )
}
