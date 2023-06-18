import classnames from 'classnames'
import { Icon, type Color } from '../..'
import { T } from '../Typography'
import { type ReactNode } from 'react'
import { type Size } from '../../utils/type'

export function Result ({
  icon, title, description, size = 120, color = 'primary',
}: {
  icon: ReactNode
  title: string
  color?: Color
  size?: Size
  description?: string
}) {
  return (
    <div className={classnames('flex flex-col items-center gap-2', {
      [`text-${color}-2`]: true,
    })}
    >
      <Icon
        color={color}
        variant="text"
        size={size}
      >
        { icon }
      </Icon>
      <T.H4>
        { title }
      </T.H4>
      <div className={classnames('text-frontground-3 text-xs')}>
        { description }
      </div>
    </div>
  )
}
