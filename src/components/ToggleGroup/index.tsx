import { type ReactNode, type HTMLAttributes, useCallback } from 'react'
import { Flex } from '../Layout/Flex'
import { Btn, type Color } from '../..'

function ToggleGroupRoot<T> ({ value, setValue, data, item, body, color = 'default' }: { color?: Color, children?: Iterable<ReactNode>, value: T, setValue: (s: T) => void, data: T[], item?: (t: T, i: number) => ReactNode, body?: (t: T, i: number) => ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const defaultItem = useCallback((t: T, i: number) => {
    return (
      <Btn
        key={i}
        size="sm"
        text={value !== t}
        fill={value === t}
        color={color}
        onClick={() => { setValue(t) }}
      >
        { body ? body(t, i) : String(t) }
      </Btn>
    )
  }, [color, body, setValue, value])
  const trueItem = item ?? defaultItem
  return (
    <Flex
      inline
      gap=".25rem"
      className="p-1 border rounded-lg relative border-border-2"
    >
      { Array.from(data).map((child, i) => trueItem(child, i)) }
    </Flex>
  )
}
export const ToggleGroup = Object.assign(ToggleGroupRoot, {})
