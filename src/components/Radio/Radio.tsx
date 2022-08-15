import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useContext, useMemo } from 'react';
import { colorClass } from '../../utils/colors';
import './Radio.css';

const RadioCtx = createContext<{
  val: any;
  setValue:((value: any) => void);
}>({ val: '', setValue: () => { } });

function RadioRoot({
  id, value, label, color,
}: any) {
  const { val, setValue } = useContext(RadioCtx);
  const checked = val === value;
  const colorCls = colorClass({ bg: color });
  const borderCls = colorClass({ border: color });
  return (
    <label htmlFor={id} className="r-input-radio-wrapper flex items-center">
      <input
        type="radio"
        checked={checked}
        className={classNames('r-input-radio', { [borderCls]: checked, ' dark:border-zinc-600': !checked })}
        onChange={() => setValue(value)}
      />
      <AnimatePresence>
        {checked && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 0.5 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={classNames('absolute w-6 h-6 flex justify-center items-center rounded-full', colorCls)}
          >
            {/* <motion.div className="bg-zinc-900 w-1 h-1 rounded-full" /> */}
          </motion.span>
        )}
      </AnimatePresence>
      {label}
    </label>
  );
}

function Group({
  children, className, value, setValue,
}: any) {
  const ctx = useMemo(() => ({ val: value, setValue }), [value, setValue]);
  return (
    <RadioCtx.Provider value={ctx}>
      <fieldset className={classNames('r-input-radio-group', className)}>
        {children}
      </fieldset>
    </RadioCtx.Provider>
  );
}
export const Radio = Object.assign(RadioRoot, { Group });
