import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode, useRef, useState, useEffect } from 'react'
import { type PanelProps } from '../Panel'
import { TablerChevronDown } from '@roku-ui/icons-tabler'
import { Icon } from '../Icon'
export function Collapse ({
  children,
  className,
  header,
  expanded,
  setExpanded,
  icon = (
    <Icon
      size={12}
    >
      <TablerChevronDown/>
    </Icon>
  ),
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
      className={classNames(className, 'block')}
      onClick={() => {
        if (setE) setE(!e)
      }}
      {...props}
    >
      <div className={classNames('cursor-pointer text-lg flex items-center gap-2 relative')}>
        <div
          className="transition-transform"
          style={{
            transform: `rotate(${e ? 360 : 270}deg)`,
          }}
        >
          { icon }
        </div>
        { header }
      </div>
      <div
        ref={compRef}
        className={classNames({
          'transition-height relative overflow-hidden will-change-height': true,
        })}
        style={{ height: !e ? 0 : h }}
      >
        { children }
      </div>
    </button>
  )
}
