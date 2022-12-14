import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

export const DynamicIsland = ({
  children,
  translating,
  durationMS = 300,
  className,
  ...others
}: {
  children: ReactNode
  durationMS?: number
  translating: boolean
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames('overflow-hidden', className)}
      {...others}
    >
      <div style={{
        transition: `filter ${durationMS}ms`,
        filter: `blur(${translating ? 8 : 0}px)`,
        height: '100%',
      }}>
        {children}
      </div>
    </div>
  )
}
