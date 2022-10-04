import classNames from 'classnames'
import { HTMLMotionProps, motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Colors } from '../..'

type DynamicValueProps = {
  value: number
  format?: (value: number) => string
  color?: Colors
} & HTMLMotionProps<'span'>
export function DynamicValue ({
  className,
  style,
  value,
  color = 'fg',
  format = (v) => {
    if (Number.isNaN(v)) return ''
    return v.toFixed()
  },
  ...others
}: DynamicValueProps) {
  const motionValue = useSpring(useMotionValue(value))
  useEffect(() => {
    if (Number.isNaN(value)) return
    motionValue.set(value)
  }, [motionValue, value])
  const [displayValue, setDisplayValue] = useState(format(value))
  motionValue.onChange((v) => {
    setDisplayValue(format(v))
  })
  return (
    <motion.span style={style} className={classNames('r-digital', className, `text-${color}-2`)} {...others}>
      {displayValue}
    </motion.span>
  )
}
