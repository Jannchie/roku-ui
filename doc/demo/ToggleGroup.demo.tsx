import { useState } from 'react'
import { ToggleGroup } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('A')
  return (
    <ToggleGroup
      data={['A', 'B', 'C']}
      value={value}
      setValue={setValue}
    />
  )
}
