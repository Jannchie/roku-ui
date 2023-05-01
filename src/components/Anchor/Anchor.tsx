import './Anchor.css'
import classNames from 'classnames'
import { type AnchorHTMLAttributes } from 'react'
import { type Color } from '../..'
import { TablerExternalLink } from '@roku-ui/icons-tabler'

export function Anchor ({
  color = 'primary',
  children,
  className,
  showExternalIcon = 'auto',
  ...props
}: {
  color?: Color
  showExternalIcon?: 'auto' | boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  function isExternalLink (url: string): boolean {
    try {
      const currentHost = window.location.host
      const urlHost = new URL(url).host
      return urlHost !== currentHost
    } catch {
      return false
    }
  }
  return (
    <a
      {...props}
      className={classNames(
        className,
        'r-anchor',
        { 'r-anchor-clickable': props.href !== undefined || props.onClick !== undefined },
        { [`decoration-${color}-2 hover:decoration-${color}-2 hover:text-${color}-2`]: props.href !== undefined || props.onClick !== undefined },
      )}
    >
      { children }
      { (showExternalIcon === true || (showExternalIcon === 'auto' && isExternalLink(props.href ?? ''))) &&
        <TablerExternalLink style={{ height: '1em', display: 'inline' }} />
      }
    </a>
  )
}
