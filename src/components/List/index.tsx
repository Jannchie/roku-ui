import { Flex } from '../Layout/Flex'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { type Color } from '../../utils/colors'
import { useOpacityColor } from '../../hooks'

export function ListBase ({ className, children, ...others }: { children?: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classnames('p-2 min-w-36', className)}
      {...others}
    >
      { children }
    </div>
  )
}

function ListTitle ({ children, className, ...others }: HTMLAttributes<HTMLDivElement>) {
  return (
    <h2
      {...others}
      className={classnames('p-2 text-frontground-3 text-xs', className)}
    >
      { children }
    </h2>
  )
}

const ListItem = forwardRef((
  { children, icon, title, className, hover, color = 'default', ...others }: { color?: Color, icon?: ReactNode, title?: ReactNode, hover?: boolean } & HTMLAttributes<HTMLDivElement>,
  ref: any,
) => {
  return (
    <Flex
      ref={ref}
      style={{
        ...others.style,
        ...{
          '--r-color-10': useOpacityColor(color, 0.1),
          '--r-fg-10': useOpacityColor('frontground', 0.1),
        },
      }}
      className={classnames('p-2 rounded cursor-pointer', className, {
        'hover:bg-[var(--r-color-10)]': typeof hover === 'undefined',
        'bg-[var(--r-fg-10)]': hover,
      })}
      gap=".5rem"
      align="center"
      {...others}
    >
      { children ?? <>
        { icon }
        {
          title && (
            <div className="text-sm text-frontground-2 p-0.5">
              { title }
            </div>
          )
        }
      </> }
    </Flex>
  )
})
ListItem.displayName = 'ListItem'

export const List = Object.assign(ListBase, {
  Title: ListTitle,
  Item: ListItem,
})
