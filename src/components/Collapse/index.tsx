import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode, useRef, useState } from 'react'
import { useAutoSetHeight } from '../../hooks'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import { Panel, type PanelProps } from '../Panel'
import './Collapse.css'
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
      <div className={classNames('r-collapse-wrapper')}>
        { header }
        { icon && (
          <div style={{
            transform: `rotate(${e ? 180 : 0}deg)`,
          }} >
            { icon }
          </div>
        ) }
      </div>
      <div ref={compRef} className={classNames({
        'r-collapse-close': !e,
        'r-collapse-open': e,
      })}>
        { children }
      </div>
    </Panel>
  )
}
