import classnames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'
import { type Color, Panel } from '../..'
import { type BaseProps } from '../../utils/type'

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
    'r-card',
    {
      'divide-y': divider,
      'r-card-dense': dense,
      'r-card-shadow': shadow,
      'r-card-border': border,
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
        <div className="r-card-title">
          <div className="title-line">{ title }</div>
          <div className="subtitle-line">{ subtitle }</div>
        </div>
      ) }
      { body && <div className="r-card-body">{ body }</div> }
      { actions && <div className="r-card-actions">{ actions }</div> }
    </Panel>
  )
}
