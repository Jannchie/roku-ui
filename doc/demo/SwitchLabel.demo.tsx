import { useState } from 'react'
import { Switch } from '../../src/components/Switch'

export default function Demo () {
  const [value, setValue] = useState(false)
  return (
    <Switch
      label="A Switch"
      value={value}
      setValue={setValue}
    />
  )
}
