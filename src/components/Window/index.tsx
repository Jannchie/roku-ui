import { HTMLAttributes, ReactNode } from 'react'
import { Panel } from '../Panel'

export function Window ({
  children,
  className,
  ...props
}: {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <Panel border>
      <div className="flex gap-2 p-2">
        <div className="w-3 h-3 bg-danger-1 rounded-full" />
        <div className="w-3 h-3 bg-warning-1 rounded-full" />
        <div className="w-3 h-3 bg-success-1 rounded-full" />
      </div>
      <div className="p-2">body</div>
    </Panel>
  )
}
