import './AutoComplete.css'
import { type ReactNode, useState, useRef, type HTMLAttributes } from 'react'
import classNames from 'classnames'
import { type Colors, TextField, useOnClickOutside, Btn } from '../..'
import { type BaseProps } from '../../utils/type'

export type RComboboxProps<T> = {
  setValue: (d: T) => void
  options: T[]
  notFoundContent?: ReactNode
  color?: Colors
  defaultValue?: T
  getKey?: (d: T) => string
  getFilter?: (query: string) => (d: T) => boolean
} & BaseProps

export function AutoComplete<T> ({
  defaultValue,
  setValue,
  options,
  id,
  className,
  style,
  color = 'default',
  notFoundContent = <div className={classNames(
    'r-combobox-item r-combobox-text',
    'bg-background-2',
  )}>{ 'No results found' }</div>,
  getKey = (d: T) => d as any,
  getFilter = (query: string) => {
    return (d: T): boolean => getKey(d)
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  },
  ...others
}: RComboboxProps<T>) {
  const [query, setQuery] = useState(defaultValue ? getKey(defaultValue) : '')
  const filteredData = (query === '') || options.map(getKey).includes(query)
    ? options
    : options.filter(getFilter(query))
  const [focused, setFocused] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)
  useOnClickOutside(wrapper, () => {
    setFocused(false)
  })
  const [focusIndex, setFocusIndex] = useState(-1)
  return (
    <div ref={wrapper} id={id} className={classNames('r-combobox', className)} {...others} >
      <TextField
        suffix={focused && (
          <Btn
            icon
            text style={{ display: 'flex', height: 20, width: 20, padding: 0 }} color={color}
            onClick={() => { setQuery(''); setFocused(false) }} >
            <svg width="20" height="20" viewBox="0 0 28 28">
              <line x1="8" y1="20" x2="20" y2="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="8" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Btn>
        )}
        className="r-combobox-input"
        color={color}
        value={query}
        onClick={() => { setFocused(true) }}
        onKeyUp={(event) => {
          event.preventDefault()
          event.stopPropagation()
          switch (event.key) {
            case 'ArrowDown': {
              if (focusIndex < filteredData.length - 1) {
                setFocusIndex(focusIndex + 1)
              }
              return
            }
            case 'ArrowUp': {
              if (focusIndex > 0) {
                setFocusIndex(focusIndex - 1)
              }
              return
            }
            case 'Enter': {
              if (focusIndex >= 0) {
                setValue(filteredData[focusIndex])
                setQuery(getKey(filteredData[focusIndex]))
                setFocused(false)
              }
            }
          }
        }}
        onFocus={() => {
          setFocusIndex(-1)
          setFocused(true)
        }}
        onChange={(event) => {
          setQuery(event.target.value)
          const option = options.find(getFilter(event.target.value))
          if (option && getKey(option) === event.target.value) {
            setValue(option)
          }
        }}
      />
      {
        (
          <div className={classNames('r-combobox-options', { hidden: !focused })}>
            { filteredData.length === 0 && query !== ''
              ? (
                notFoundContent
              )
              : (
                filteredData.map((d, i) => {
                  return <OptionComponent<T> key={getKey(d)} filteredData={filteredData} setFocusIndex={setFocusIndex} focus={focusIndex === i} focusIndex={focusIndex} setValue={setValue} setFocused={setFocused} color={color} data={d} getKey={getKey} setKey={setQuery} />
                })
              ) }
          </div>
        )
      }
    </div>
  )
}

function OptionComponent<T> ({
  color,
  data,
  setKey,
  setValue,
  getKey,
  setFocused,
  focus,
  focusIndex,
  setFocusIndex,
  filteredData,
  ...props
}: {
  color: string
  data: T
  focus: boolean
  setKey: (v: string) => void
  getKey: (d: T) => string
  setValue: (d: T) => void
  setFocused: (v: boolean) => void
  focusIndex: number
  filteredData: T[]
  setFocusIndex: (v: number) => void
} & HTMLAttributes<HTMLButtonElement>) {
  const [hover, setHover] = useState(false)
  const self = useRef<HTMLButtonElement>(null)
  if (focus) {
    self.current?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }
  return <button
    {...props}
    ref={self}
    className={classNames(
      'r-combobox-item',
      {
        [`bg-${color}-2`]: hover || focus,
        'bg-background-2': !hover && !focus,
      })}
    onKeyUp={(event) => {
      event.preventDefault()
      event.stopPropagation()
      switch (event.key) {
        case 'ArrowDown': {
          if (focusIndex < filteredData.length - 1) {
            event.preventDefault()
            event.stopPropagation()
            setFocusIndex(focusIndex + 1)
          }
          return
        }
        case 'ArrowUp': {
          if (focusIndex > 0) {
            event.preventDefault()
            event.stopPropagation()
            setFocusIndex(focusIndex - 1)
          }
        }
      }
    }}
    onClick={() => {
      const key = getKey(data)
      setKey(key)
      setFocused(false)
      setValue(data)
    }}
    onMouseEnter={() => { setHover(true) }}
    onMouseLeave={() => { setHover(false) }}
  >
    { getKey(data) }
  </button>
}
