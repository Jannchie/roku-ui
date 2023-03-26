import classNames from 'classnames'
import { type FC, type ReactNode, useState } from 'react'
import { type Colors } from '../..'

export interface SwitchProps {
  value: boolean
  setValue: (value: boolean) => void
  color?: Colors
  size?: 'lg' | 'sm' | 'md'
  label?: ReactNode
}
export const Switch: FC<SwitchProps> = ({
  value,
  setValue,
  size = 'md',
  color = 'frontground',
  label,
}: SwitchProps) => {
  const [clicking, setClicking] = useState(false)
  const colorStyle = value ? `hsl(var(--r-${color}-2))` : 'hsl(var(--r-background-2))'
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
    <div className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        className={classNames('appearance-none cursor-pointer rounded-full border', {
          'w-[3rem] h-[1.5rem]': size === 'lg',
          'w-[2.5rem] h-[1.25rem]': size === 'md',
          'w-[2rem] h-[1rem]': size === 'sm',
          [`border-${color}-2`]: true,
          [`bg-${color}-2`]: !value,
          'bg-2': value,
        })}
        style={{
          boxShadow: `calc(${h}rem * ${(value ? 1 : -1) * (clicking ? 0.75 : 1)}) 0 0 2px ${colorStyle} inset,0 0 0 2px ${colorStyle} inset`,
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          setClicking(true)
        }}
        onMouseUp={(e) => {
          e.preventDefault()
          setClicking(false)
        }}
        onClick={() => { setValue(!value) }}
      />
      {label && <span className={labelSize}>{label}</span>}
    </div>
  )
}
