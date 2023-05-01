import classNames from 'classnames'
import { type HTMLAttributes } from 'react'

export function Flex ({ col, children, style, className, direction, justify, align, wrap, gap, ...others }: {
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: number | string
  col?: boolean
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: col ? 'column' : direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
        ...style,
      }}
      className={classNames(
        'r-flex',
        {
          'flex-col': direction === 'column',
          'flex-row': direction === 'row',
        },
        className,
      )}
      {...others}
    >
      { children }
    </div>
  )
}

// Don't delete this line. It's useful for generating css classes for unocss.
// md:flex-col md:flex-row lg:flex-row lg:flex-row xl:flex-row xl:flex-row sm:flex-col sm:flex-row
