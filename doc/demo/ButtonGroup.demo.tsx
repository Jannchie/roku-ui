import { useState } from 'react'
import { Btn } from '../../src'

export default function CounterBtnDemo () {
  const [value, setValue] = useState<'A' | 'B' | 'C'>('A')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Btn.Group
        value={value}
        setValue={(e) => {
          console.log(e)
          setValue(e)
        }}
        activeColor="primary"
      >
        <Btn value="A">A</Btn>
        <Btn value="B">B</Btn>
        <Btn value="C">C</Btn>
      </Btn.Group>
    </div>
  )
}
