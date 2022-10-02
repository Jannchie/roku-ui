import { useState } from 'react'
import { TextField } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <TextField value={value} setValue={setValue} />
  )
}
