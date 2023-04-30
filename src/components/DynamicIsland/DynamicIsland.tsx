import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'

export const DynamicIsland = ({
  children,
  translating,
  durationMS = 150,
  className,
  ...others
}: {
  children: ReactNode
  durationMS?: number
  translating: boolean
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames('overflow-hidden', className, 'transition-all')}
      {...others}
    >
      <div style={{
        transition: `filter ${durationMS}ms`,
        filter: `blur(${translating ? 8 : 0}px)`,
        height: '100%',
      }}
      >
        { children }
      </div>
    </div>
  )
}
