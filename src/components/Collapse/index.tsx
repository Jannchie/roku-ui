import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode, useRef, useState, useEffect } from 'react'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import { type PanelProps } from '../Panel'
import './Collapse.css'
export function Collapse ({
  children,
  className,
  header,
  expanded,
  setExpanded,
  icon = <MaterialSymbolIcon
    size="lg"
    icon="expand_more"
  />,
  ...props
}: {
  header?: ReactNode
  children: ReactNode
  expanded?: boolean
  icon?: ReactNode
  setExpanded?: (expanded: boolean) => void
} & PanelProps & HTMLAttributes<HTMLButtonElement>) {
  const compRef = useRef<HTMLDivElement>(null)
  const [internelExpanded, setInternelExpanded] = useState(expanded)
  let e = expanded
  let setE = setExpanded
  if (!setE) {
    e = internelExpanded
    setE = setInternelExpanded
  }

  const [h, setH] = useState(0)
  useEffect(() => {
    if (compRef.current) {
      const height = compRef.current.scrollHeight
      setH(height)
    }
  }, [])
  return (
    <button
      className={classNames(className, 'r-collapse-wrapper')}
      onClick={() => {
        if (setE) setE(!e)
      }}
      {...props}
    >
      <div className={classNames('r-collapse-title')}>
        { icon && (
          <div
            className="transition-transform"
            style={{
              transform: `rotate(${e ? 360 : 270}deg)`,
            }}
          >
            { icon }
          </div>
        ) }
        { header }
      </div>
      <div
        ref={compRef}
        className={classNames({
          'r-collapse-close': !e,
          'r-collapse-content': true,
        })}
        style={{ height: !e ? 0 : h }}
      >
        { children }
      </div>
    </button>
  )
}
