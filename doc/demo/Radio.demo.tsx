import { useState } from 'react'
import { Radio } from '../../src'

export default function RadioDemo () {
  const [value, setValue] = useState('A')
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      flexDirection: 'column',
      gap: 8,
    }}
    >
      <div>
        Value is {value}
      </div>
      <div>
        <Radio.Group value={value} setValue={setValue} >
          <Radio label="AAA" value="A" color="primary" />
          <Radio label="BBB" value="B" />
        </Radio.Group>
      </div>
    </div>
  )
}
