import classnames from 'classnames'
import { type HTMLAttributes } from 'react'
import { useTrueColor } from '../../../hooks'

export function Footer ({
  children,
  ...others
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      {...others}
      style={{
        ...others.style,
        ...{
          '--r-bg-color': useTrueColor('background'),
          '--r-border-color': useTrueColor('border'),
        },
      }}
      className={classnames('flex text-sm w-full border-t bg-[var(--r-bg-color)] border-[var(--r-border-color)] px-4 py-1 items-center justify-between border-b-2', others.className)}
    >
      { children }
    </footer>
  )
}
