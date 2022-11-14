import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import { Colors } from '../../utils/colors'
import { Panel } from '../Panel'

export function Window ({
  children,
  color,
  ...props
}: {
  children: ReactNode
  color?: Colors
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <Panel border color={color} className={classNames(props.className)} {...props}>
      <div className="flex gap-2 p-2">
        <div className="w-3 h-3 bg-red-5 rounded-full" />
        <div className="w-3 h-3 bg-yellow-5 rounded-full" />
        <div className="w-3 h-3 bg-green-5 rounded-full" />
      </div>
      <div className="p-2">body</div>
    </Panel>
  )
}
