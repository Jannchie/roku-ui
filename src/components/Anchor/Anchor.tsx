import classnames from 'classnames'
import { type AnchorHTMLAttributes } from 'react'
import { useTrueColor, type Color } from '../..'
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
    return url.startsWith('http')
  }
  const colorHex = useTrueColor(color)
  return (
    <a
      {...props}
      style={{
        ...props.style,
        ...{
          '--r-decoration-color': color ? colorHex : undefined,
        },
      }}
      className={classnames(
        className,
        'inline-flex items-center gap-1 relative underline-offset-2 cursor-default',
        { 'decoration-dashed': dash },
        { 'cursor-pointer underline': props.href !== undefined || props.onClick !== undefined },
        { 'decoration-[var(--r-decoration-color)] hover:text-[var(--r-decoration-color)]': props.href !== undefined || props.onClick !== undefined },
      )}
    >
      { children }
      { (showExternalIcon === true || (showExternalIcon === 'auto' && isExternalLink(props.href ?? ''))) &&
        <TablerExternalLink style={{ height: '1em', display: 'inline' }} />
      }
    </a>
  )
}
