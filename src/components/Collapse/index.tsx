import classNames from 'classnames'
import { ReactNode, useRef } from 'react'
import { useAutoSetHeight } from '../../hooks'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import { Panel, PanelProps } from '../Panel'

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
} & PanelProps) {
  const compRef = useRef(null)
  useAutoSetHeight(compRef)
  return (
    <Panel padding onClick={() => {
      if (setExpanded) setExpanded(!expanded)
    }} {...props}>
      <div className={classNames('cursor-pointer text-lg flex items-center justify-between')}>
        {header}
        {icon && (
          <div style={{
            transition: 'transform 0.3s',
            transform: `rotate(${expanded ? 180 : 0}deg)`,
          }} >
            {icon}
          </div>
        )}
      </div>
      <div ref={compRef} className={classNames({
        'h-[0%] leading-[0] overflow-hidden transition-all': !expanded,
        'h-[100%]  transition-all': expanded,
      })}>
        {children}
      </div>
    </Panel>
  )
}
