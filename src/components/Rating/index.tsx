import { useState } from 'react'
import { type Color } from '../../utils/colors'
import { Btn } from '../Btn'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'

export function Rating ({ max, value, setValue, color = 'primary' }: {
  max: number
  value: number
  color?: Color
  setValue: (value: number) => void
}) {
  const range = Array.from({ length: max }, (_, i) => i + 1)
  const [hover, setHover] = useState(value)
  return (
    <div className="flex">
      { range.map(d => (
        <Btn
          key={d}
          icon
          text
          color={d <= value ? 'primary' : 'default'}
          onMouseEnter={() => { setHover(d) }}
          onClick={() => {
            setValue(d)
          }}
          onMouseLeave={() => { setHover(value) }}
        >
          <MaterialSymbolIcon
            fill={d <= hover}
            icon="star"
          />
        </Btn>
      )) }
    </div>
  )
}
