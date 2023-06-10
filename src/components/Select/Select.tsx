import './select.css'
import { type ReactNode, useState, useRef, type HTMLAttributes, useEffect, useCallback, type MutableRefObject } from 'react'
import classNames from 'classnames'
import { type Color, TextField, useOnClickOutside, List, Panel, Icon } from '../..'
import { type BaseProps } from '../../utils/type'
import { TablerArrowsMoveVertical } from '@roku-ui/icons-tabler'

export type RSelectProps<T> = {
  setValue: (d: T) => void
  options: T[]
  notFoundContent?: ReactNode
  color?: Color
  defaultValue?: T
  getKey?: (d: T) => string
  getFilter?: (query: string) => (d: T) => boolean
  autocomplete?: boolean
} & BaseProps

export function Select<T> ({
  defaultValue,
  setValue,
  options,
  id,
  className,
  color = 'primary',
  notFoundContent = <div className={classNames(
    'r-combobox-item r-combobox-text',
    'bg-background-2',
  )}
  >
    { 'No results found' }
  </div>,
  getKey,
  getFilter,
  autocomplete,
  ...others
}: RSelectProps<T>) {
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
  const filteredData = !autocomplete
    ? options
    : (query === '') || options.map(trueGetKey).includes(query)
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
    <div
      ref={wrapper}
      id={id}
      className={classNames('r-combobox', className)}
      {...others}
    >
      <TextField
        readOnly={!autocomplete}
        value={query}
        type="search"
        className={classNames('r-combobox-input', {
          'r-combobox-no-filter': !autocomplete,
        })}
        suffix={!autocomplete && <Icon variant="text">
          <TablerArrowsMoveVertical />
        </Icon>}
        color={color}
        onClick={() => {
          setShow(true)
        }}
        onKeyDown={(event) => {
          event.stopPropagation()
          switch (event.key) {
            case 'Escape': setShow(false); return
            case 'ArrowDown': {
              event.preventDefault()
              if (focusIndex < filteredData.length - 1) {
                setFocusIndex(focusIndex + 1)
              } else {
                setFocusIndex(0)
              }
              return
            }
            case 'ArrowUp': {
              event.preventDefault()
              if (focusIndex > 0) {
                setFocusIndex(focusIndex - 1)
              } else {
                setFocusIndex(filteredData.length - 1)
              }
              return
            }
            case 'Enter': {
              event.preventDefault()
              if (focusIndex >= 0) {
                shouldReopen.current = false
                setValue(filteredData[focusIndex])
                setQuery(trueGetKey(filteredData[focusIndex]))
                setShow(false)
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
          <Panel className={classNames('r-combobox-options', { hidden: !show })}>
            <List>
              { filteredData.length === 0 && query !== ''
                ? (
                  notFoundContent
                )
                : (
                  filteredData.map((d, i) => {
                    return (
                      <OptionComponent<T>
                        key={trueGetKey(d)}
                        filteredData={filteredData}
                        setFocusIndex={setFocusIndex}
                        focus={focusIndex === i}
                        selfIndex={i}
                        setValue={setValue}
                        setShow={setShow}
                        color={color}
                        data={d}
                        getKey={trueGetKey}
                        setKey={setQuery}
                        shouldReopen={shouldReopen}
                      />
                    )
                  })
                ) }
            </List>
          </Panel>
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
  setFocusIndex,
  shouldReopen,
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
  filteredData: T[]
  shouldReopen: MutableRefObject<boolean>
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
      className={classNames(
        'r-combobox-item',
        { 'r-combobox-focused': focus },
      )}
      hover={focus}
      onClick={() => {
        const key = getKey(data)
        shouldReopen.current = false
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
