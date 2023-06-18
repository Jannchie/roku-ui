import classnames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { createContext, type HTMLAttributes, useContext, useMemo } from 'react'
import { type Color } from '../../utils/colors'
import { useTrueColor } from '../../hooks'

const RadioCtx = createContext<{ val: any, setValue: (value: any) => void }>({ val: '', setValue: () => { } })

function RadioRoot ({
  id, className, value, label, color = 'frontground', ...others
}: { value: any, label: string, color?: Color } & HTMLAttributes<HTMLLabelElement>) {
  const { val, setValue } = useContext(RadioCtx)
  const checked = val === value
  const mainColor = useTrueColor(color, 2)
  const mainHoverColor = useTrueColor(color, 1)
  return (
    <label
      style={{
        ...others.style,
        ...{
          '--r-main-color': mainColor,
          '--r-main-hover-color': mainHoverColor,
        },
      }}
      htmlFor={id}
      className={classnames('py-1 border border-transparent cursor-pointer flex items-center text-[var(--r-main-color)] hover:text-[var(--r-main-hover-color)]', className)}
      {...others}
    >
      <input
        id={id}
        type="radio"
        checked={checked}
        className={classnames('w-4 h-4 mr-2 relative cursor-pointer rounded-full appearance-none border border-[var(--r-main-color)] hover:border-[var(--r-main-hover-color)]')}
        onChange={() => { setValue(value) }}
      />
      <AnimatePresence>
        { checked && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 0.25 }}
            exit={{ scale: 0 }}
            className={classnames('absolute w-4 h-4 flex justify-center items-center rounded-full hover:bg-[var(--r-main-hover-color)] bg-[var(--r-main-color)]')}
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
      <fieldset className={classnames('flex py-2 gap-2', className)}>
        { children }
      </fieldset>
    </RadioCtx.Provider>
  )
}
export const Radio = Object.assign(RadioRoot, { Group })
