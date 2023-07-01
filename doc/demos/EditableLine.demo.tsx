import { useState } from 'react'
import { EditableLine } from '../../src'

export default function EditableLineDemo () {
  const [value, setValue] = useState('Test Text')
  return (
    <EditableLine
      value={value}
      setValue={setValue}
    />
  )
}
