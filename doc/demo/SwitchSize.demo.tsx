import { useState } from 'react'
import { Switch } from '../../src/components/Switch'

export default function Demo () {
  const [value, setValue] = useState(false)
  return (
    <div style={{
      display: 'flex',
      gap: 16,
    }}>
      <Switch value={value} size="lg" setValue={setValue} />
      <Switch value={value} setValue={setValue} />
      <Switch value={value} size="sm" setValue={setValue} />
    </div>
  )
}
