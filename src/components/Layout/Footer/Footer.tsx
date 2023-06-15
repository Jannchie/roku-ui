import classNames from 'classnames'
import { type HTMLAttributes } from 'react'

export function Footer ({
  children,
  ...others
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      {...others}
      className={classNames('flex text-sm w-full border-t bg-background border-background-2 px-4 py-1 items-center justify-between border-b-2', others.className)}
    >
      { children }
    </footer>
  )
}
