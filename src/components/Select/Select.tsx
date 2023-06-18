import { type ReactNode, useState, useRef, type HTMLAttributes, useCallback } from 'react'
import classnames from 'classnames'
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
  notFoundContent = <div className={classnames(
    'relative cursor-default select-none block w-full text-left cursor-pointer cursor-auto',
    'bg-[var(--r-bg)]',
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
  const [focusIndex, setFocusIndex] = useState(-1)
  return (
    <div
      ref={wrapper}
      id={id}
      className={classnames('relative inline-block h-min min-w-32', className)}
      {...others}
    >
      <TextField
        suffixAbsolute
        readOnly={!autocomplete}
        value={query}
        type="search"
        className={classnames('w-full text-left p-0')}
        classNames={{
          input: classnames({
            'cursor-pointer': !autocomplete,
          }),
        }}
        suffix={!autocomplete && <Icon
          style={{
            pointerEvents: 'none',
          }}
          variant="text"
        >
          <TablerArrowsMoveVertical />
        </Icon>}
        color={color}
        onClick={() => {
          setShow(true)
        }}
        onKeyDown={(event) => {
          event.stopPropagation()
          switch (event.key) {
            case 'Escape':
              setShow(false)
              event.currentTarget.blur()
              return
            case 'ArrowDown': {
              event.preventDefault()
              if (focusIndex < filteredData.length - 1) {
                setFocusIndex(focusIndex + 1)
                if (!autocomplete) {
                  setValue(filteredData[focusIndex + 1])
                  setQuery(trueGetKey(filteredData[focusIndex + 1]))
                }
              } else {
                setFocusIndex(0)
                setValue(filteredData[0])
                if (!autocomplete) {
                  setQuery(trueGetKey(filteredData[0]))
                }
              }
              return
            }
            case 'ArrowUp': {
              event.preventDefault()
              if (focusIndex > 0) {
                setFocusIndex(focusIndex - 1)
                if (!autocomplete) {
                  setValue(filteredData[focusIndex - 1])
                  setQuery(trueGetKey(filteredData[focusIndex - 1]))
                }
              } else {
                setFocusIndex(filteredData.length - 1)
                if (!autocomplete) {
                  setValue(filteredData[filteredData.length - 1])
                  setQuery(trueGetKey(filteredData[filteredData.length - 1]))
                }
              }
              return
            }
            case 'Enter': {
              event.preventDefault()
              if (focusIndex >= 0) {
                const key = trueGetKey(filteredData[focusIndex])
                setQuery(key)
                setValue(filteredData[focusIndex])
                setShow(false)
              }
              if (autocomplete) {
                setFocusIndex(-1)
              }
              return
            }
            default: {
              setShow(true)
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
          <Panel className={classnames('z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-base focus: outline-none sm:text-sm z-1 border border-border-2', { hidden: !show })}>
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
                        setQuery={setQuery}
                        autocomplete={autocomplete}
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
  setQuery,
  setValue,
  getKey,
  setShow,
  focus,
  setFocusIndex,
  filteredData,
  selfIndex,
  autocomplete,
  ...props
}: {
  color: string
  data: T
  focus: boolean
  setQuery: (v: string) => void
  getKey: (d: T) => string
  setValue: (d: T) => void
  setShow: (v: boolean) => void
  filteredData: T[]
  selfIndex: number
  setFocusIndex: (v: number) => void
  autocomplete?: boolean
} & HTMLAttributes<HTMLDivElement>) {
  const self = useRef<HTMLButtonElement>(null)
  if (focus) {
    self.current?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }
  return (
    <List.Item
      {...props}
      ref={self}
      hover={focus}
      onClick={(event) => {
        event.preventDefault()
        const key = getKey(data)
        setQuery(key)
        setValue(data)
        setShow(false)
      }}
      onMouseMove={() => { setFocusIndex(selfIndex) }}
    >
      { getKey(data) }
    </List.Item>
  )
}
