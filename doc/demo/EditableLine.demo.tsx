import { useState } from 'react'
import { EditableLine } from '../../src'

export default function EditableLineDemo () {
  const [value, setValue] = useState('Test Text')
  return <div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
      <EditableLine
        size="sm"
        value={value}
        setValue={setValue}
      />
    </div>
    <div className="flex gap-2 items-center">
      <EditableLine
        value={value}
        setValue={setValue}
      />
    </div>
    <div className="flex gap-2 items-center">
      <EditableLine
        size="lg"
        value={value}
        setValue={setValue}
      />
    </div>
  </div>
}
