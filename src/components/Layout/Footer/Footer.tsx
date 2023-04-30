import classNames from 'classnames'
import { type HTMLAttributes } from 'react'
import './Footer.css'

export function Footer ({
  children,
  ...others
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      {...others}
      className={classNames('r-footer-wrapper border-b-2', others.className)}
    >
      { children }
    </footer>
  )
}
