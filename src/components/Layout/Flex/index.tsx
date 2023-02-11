import classNames from 'classnames'
import { type HTMLAttributes } from 'react'

export function Flex ({ children, className, direction, justify, align, wrap, gap, ...others }: {
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: number | string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      gap,
    }} className={classNames('r-flex', className)} {...others}>
      {children}
    </div>
  )
}
