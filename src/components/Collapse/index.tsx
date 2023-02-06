import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode, useRef, useState } from 'react'
import { useAutoSetHeight } from '../../hooks'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import { Panel, type PanelProps } from '../Panel'

export function Collapse ({
  children,
  className,
  header,
  expanded,
  setExpanded,
  icon = <MaterialSymbolIcon size="lg" icon="expand_more" />,
  ...props
}: {
  header?: ReactNode
  children: ReactNode
  expanded?: boolean
  icon?: ReactNode
  setExpanded?: (expanded: boolean) => void
} & PanelProps & HTMLAttributes<HTMLDivElement>) {
  const compRef = useRef(null)
  useAutoSetHeight(compRef)
  const [internelExpanded, setInternelExpanded] = useState(expanded)
  let e = expanded
  let setE = setExpanded
  if (!setE) {
    e = internelExpanded
    setE = setInternelExpanded
  }
  return (
    <Panel padding onClick={() => {
      if (setE) setE(!e)
    }} {...props}>
      <div className={classNames('cursor-pointer text-lg flex items-center justify-between')}>
        {header}
        {icon && (
          <div style={{
            transition: 'transform 0.3s',
            transform: `rotate(${e ? 180 : 0}deg)`,
          }} >
            {icon}
          </div>
        )}
      </div>
      <div ref={compRef} className={classNames({
        'h-[0%] leading-[0] overflow-hidden transition-all': !e,
        'h-[100%]  transition-all': e,
      })}>
        {children}
      </div>
    </Panel>
  )
}
