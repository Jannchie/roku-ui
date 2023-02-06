import './Popover.css'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { type BaseProps } from '../../utils/type'

function Content ({
  children,
  left,
  right,
}: {
  left?: boolean
  right?: boolean
  children: ReactNode
}) {
  return (
    <div className="z-50">
      <div className="r-popover-content">
        {children}
      </div>
      <svg className={classNames('r-popover-indicator', {
        'r-popover-indicator-left': left,
        'r-popover-indicator-right': right,
      })} width={10} height={5} >
        <path
          d="m0 0c5 6 5 6 10 0z"
        />
      </svg>
    </div>
  )
}

export function PopoverRoot ({
  content, underline, children, ...other
}: {
  content: ReactNode
  underline?: boolean
  children?: ReactNode
  style?: BaseProps['style']

} & BaseProps) {
  const [show, setShow] = useState(true)
  return (
    <span
      className="relative"
      onMouseEnter={() => { setShow(true) }}
      onMouseLeave={() => { setShow(false) }}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className={classNames('r-popover-content-wrapper', other.className)}
            style={{
              ...other.style,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...other}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      <span className={
        classNames(
          'r-popover-wrapper',
          { 'r-popover-main-underline': underline },
        )
      }>
        {children}
      </span>
    </span>
  )
}
export const Popover = Object.assign(PopoverRoot, {
  Content,
})
