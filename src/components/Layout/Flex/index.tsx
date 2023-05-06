import classNames from 'classnames'
import { type HTMLAttributes, forwardRef } from 'react'

export const Flex = forwardRef(({ col, children, style, className, inline, direction, justify, align, wrap, gap, ...others }: {
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: number | string
  col?: boolean
  inline?: boolean
} & HTMLAttributes<HTMLDivElement>, ref?: React.LegacyRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      style={{
        display: inline ? 'inline-flex' : 'flex',
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
})
Flex.displayName = 'Flex'
// Don't delete this line. It's useful for generating css classes for unocss.
// md:flex-col md:flex-row lg:flex-row lg:flex-row xl:flex-row xl:flex-row sm:flex-col sm:flex-row
