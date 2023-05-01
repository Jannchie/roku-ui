import classNames from 'classnames'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type Color } from '../../..'
import { MaterialSymbolIcon } from '../../MaterialSymbolIcon'
import { TextField } from '../../TextField'
import './Appbar.css'

type AppbarAttributes = {
  varient?: 'default' | 'blur' | 'transparent' | 'pattern'
  border?: boolean
  color?: Color
  icon?: ReactNode
  title?: ReactNode
  leading?: ReactNode
  tailing?: ReactNode
  searchCallback?: (value: string) => void
} & Omit<HTMLAttributes<HTMLElement>, 'title'>
export const Appbar: FC<AppbarAttributes> = ({
  varient = 'default',
  color = 'background',
  border,
  icon,
  title,
  searchCallback,
  tailing,
  leading,
  ...others
}: AppbarAttributes) => {
  return (
    <header
      className={classNames(
        'r-appbar-wrapper',
        `r-appbar-${varient}`,
        { 'r-appbar-border': border },
        { [`bg-${color}-2`]: varient === 'default' },
        { [`bg-${color}-2/25`]: varient === 'blur' },
        { [`bg-${color}-2/10`]: varient === 'pattern' },
        others.className,
      )}
      {...others}
    >
      <div className="r-appbar-leading">
        { leading }
        <div className="r-appbar-title">
          <div className="r-appbar-title__icon">
            { icon }
          </div>
          <div>
            { title }
          </div>
        </div>
      </div>
      <div className="r-appbar-tailing">
        { (searchCallback != null) && (
          <div>
            <TextField
              prefix={<MaterialSymbolIcon icon="search" />}
              value={undefined}
              onChange={(e) => {
                searchCallback(e.target.value)
              }}
            />
          </div>
        ) }
        { tailing }
      </div>

    </header>
  )
}
