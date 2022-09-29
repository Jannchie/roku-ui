import classNames from 'classnames'
import { ReactNode } from 'react'
import { bgColorClass, BgColors, Colors } from '../../..'
import { MaterialSymbolIcon } from '../../MaterialSymbolIcon'
import { TextField } from '../../TextField'
import './Appbar.css'

export function Appbar ({
  varient = 'default',
  color = 'bg-1',
  border,
  icon,
  title,
  searchCallback,
  tailing,
  leading,
  ...others
}: {
  varient?: 'default' | 'blur' | 'transparent' | 'pattern'
  border?: boolean
  color?: Colors | BgColors
  icon?: ReactNode
  title?: ReactNode
  leading?: ReactNode
  searchCallback?: (value: string) => void
  tailing?: ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={classNames(
      'r-appbar-wrapper',
      `r-appbar-${varient}`,
      { 'r-appbar-border': border },
      { [bgColorClass(color)]: varient !== 'pattern' },
      others.className,
    )} {...others}>
      <div className="r-appbar-leading">
        {leading}
        <div className="r-appbar-title">
          <div className="r-appbar-title__icon">
            {icon}
          </div>
          <div>
            {title}
          </div>
        </div>
      </div>
      <div className="r-appbar-tailing">
        {(searchCallback != null) && (
          <div>
            <TextField
              prefix={<MaterialSymbolIcon icon="search" />}
              value={undefined}
              onChange={(e) => {
                searchCallback(e.target.value)
              }}
            />
          </div>
        )}
        {tailing}
      </div>

    </header>
  )
}
