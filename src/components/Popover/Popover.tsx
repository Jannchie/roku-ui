import './Popover.css';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { BaseProps } from '../../utils/type';

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-black px-2 py-1 rounded whitespace-nowrap">
        {children}
      </div>
      <svg className="absolute fill-black left-1/2" style={{ width: 20, height: 5, transform: 'translateX(-50%)' }}>
        <path
          d="m0 0c15 6 5 6 20 0z"
        />
      </svg>
    </>
  );
}

export function PopoverRoot({
  content, underline, children, ...other
}: {
  content: ReactNode;
  underline?: boolean;
  children?: ReactNode;
  style?: BaseProps['style'];
} & BaseProps) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative"
      onMouseEnter={() => { setShow(true); }}
      onMouseLeave={() => { setShow(false); }}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className={classNames('r-popover-content', other.className)}
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
      <span className={classNames(
        { 'r-popover-main-underline': underline },
      )}
      >
        {children}
      </span>
    </span>
  );
}
export const Popover = Object.assign(PopoverRoot, {
  Content,
});
