import classNames from 'classnames'
import { Colors, textColorClass } from '../..'
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
    <div className={classNames('flex flex-col text-center', {
      [textColorClass(color)]: true,
    })}
    >
      <MaterialSymbolIcon size={sizeNumber} icon={icon} />
      <Typography.H3 className={classNames('r-result-title')}>
        {title}
      </Typography.H3>
      <div className={classNames('r-result-desc')}>
        {description}
      </div>
    </div>
  )
}
