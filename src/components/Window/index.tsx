import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'
import { type Color } from '../../utils/colors'
import { Panel } from '../Panel'
import { TitleBar } from '../TitleBar'

export function Window ({
  children,
  color,
  title,
  os = 'mac',
  ...props
}: {
  title?: ReactNode
  children: ReactNode
  color?: Color
  os?: 'mac' | 'win'
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <Panel
      border
      color={color}
      className={classNames(props.className)}
      {...props}
    >
      <TitleBar
        title={title}
        os={os}
      />
      <div className="mx-2 mb-2">
        { children }
      </div>
    </Panel>
  )
}
