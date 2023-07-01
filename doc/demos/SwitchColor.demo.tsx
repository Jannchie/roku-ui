import { useState } from 'react'
import { Switch } from '../../src/components/Switch'

export default function Demo () {
  const [value, setValue] = useState(true)
  return (
    <Switch
      value={value}
      setValue={setValue}
      color="success"
    />
  )
}
