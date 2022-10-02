import { useState } from 'react'
import { Textarea } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <Textarea value={value} setValue={setValue} />
  )
}
