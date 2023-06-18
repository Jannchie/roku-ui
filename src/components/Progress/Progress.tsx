import classnames from 'classnames'
import { type AnimationProps, motion } from 'framer-motion'
import { type BaseProps } from '../../utils/type'
import { useTrueColor } from '../../hooks'

type ProgressProps = {
  color?: string
  total?: number
  value?: number
  durationMS?: number
  fake?: boolean
  infinite?: boolean
  blur?: boolean
} & BaseProps

const buildMotionDiv = (props: { className: string, animate: AnimationProps['animate'], transition: AnimationProps['transition'] }) => (
  <motion.div
    className={props.className}
    animate={props.animate}
    transition={props.transition}
  />
)

export function Progress ({
  color = 'primary',
  total = 100,
  value = 0,
  infinite = false,
  blur = false,
  durationMS = 0,
  fake = false,
  id,
  className,
  style,
}: ProgressProps) {
  const bgCls = classnames('bg-[var(--r-progress-color)]', 'rounded-lg')
  const wrapperCls = classnames(className, 'h-1 relative')
  const percent = infinite ? 25 : Math.min((value / total) * 100, 100)
  let progressMain
  if (infinite || fake) {
    const animate = infinite
      ? { left: ['0%', '10%', '90%', '100%'], width: ['0%', '10%', '10%', '0%'] }
      : { width: ['0%', '10%', '12%', '80%', '80%', '95%', '99%'] }
    const transition = infinite
      ? { duration: 1, ease: 'linear', repeat: Infinity, times: [0, 0.1, 0.9, 1] }
      : { times: [0, 0.01, 0.012, 0.2, 0.24, 0.5, 1], duration: durationMS === 0 ? 16 : durationMS / 1000 }
    progressMain = (
      <>
        { buildMotionDiv({ className: classnames(bgCls, 'h-full'), animate, transition }) }
        { blur && buildMotionDiv({ className: classnames(bgCls, 'absolute', 'h-full blur-md'), animate, transition }) }
      </>
    )
  } else {
    const animate = { width: durationMS ? ['0%', '100%'] : `${percent}%` }
    const transition = durationMS ? { duration: durationMS / 1000, ease: 'linear' } : undefined
    progressMain = (
      <>
        { buildMotionDiv({ className: classnames(bgCls, 'h-full', 'absolute'), animate, transition }) }
        { blur && buildMotionDiv({ className: classnames(bgCls, 'absolute', 'h-full blur-md'), animate, transition }) }
      </>
    )
  }
  return (
    <div
      className={wrapperCls}
      id={id}
      style={{
        ...style,
        ...{
          '--r-progress-color': useTrueColor(color),
        },
      }}
    >
      { progressMain }
    </div>
  )
}
