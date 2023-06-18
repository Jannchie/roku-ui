import {
  type ReactNode, useEffect, useRef, useState, type HTMLAttributes, type FormEventHandler,
} from 'react'
import classnames from 'classnames'
import { type Color, useAutoSetHeight, useColorHex } from '../..'
import { type BaseProps } from '../../utils/type'

// eslint-disable-next-line react/no-unused-prop-types
function Item ({ children }: { label: ReactNode, children?: ReactNode }) {
  return (
    <div>
      { children }
    </div>
  )
}

function List ({
  data,
  color,
  type,
  selectedIndex,
  onChange,
  className,
  ...props
}: {
  data: Array<{
    key: ReactNode
    value: ReactNode
  }>
  selectedIndex: number
  color: Color
  type: 'fill' | 'indicator'
  onChange: (index: number) => void
} & HTMLAttributes<HTMLDivElement>) {
  const tabList = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number
    left: number
  }>({ left: 0, width: 0 })
  const indicatorColor = 'bg-[var(--main-color)]'
  const textColor = 'text-[var(--main-color)]'
  const colorStyle = { '--main-color': useColorHex(color) }
  useEffect(() => {
    if (tabList.current != null) {
      const tabBtn = tabList.current.children[
        selectedIndex
      ] as HTMLButtonElement
      if (tabBtn) {
        setIndicatorStyle(() => ({
          left: tabBtn.offsetLeft,
          width: tabBtn.offsetWidth,
        }))
      }
    }
  }, [selectedIndex])

  function getBtnClass (index: number) {
    let btnClass = ''
    if (index === selectedIndex) {
      if (type === 'indicator') {
        btnClass = classnames(textColor)
      } else {
        btnClass = classnames('text-white', indicatorColor)
      }
    }
    return btnClass
  }

  return (
    <>
      <div
        ref={tabList}
        style={{ ...colorStyle, ...props.style }}
        className={classnames(className, 'text-sm')}
        {...props}
      >
        { data.map((d, i) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            aria-selected={selectedIndex === i}
            className={`${getBtnClass(i)} rounded px-2 py-1 !outline-none`}
            role="tab"
            tabIndex={-1}
            type="button"
            onClick={() => {
              onChange(i)
            }}
            onMouseEnter={() => {
              // onChange(i);
            }}
            onKeyDown={(e) => {
              switch (e.key) {
                case 'ArrowLeft':
                  onChange(
                    selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1,
                  )
                  break
                case 'ArrowRight':
                  onChange(
                    selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1,
                  )
                  break
                case 'ArrowUp':
                  onChange(
                    selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1,
                  )
                  break
                case 'ArrowDown':
                  onChange(
                    selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1,
                  )
                  break
                default:
              }
            }}
          >
            { d.key }
          </button>
        )) }
      </div>
      { type === 'indicator' && (
        <div
          className="h-0.5"
          style={{ ...colorStyle as any }}
        >
          <div
            className={classnames('transition-left absolute h-0.5 rounded-md', indicatorColor)}
            style={indicatorStyle}
          />
        </div>
      ) }
    </>
  )
}
type RTabsProps = {
  selectedIndex: number
  onChange: ((index: number) => void) & FormEventHandler<HTMLDivElement>
  type?: 'fill' | 'indicator'
  color?: Color
  children: ReactNode
} & BaseProps

export function TabsRoot (props: RTabsProps) {
  const {
    id,
    style,
    selectedIndex,
    onChange,
    type = 'indicator',
    color = 'primary',
    className,
    children,
  } = props
  function getData () {
    const data = []
    if ('children' in props && children) {
      if (Array.isArray(props.children)) {
        props.children.forEach((tab) => {
          if (tab.props) {
            data.push({
              key: tab.props.label,
              value: tab.props.children,
            })
          }
        })
      } else if (typeof children === 'object' && 'props' in children && children.props) {
        data.push({
          key: children.props.label,
          value: children.props.children,
        })
      }
    }
    return data
  }
  const wrapperRef = useRef<HTMLDivElement>(null)
  const data = getData()
  useAutoSetHeight(wrapperRef)
  const tabComps = data
    .map((d, i) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        style={{
          display: selectedIndex === i ? 'block' : 'none',
        }}
      >
        { d.value }
      </div>
    ))
  return (
    <div
      className={classnames(className, 'relative')}
      id={id}
      style={style}
    >
      <List
        color={color}
        data={data}
        selectedIndex={selectedIndex}
        type={type}
        onChange={onChange}
      />
      <div
        ref={wrapperRef}
        className="r-tab-panels transition-height mt-2 overflow-hidden"
      >
        { tabComps.filter((_, i) => i === selectedIndex) }
      </div>
    </div>
  )
}

export const Tabs = Object.assign(TabsRoot, { Item })
