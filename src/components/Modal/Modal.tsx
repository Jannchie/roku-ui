import { type ReactNode, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from '../../hooks'
import { type BaseProps } from '../../utils/type'
import classnames from 'classnames'

export type ModalProps = {
  children?: ReactNode
  show?: boolean
  hide?: () => void
  background?: boolean
  backgroundBlur?: boolean
  setShow?: (show: boolean) => void
  preventClickOutside?: boolean
} & BaseProps

export function Modal ({
  className,
  style,
  background,
  backgroundBlur,
  preventClickOutside,
  children,
  show,
  setShow,
  hide = () => {},
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const onHide = useCallback(() => {
    if (preventClickOutside) {
      return
    }
    if (setShow) {
      setShow(false)
    } else if (hide) {
      hide()
    }
  }, [hide, preventClickOutside, setShow])
  useOnClickOutside(ref, onHide)
  return (
    <div
      className={className}
      style={style}
    >
      <AnimatePresence>
        { show && (
          <div className="absolute inset-0 z-10">
            { background && (
              <motion.div
                animate={{ opacity: 1 }}
                className={classnames('fixed inset-0 bg-black bg-opacity-25', { 'backdrop-blur': backgroundBlur })}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={onHide}
              />
            ) }
            <div className={classnames('fixed bottom-2 left-2 right-2 sm:inset-0 overflow-y-auto')}>
              <div className="flex min-h-full items-center justify-center">
                <motion.div
                  key="modal"
                  ref={ref}
                  className="w-full sm:w-auto"
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1, duration: 0.15 }}
                >
                  { children }
                </motion.div>
              </div>
            </div>
          </div>
        ) }
      </AnimatePresence>
    </div>
  )
}
