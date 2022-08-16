import classNames from 'classnames';
import {
  createContext, CSSProperties, ReactNode, useContext, useMemo,
} from 'react';
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
  left?: boolean;
  value?: any;
  right?: boolean;
};

type BtnGroupCtxType = {
  cancelable: any;
  value: any,
  setValue: ((value: any) => void),
  activeColor: Colors,
}
const BtnGroupCtx = createContext<BtnGroupCtxType>({
  value: undefined,
  setValue: () => { },
  activeColor: 'primary',
  cancelable: false,
});

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
  left,
  value,
  right,
}: ButtonProps) {
  const ctx = useContext(BtnGroupCtx);
  let finalColor = color;
  if (ctx.value && value === ctx.value) {
    finalColor = ctx.activeColor;
  }
  const colorCls = colorClass({
    bg: (filled && !text) ? finalColor : undefined,
    border: border ? finalColor : undefined,
    hoverable: finalColor,
    text: text ? finalColor : undefined,
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
  const clickCallback = onClick || (() => {
    if (value) {
      if (ctx.value !== value) {
        ctx.setValue(value);
      } else if (ctx.cancelable) {
        ctx.setValue(undefined);
      }
    }
  });
  if (icon) {
    return (
      <button
        className={btnClass}
        disabled={disabled}
        style={style}
        type="button"
        onClick={clickCallback}
      >
        <div
          className={loadingFinalClass}
        >
          {loading ? loadingIcon : children}
        </div>
      </button>
    );
  }
  return (
    <motion.button
      key="r-btn-wrapper"
      layout
      className={btnClass}
      disabled={disabled}
      style={style}
      type="button"
      onClick={clickCallback}
    >
      <div className={classNames(
        'r-btn-main',
        { 'r-btn-left': left },
        { 'r-btn-right': right },
        { 'r-btn-center': !left && !right },
      )}
      >
        {leadingIcon ? (
          <div
            className={loadingFinalClass}
            style={{
              fontSize: size === 'sm' ? '1rem' : '1.5rem',
            }}
          >
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
  cancelable?: boolean,
  value: any,
  setValue: (val: any) => void,
  activeColor: Colors,
};
function Group({
  className, children, value, setValue, activeColor = 'primary', cancelable,
}: BtnGroup) {
  const ctx = useMemo(() => ({
    value, setValue, activeColor, cancelable,
  }), [value, setValue, activeColor, cancelable]);
  const colorCls = colorClass({
    border: activeColor,
  });
  return (
    <BtnGroupCtx.Provider value={ctx}>
      <div className="relative flex">
        <div
          className={classNames(
            className,
            { [colorCls]: ctx.value },
            { [colorClass({ border: 'zinc' })]: !ctx.value },
            'r-btn-group',
          )}
        >
          {children}
        </div>
      </div>
    </BtnGroupCtx.Provider>
  );
}

export const Btn = Object.assign(BtnRoot, {
  Group,
});
