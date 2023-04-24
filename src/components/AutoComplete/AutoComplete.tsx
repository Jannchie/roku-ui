import './AutoComplete.css'
import { type ReactNode, useState, useRef, type HTMLAttributes, useEffect, useCallback } from 'react'
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
  getKey,
  getFilter,
  ...others
}: RComboboxProps<T>) {
  const defaultGetKey = useCallback((d: T) => String(d), [])
  const defaultGetFilter = (query: string) => {
    return (d: T): boolean => trueGetKey(d)
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  }
  const trueFilter = getFilter ?? defaultGetFilter
  const trueGetKey = getKey ?? defaultGetKey
  const [query, setQuery] = useState(defaultValue ? trueGetKey(defaultValue) : '')
  const filteredData = (query === '') || options.map(trueGetKey).includes(query)
    ? options
    : options.filter(trueFilter(query))
  const [show, setShow] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)
  useOnClickOutside(wrapper, () => {
    setShow(false)
  })
  useEffect(() => {
    shouldReopen.current = false
    setQuery(defaultValue ? trueGetKey(defaultValue) : '')
  }, [defaultValue, trueGetKey])

  const shouldReopen = useRef(true)
  useEffect(() => {
    if (shouldReopen.current) {
      setShow(true)
    } else {
      shouldReopen.current = true
    }
    setFocusIndex(-1)
  }, [query])
  const [focusIndex, setFocusIndex] = useState(-1)
  return (
    <div ref={wrapper} id={id} className={classNames('r-combobox', className)} {...others} >
      <TextField
        value={query}
        suffix={show && (
          <Btn
            icon
            text style={{ display: 'flex', height: 20, width: 20, padding: 0 }} color={color}
            onClick={() => { setQuery(''); setShow(false) }} >
            <svg width="20" height="20" viewBox="0 0 28 28">
              <line x1="8" y1="20" x2="20" y2="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="8" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Btn>
        )}
        className="r-combobox-input"
        color={color}
        onClick={() => {
          setShow(true)
          shouldReopen.current = true
        }}
        onKeyDown={(event) => {
          event.stopPropagation()
          switch (event.key) {
            case 'ArrowDown': {
              event.preventDefault()
              if (focusIndex < filteredData.length - 1) {
                setFocusIndex(focusIndex + 1)
              }
              return
            }
            case 'ArrowUp': {
              event.preventDefault()
              if (focusIndex > 0) {
                setFocusIndex(focusIndex - 1)
              }
              return
            }
            case 'Enter': {
              event.preventDefault()
              if (focusIndex >= 0) {
                setValue(filteredData[focusIndex])
                setShow(false)
                shouldReopen.current = false
              }
              setFocusIndex(-1)
            }
          }
        }}
        onFocus={() => {
          setFocusIndex(-1)
          setShow(true)
        }}
        onChange={(event) => {
          setQuery(event.target.value)
          const option = options.find(trueFilter(event.target.value))
          if (option && trueGetKey(option) === event.target.value) {
            setValue(option)
          }
        }}
      />
      {
        (
          <div className={classNames('r-combobox-options', { hidden: !show })}>
            { filteredData.length === 0 && query !== ''
              ? (
                notFoundContent
              )
              : (
                filteredData.map((d, i) => {
                  return <OptionComponent<T>
                    key={trueGetKey(d)}
                    filteredData={filteredData}
                    setFocusIndex={setFocusIndex}
                    focus={focusIndex === i}
                    selfIndex={i}
                    focusIndex={focusIndex}
                    setValue={setValue}
                    setShow={setShow}
                    color={color}
                    data={d}
                    getKey={trueGetKey}
                    setKey={setQuery}
                  />
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
  setShow,
  focus,
  focusIndex,
  setFocusIndex,
  filteredData,
  selfIndex,
  ...props
}: {
  color: string
  data: T
  focus: boolean
  setKey: (v: string) => void
  getKey: (d: T) => string
  setValue: (d: T) => void
  setShow: (v: boolean) => void
  focusIndex: number
  filteredData: T[]
  selfIndex: number
  setFocusIndex: (v: number) => void
} & HTMLAttributes<HTMLButtonElement>) {
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
        [`bg-${color}-2`]: focus,
        'bg-background-2': !focus,
      })}
    onKeyUp={(event) => {
      event.preventDefault()
      event.stopPropagation()
      switch (event.key) {
        case 'ArrowDown': {
          if (focusIndex < filteredData.length - 1) {
            event.preventDefault()
            setFocusIndex(focusIndex + 1)
          }
          return
        }
        case 'ArrowUp': {
          if (focusIndex > 0) {
            event.preventDefault()
            setFocusIndex(focusIndex - 1)
          }
        }
      }
    }}
    onClick={() => {
      const key = getKey(data)
      setKey(key)
      setShow(false)
      setValue(data)
    }}
    onMouseMove={() => { setFocusIndex(selfIndex) }}
  >
    { getKey(data) }
  </button>
}
