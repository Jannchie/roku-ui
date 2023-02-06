import './Modal.css'
import { type ReactNode, useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from '../../hooks'
import { type BaseProps } from '../../utils/type'
import classNames from 'classnames'

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
  const [shakeing, setShakeing] = useState(false)
  const onHide = useCallback(() => {
    if (preventClickOutside) {
      setShakeing(true)
      setTimeout(() => {
        setShakeing(false)
      }, 500)
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
    <div className={className} style={style}>
      <AnimatePresence>
        {show && (
          <div className="absolute inset-0 z-10">
            {background && (
              <motion.div
                animate={{ opacity: 1 }}
                className={classNames('r-modal-bg', { 'r-modal-b-blur': backgroundBlur })}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onHide}
              />
            )}
            <div className={classNames('r-modal-panel-wrapper', { 'r-shake': shakeing })}>
              <div className="r-modal-panel">
                <motion.div
                  key="modal"
                  ref={ref}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
