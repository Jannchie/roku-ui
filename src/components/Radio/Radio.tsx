import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { createContext, type HTMLAttributes, useContext, useMemo } from 'react'
import { type Color } from '../../utils/colors'
import './Radio.css'

const RadioCtx = createContext<{ val: any, setValue: (value: any) => void }>({ val: '', setValue: () => { } })

function RadioRoot ({
  id, className, value, label, color = 'frontground', ...others
}: { value: any, label: string, color?: Color } & HTMLAttributes<HTMLLabelElement>) {
  const { val, setValue } = useContext(RadioCtx)
  const checked = val === value
  return (
    <label
      htmlFor={id}
      className={classNames('r-input-radio-wrapper', `text-${color}-2 hover:text-${color}-1`, className)}
      {...others}
    >
      <input
        id={id}
        type="radio"
        checked={checked}
        className={classNames('r-input-radio', `border-${color}-2 hover:border-${color}-1`)}
        onChange={() => { setValue(value) }}
      />
      <AnimatePresence>
        { checked && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 0.25 }}
            exit={{ scale: 0 }}
            className={classNames('absolute w-4 h-4 flex justify-center items-center rounded-full', `hover:bg-${color}-1 bg-${color}-2`)}
          />
        ) }
      </AnimatePresence>
      { label }
    </label>
  )
}

function Group ({
  children, className, value, setValue,
}: any) {
  const ctx = useMemo(() => ({ val: value, setValue }), [value, setValue])
  return (
    <RadioCtx.Provider value={ctx}>
      <fieldset className={classNames('r-input-radio-group', className)}>
        { children }
      </fieldset>
    </RadioCtx.Provider>
  )
}
export const Radio = Object.assign(RadioRoot, { Group })
