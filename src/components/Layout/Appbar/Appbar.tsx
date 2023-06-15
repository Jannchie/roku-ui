import classNames from 'classnames'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { Icon, type Color } from '../../..'
import { TextField } from '../../TextField'
import { TablerSearch } from '@roku-ui/icons-tabler'

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
      role="banner"
      className={classNames(
        'flex text-sm w-full z-10 px-4 py-1 items-center justify-between',
        `r-appbar-${varient}`,
        { 'border-b border-border-2': border },
        { [`bg-${color}-2`]: varient === 'default' },
        { [`bg-${color}-2/25`]: varient === 'blur' },
        { [`bg-${color}-2/10`]: varient === 'pattern' },
        others.className,
      )}
      {...others}
    >
      <div className="flex items-center">
        { leading }
        <div className="my-3 mx-2 flex">
          <div className="mr-2">
            { icon }
          </div>
          <div>
            { title }
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        { (searchCallback != null) && (
          <div>
            <TextField
              prefix={<Icon >
                <TablerSearch />
              </Icon>}
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
