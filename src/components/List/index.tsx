import { Flex } from '../Layout/Flex'
import { type HTMLAttributes, type ReactNode } from 'react'
import classNames from 'classnames'
import { type Color } from '../../utils/colors'

export function ListBase ({ className, children, ...others }: { children?: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames('inline-block p-2 min-w-36', className)}
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
      className={classNames('p-2 text-frontground-3 text-xs', className)}
    >
      { children }
    </h2>
  )
}

function ListItem ({ icon, title, className, color = 'default', ...others }: { color: Color, icon?: ReactNode, title?: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex
      className={classNames(`hover:bg-${color}-2/10 p-2 rounded cursor-pointer`, className)}
      gap=".5rem"
      align="center"
      {...others}
    >
      { icon }
      {
        title && (
          <div className="text-sm text-frontground-2 p-0.5">
            { title }
          </div>
        )
      }
    </Flex>
  )
}

export const List = Object.assign(ListBase, {
  Title: ListTitle,
  Item: ListItem,
})
