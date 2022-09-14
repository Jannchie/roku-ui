import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import './Footer.css'

export function Footer ({
  children,
  ...others
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer { ...others } className={classNames('r-footer-wrapper', others.className)}>
      {children}
    </footer>
  )
}
