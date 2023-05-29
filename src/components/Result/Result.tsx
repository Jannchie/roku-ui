import classNames from 'classnames'
import { Icon, type Color } from '../..'
import { Typography } from '../Typography'
import './Result.css'
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
    <div className={classNames('r-result-wrapper', {
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
      <Typography.H4 className={classNames('r-result-title')}>
        { title }
      </Typography.H4>
      <div className={classNames('r-result-desc')}>
        { description }
      </div>
    </div>
  )
}
