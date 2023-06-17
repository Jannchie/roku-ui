import classNames from 'classnames'
import { type FC, type ReactNode, useState } from 'react'
import { type Color } from '../..'
import { TablerCheck, TablerMinus } from '@roku-ui/icons-tabler'
export interface SwitchProps {
  value: boolean
  setValue: (value: boolean) => void
  color?: Color
  normalColor?: Color
  size?: 'lg' | 'sm' | 'md'
  label?: ReactNode
  bgIcon?: boolean
}
export const Switch: FC<SwitchProps> = ({
  value,
  setValue,
  size = 'md',
  color = 'primary',
  normalColor = 'frontground',
  label,
  bgIcon = false,
}: SwitchProps) => {
  const [clicking, setClicking] = useState(false)
  const colorStyle = value ? `hsl(var(--r-${color}-2))` : `hsl(var(--r-${normalColor}-2))`
  let labelSize = 'text-sm'
  let h = 1.25
  if (size === 'sm') {
    labelSize = 'text-sm'
    h = 1
  } else if (size === 'lg') {
    labelSize = 'text-lg'
    h = 1.5
  }
  return (
    <div className={classNames(
      'inline-flex items-center gap-2 relative',
    )}
    >
      <input
        type="checkbox"
        className={classNames(
          'appearance-none cursor-pointer rounded-full border transition-box-shadow,background-color,border-color',
          {
            'w-[3rem] h-[1.5rem]': size === 'lg',
            'w-[2.5rem] h-[1.25rem]': size === 'md',
            'w-[2rem] h-[1rem]': size === 'sm',
          },
          {
            [`border-${color}-2`]: value,
            [`border-${normalColor === 'background' ? 'default' : normalColor}-2`]: !value,
            'bg-white': true,
          })}
        style={{
          boxShadow: `calc(${h}rem * ${(value ? 1 : -1) * (clicking ? 0.75 : 1)}) 0 0 2px ${colorStyle} inset,0 0 0 2px ${colorStyle} inset`,
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          setClicking(true)
        }}
        onMouseLeave={(e) => {
          e.preventDefault()
          setClicking(false)
        }}
        onMouseEnter={(e) => {
          e.preventDefault()
          setClicking(true)
        }}
        onMouseUp={(e) => {
          e.preventDefault()
          setClicking(false)
        }}
        onClick={() => { setValue(!value) }}
      />
      { bgIcon && <div
        className={classNames('absolute transition-transform pointer-events-none')}
        style={{
          transform: value ? 'translateX(2px) rotate(0deg) ' : `translateX(${h}rem) rotate(360deg)`,
        }}
      >
        { !value
          ? (
            <TablerMinus
              color={`hsl(var(--r-${normalColor}-1))`}
              width={`${h - 0.2}rem`}
            />
          )
          : (
            <TablerCheck
              color={`hsl(var(--r-${color}-1))`}
              width={`${h - 0.2}rem`}
            />
          ) }
      </div> }
      { label && <span className={labelSize}>{ label }</span> }
    </div>
  )
}
