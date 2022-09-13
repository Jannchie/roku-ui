import './Modal.css'
import { ReactNode, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from '../../hooks'
import { BaseProps } from '../../utils/type'

export type ModalProps = {
  children?: ReactNode
  show?: boolean
  hide?: () => void
  background?: boolean
} & BaseProps

export function Modal ({
  className,
  style,
  background,
  children,
  show,
  hide = () => {},
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, hide)
  return (
    <div className={className} style={style}>
      <AnimatePresence>
        {show && (
          <div className="relative z-10">
            {background && (
              <motion.div
                animate={{ opacity: 1 }}
                className="r-modal-bg"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={hide}
              />
            )}
            <div className="r-modal-panel-wrapper">
              <div className="r-modal-panel">
                <motion.div
                  key="modal"
                  ref={ref}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1, duration: 0.15 }}
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
