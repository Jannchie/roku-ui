import classNames from 'classnames'
import { FC, useState } from 'react'
import { Colors } from '../..'

export interface SwitchProps {
  value: boolean
  setValue: (value: boolean) => void
  color?: Colors | string
}
export const Switch: FC<SwitchProps> = ({
  value,
  setValue,
  color = 'primary',
}: SwitchProps) => {
  const [clicking, setClicking] = useState(false)
  const colorStyle = value ? `hsl(var(--r-${color}-2))` : 'hsl(var(--r-bg-2))'
  return (
    <input
      type="checkbox"
      className={classNames('w-[3rem] appearance-none cursor-pointer h-[1.5rem] rounded-full transition-all border', {
        [`border-${color}-2`]: true,
        [`bg-${color}-2`]: !value,
        'bg-2': value,
      })}
      style={{
        boxShadow: `calc(1.5rem * ${(value ? 1 : -1) * (clicking ? 0.75 : 1)}) 0 0 2px ${colorStyle} inset,0 0 0 2px ${colorStyle} inset`,
      }}
      onMouseDown={(e) => {
        e.preventDefault()
        setClicking(true)
      }}
      onMouseUp={(e) => {
        e.preventDefault()
        setClicking(false)
      }}
      onClick={() => setValue(!value)}
    />
  )
}
