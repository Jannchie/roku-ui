import { useRef, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { List } from '../..'

export function OptionComponent<T> ({
  color, data, setKey, setValue, getKey, setShow, focus, setFocusIndex, filteredData, selfIndex, ...props
}: {
  color: string
  data: T
  focus: boolean
  setKey: (v: string) => void
  getKey: (d: T) => string
  setValue: (d: T) => void
  setShow: (v: boolean) => void
  filteredData: T[]
  selfIndex: number
  setFocusIndex: (v: number) => void
} & HTMLAttributes<HTMLDivElement>) {
  const self = useRef<HTMLButtonElement>(null)
  if (focus) {
    self.current?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }
  return (
    <List.Item
      {...props}
      ref={self}
      className={classnames(
        'relative cursor-default select-none block w-full text-left cursor-pointer',
      )}
      hover={focus}
      onClick={() => {
        const key = getKey(data)
        setKey(key)
        setShow(false)
        setValue(data)
      }}
      onMouseMove={() => { setFocusIndex(selfIndex) }}
    >
      { getKey(data) }
    </List.Item>
  )
}
