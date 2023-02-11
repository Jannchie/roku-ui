import { useState } from 'react'
import { TextField } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <TextField
      style={{ width: '100%' }}
      value={value}
      setValue={setValue}
      placeholder="请输入单行文本"
      prefix="前缀"
      color="danger" />
  )
}
