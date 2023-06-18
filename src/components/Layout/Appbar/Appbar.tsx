import classnames from 'classnames'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { Icon, type Color, useColorHex, getOpacityColor } from '../../..'
import { TextField } from '../../TextField'
import { TablerSearch } from '@roku-ui/icons-tabler'

type AppbarAttributes = {
  varient?: 'default' | 'blur' | 'transparent'
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
  style,
  ...others
}: AppbarAttributes) => {
  const colorStyles = {
    '--r-bg-color': useColorHex('background'),
    '--r-bg-color-25': getOpacityColor(useColorHex('background'), 0.25),
    '--r-bg-color-10': getOpacityColor(useColorHex('background'), 0.1),
    '--r-border-color': useColorHex('border'),
  }
  return (
    <header
      role="banner"
      style={{
        ...style,
        ...colorStyles,
      }}
      className={classnames(
        'flex text-sm w-full z-10 px-4 py-1 items-center justify-between',
        { 'border-b border-[var(--r-border-color)]': border },
        { 'bg-[var(--r-bg-color)]': varient === 'default' },
        { 'bg-[var(--r-bg-color-25)] backdrop-blur-xl': varient === 'blur' },
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
