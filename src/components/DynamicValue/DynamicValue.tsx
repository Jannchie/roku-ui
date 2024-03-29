import classnames from 'classnames'
import { type HTMLMotionProps, motion, useMotionValue, animate, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { useTrueColor, type Color } from '../..'

type DynamicValueProps = {
  value: number
  format?: (value: number) => string
  color?: Color
} & HTMLMotionProps<'span'>
export function DynamicValue ({
  className,
  style,
  value,
  color = 'frontground',
  format = (v) => {
    if (Number.isNaN(v)) return ''
    return v.toFixed()
  },
  ...others
}: DynamicValueProps) {
  const count = useMotionValue(value)
  const formated = useTransform(count, format)
  const colorHex = useTrueColor(color)
  useEffect(() => {
    const controls = animate(count, value)
    return controls.stop
  }, [count, value])
  return (
    <motion.span
      style={{
        ...style,
        ...{
          '--r-color': colorHex,
        },
      }}
      className={classnames('r-digital', className, 'text-[var(--r-color)]')}
      {...others}
    >
      { formated }
    </motion.span>
  )
}
