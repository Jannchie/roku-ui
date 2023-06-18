import classnames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { type ReactNode, useState, type HTMLAttributes } from 'react'
import { type BaseProps } from '../../utils/type'
import { useColorHex } from '../../hooks'

function Content ({
  children,
  left,
  right,
  style,
  ...props
}: {
  left?: boolean
  right?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>) {
  const bg = useColorHex('background')
  return (
    <div
      className="z-50"
      {...props}
      style={{
        ...style,
        ...{
          '--r-bg': bg,
        },
      }}
    >
      <div className="px-2 py-1 rounded whitespace-nowrap bg-[var(--r-bg)]">
        { children }
      </div>
      <svg
        className={classnames('absolute left-1/2 pointer-events-none translate-x-[-5px] fill-[var(--r-bg)]', {
          'left-1/4': left,
          'right-1/4': right,
        })}
        width={10}
        height={5}
      >
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
        { show && (
          <motion.div
            className={classnames('absolute bottom-full mb-4 left-1/2 translate-x-[-50%]', other.className)}
            style={{
              ...other.style,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...other}
          >
            { content }
          </motion.div>
        ) }
      </AnimatePresence>
      <span className={classnames(
        'relative inline-block',
        { 'underline underline-offset-2 decoration-dotted decoration-2': underline },
      )}
      >
        { children }
      </span>
    </span>
  )
}
export const Popover = Object.assign(PopoverRoot, {
  Content,
})
