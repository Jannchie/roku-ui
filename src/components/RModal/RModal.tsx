import "./RModal.css";
import { RModalProps } from "./RModalProps";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import { motion, AnimatePresence } from "framer-motion";
export function RModal({
  background,
  children,
  show,
  hide: hide = () => {},
}: RModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, hide);
  return (
    <AnimatePresence>
      {show && (
        <div className="relative z-10">
          {background && (
            <motion.div
              onClick={hide}
              className="r-modal-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          )}
          <div className="r-modal-panel-wrapper">
            <div className="r-modal-panel">
              <motion.div
                key="modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15, delay: 0.1 }}
                ref={ref}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
