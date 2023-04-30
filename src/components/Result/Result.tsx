import classNames from 'classnames'
import { type Colors } from '../..'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import { Typography } from '../Typography'
import './Result.css'

export function Result ({
  icon, title, description, size = 'md', color = 'primary',
}: {
  icon: string
  title: string
  color?: Colors
  size?: 'sm' | 'md' | 'lg'
  description?: string
}) {
  let sizeNumber = 96
  if (size === 'sm') {
    sizeNumber = 64
  }
  if (size === 'lg') {
    sizeNumber = 128
  }
  return (
    <div className={classNames('r-result-wrapper', {
      [`text-${color}-2`]: true,
    })}
    >
      <MaterialSymbolIcon
        size={sizeNumber}
        icon={icon}
      />
      <Typography.H4 className={classNames('r-result-title')}>
        { title }
      </Typography.H4>
      <div className={classNames('r-result-desc')}>
        { description }
      </div>
    </div>
  )
}
