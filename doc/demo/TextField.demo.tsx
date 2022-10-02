import { useState } from 'react'
import { TextField } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <TextField
      value={value}
      setValue={setValue}
      placeholder="请输入单行文本"
      prefix="前缀"
      color="danger" />
  )
}
