import './AutoComplete.css'
import { type ReactNode, useState, useRef } from 'react'
import classNames from 'classnames'
import { type Colors, TextField, useOnClickOutside } from '../..'
import { type BaseProps } from '../../utils/type'

export type RComboboxProps<T extends { id: number, name: string }> = {
  notFoundContent?: ReactNode
  color?: Colors
  getFilter?: (query: string) => (d: T) => boolean
  data: T[]
} & BaseProps

export function AutoComplete<T extends { id: number, name: string }> ({
  data,
  id,
  className,
  style,
  color = 'default',
  notFoundContent = 'No results found',
  getFilter = (query: string) => {
    return (d: T): boolean => d.name
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
                filteredData.map((d) => <OptionItem<T> key={d.id} setFocused={setFocused} color={color} data={d} setData={setQuery} />)
              ) }
          </div>
        )
      }
    </div>
  )
}

function OptionItem <T extends { id: number, name: string }> ({ color, data, setData, setFocused }: { color: string, data: T, setData: (v: string) => void, setFocused: (v: boolean) => void }) {
  const [hover, setHover] = useState(false)
  return <button
    className={classNames(
      'r-combobox-item',
      {
        [`bg-${color}-2`]: hover,
        'bg-background-2': !hover,
      })}
    onClickCapture={() => {
      setData(data.name)
      setFocused(false)
    }}
    onMouseEnter={() => { setHover(true) }}
    onMouseLeave={() => { setHover(false) }}
  >
    { data.name }
  </button>
}
