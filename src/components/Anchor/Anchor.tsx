import classNames from 'classnames'
import { type AnchorHTMLAttributes } from 'react'
import { type Color } from '../..'
import { TablerExternalLink } from '@roku-ui/icons-tabler'

export function Anchor ({
  color = 'primary',
  children,
  className,
  dash,
  showExternalIcon = 'auto',
  ...props
}: {
  color?: Color
  dash?: boolean
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
        'inline-flex items-center gap-1 relative underline-offset-2 cursor-default',
        { 'decoration-dashed': dash },
        { 'cursor-pointer underline': props.href !== undefined || props.onClick !== undefined },
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
