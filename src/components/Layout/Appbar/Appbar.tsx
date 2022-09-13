import classNames from 'classnames'
import { ReactNode } from 'react'
import { MaterialSymbolIcon } from '../../MaterialSymbolIcon'
import { TextField } from '../../TextField'
import './Appbar.css'

export function Appbar ({
  varient = 'default',
  icon,
  title,
  searchCallback,
  tailing,
  leading,
  ...others
}: {
  varient?: 'default' | 'blur' | 'transparent' | 'pattern'
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
