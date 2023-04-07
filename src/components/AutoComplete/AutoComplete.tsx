import './AutoComplete.css'
import { type ReactNode, useState, useRef } from 'react'
import classNames from 'classnames'
import { type Colors, TextField, useOnClickOutside } from '../..'
import { type BaseProps } from '../../utils/type'

export type RComboboxProps<T> = {
  notFoundContent?: ReactNode
  color?: Colors
  getKey?: (d: T) => string
  getFilter?: (query: string) => (d: T) => boolean
  data: T[]
} & BaseProps

export function AutoComplete<T> ({
  data,
  id,
  className,
  style,
  color = 'default',
  notFoundContent = 'No results found',
  getKey = (d: T) => d as any,
  getFilter = (query: string) => {
    return (d: T): boolean => getKey(d)
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  },
  children,
}: RComboboxProps<T>) {
  const [query, setQuery] = useState('')
  const filteredData = query === ''
    ? data
    : data.filter(getFilter(query))
  const [focused, setFocused] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)
  useOnClickOutside(wrapper, () => {
    setFocused(false)
  })
  return (
    <div ref={wrapper} id={id} className={classNames('r-combobox', className)} style={style}>
      <TextField
        color={color}
        value={query}
        onFocus={() => { setFocused(true) }}
        onChange={(event) => { setQuery(event.target.value) }}
      />
      { /* <button className="r-combobox-btn" type="button">
            <span className="material-symbols-outlined">expand_more</span>
          </button> */ }
      {
        (
          <div className={classNames('r-combobox-options', { hidden: !focused })}>
            { filteredData.length === 0 && query !== ''
              ? (
                <div className={classNames(
                  'r-combobox-item',
                  'bg-background-2',
                )}>{ notFoundContent }</div>
              )
              : (
                filteredData.map((d) => <OptionItem<T> key={getKey(d)} setFocused={setFocused} color={color} data={d} getKey={getKey} setKey={setQuery} />)
              ) }
          </div>
        )
      }
    </div>
  )
}

function OptionItem<T> ({
  color,
  data,
  setKey,
  getKey,
  setFocused,
}: {
  color: string
  data: T
  setKey: (v: string) => void
  getKey: (d: T) => string
  setFocused: (v: boolean) => void
}) {
  const [hover, setHover] = useState(false)
  return <button
    className={classNames(
      'r-combobox-item',
      {
        [`bg-${color}-2`]: hover,
        'bg-background-2': !hover,
      })}
    onClickCapture={() => {
      setKey(getKey(data))
      setFocused(false)
    }}
    onMouseEnter={() => { setHover(true) }}
    onMouseLeave={() => { setHover(false) }}
  >
    { getKey(data) }
  </button>
}
