import { type HTMLAttributes, type ReactNode } from 'react'
import { type Color, Panel } from '../..'
import { type BaseProps } from '../../utils/type'
import classnames from 'classnames'

type CardProps = {
  title?: ReactNode
  subtitle?: ReactNode
  body?: ReactNode
  actions?: ReactNode[] | ReactNode
  dense?: boolean
  shadow?: boolean
  border?: boolean
  divider?: boolean
  backgroundColor?: Color
} & BaseProps & Omit<HTMLAttributes<HTMLDivElement>, 'color'>

export function Card ({
  className,
  title,
  subtitle,
  body,
  actions,
  children,
  dense,
  divider,
  shadow,
  border,
  backgroundColor = 'background',
  ...other
}: CardProps) {
  const cardClass = classnames(
    'flex flex-col gap-2 rounded-lg',
    {
      'divide-y': divider,
      'gap-1 rounded': dense,
      'shadow-xl': shadow,
      border,
    },
    `bg-${backgroundColor}-2`,
    className,
  )
  if (children) {
    return <div className={cardClass}>{ children }</div>
  }
  return (
    <Panel
      className={cardClass}
      {...other}
    >
      { title && (
        <div className={classnames({
          'p-4 pb-0 text-base': dense,
          'p-6 pb-0 text-base': !dense,
        })}
        >
          <div className="font-bold">{ title }</div>
          <div>{ subtitle }</div>
        </div>
      ) }
      { body && <div className={classnames({
        'p-4 text-sm': dense,
        'p-6 text-sm': !dense,
      })}
      >
        { body }
      </div> }
      { actions && <div className={classnames('flex gap-2 justify-end', {
        'p-6 pt-0': !dense,
        'p-4 pt-0 py-1 text-sm': dense,
      })}
      >
        { actions }
      </div> }
    </Panel>
  )
}
