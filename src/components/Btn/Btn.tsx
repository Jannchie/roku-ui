import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Colors, colorClass } from '../../utils/colors';
import { Loading } from '../../icons/Loading';
import './Btn.css';

export type ButtonProps = {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  rounded?: boolean;
  color?: Colors;
  filled?: boolean;
  border?: boolean;
  dash?: boolean;
  text?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  ring?: boolean;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
  loadingIcon?: ReactNode;
  leadingIcon?: ReactNode;
};

function BtnRoot({
  label,
  size = 'md',
  color = 'zinc',
  dash = false,
  loading = false,
  disabled = false,
  border = false,
  rounded = false,
  ring = false,
  filled = true,
  text = false,
  style,
  children,
  onClick,
  className,
  icon = false,
  loadingIcon = <Loading />,
  leadingIcon = null,
}: ButtonProps) {
  const colorCls = colorClass({
    bg: (filled && !text) ? color : undefined,
    border: border ? color : undefined,
    hoverable: color,
    text: text ? color : undefined,
  });
  const btnClass = classNames(
    'r-btn',
    `r-btn-${size}`,
    { 'r-btn-icon': icon },
    { 'r-btn-rounded': rounded },
    { 'r-btn-dash': dash },
    { 'r-btn-ring': ring },
    { 'r-btn-filled': filled && !text },
    { 'r-btn-text': text },
    className,
    colorCls,
  );
  const body = children || label;

  const loadingFinalClass = classNames('leading-[0]', {
    'mr-1': size === 'sm' && !icon,
    'mr-2': (size === 'md' || size === 'lg') && !icon,
    'w-4': size === 'sm',
    'w-6': size === 'lg' || size === 'md',
  });
  if (icon) {
    return (
      <button
        className={btnClass}
        disabled={disabled}
        style={style}
        type="button"
        onClick={onClick}
      >
        <div className={loadingFinalClass}>
          {loading ? loadingIcon : children}
        </div>
      </button>
    );
  }
  return (
    <motion.button
      key="btn-main"
      layout
      className={btnClass}
      disabled={disabled}
      style={style}
      type="button"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        {leadingIcon ? (
          <div className={loadingFinalClass}>
            {loading ? loadingIcon : leadingIcon}
          </div>
        ) : (
          <AnimatePresence>
            {loading && (
              <motion.div
                layout
                animate={{
                  marginRight: size === 'sm' ? 4 : 8,
                  width: size === 'lg' ? 24 : 16,
                }}
                className={loadingFinalClass}
                exit={{ marginRight: 0, width: 0 }}
                initial={{
                  marginRight: 0,
                  width: 0,
                }}
                transition={{
                  bounce: 0,
                  duration: 0.15,
                  type: 'spring',
                }}
              >
                {loadingIcon}
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key="btn-body"
            layout
            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
            transition={{
              bounce: 0,
              duration: 0.15,
              type: 'spring',
            }}
          >
            {body}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

type BtnGroup = {
  className?: string;
  children?: ReactNode;
};
function Group({ className, children }: BtnGroup) {
  return (
    <div className="relative flex">
      <div
        className={classNames(
          className,
          'r-btn-group',
          colorClass({ border: 'zinc' }),
        )}
      >
        {children}
      </div>
    </div>
  );
}

export const Btn = Object.assign(BtnRoot, {
  Group,
});
