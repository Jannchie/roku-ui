import { type ReactNode, type HTMLAttributes, useCallback } from 'react'
import { Flex } from '../Layout/Flex'
import './ToggleGroup.css'
import classNames from 'classnames'
import { type Color } from '../..'

function ToggleGroupRoot<T> ({ children, value, setValue, data, item, color = 'default' }: { color?: Color, children?: Iterable<ReactNode>, value: T, setValue: (s: T) => void, data: T[], item?: (t: T) => ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const defaultItem = useCallback((t: T) => String(t), [])
  const trueItem = item ?? defaultItem
  return (
    <Flex
      inline
      gap=".25rem"
      className="r-toggle-group-wrapper"
    >
      { Array.from(data).map((child, i) => (
        <button
          key={`${i}`}
          className={classNames('r-toggle-group-item', {
            [`r-toggle-group-item-active bg-${color}-2`]: value === child,
            'hover:bg-frontground-2/10': value !== child,
          })}
          onClick={() => { setValue(child) }}
        >
          { trueItem(child) }
        </button>
      )) }
    </Flex>
  )
}
export const ToggleGroup = Object.assign(ToggleGroupRoot, {})
