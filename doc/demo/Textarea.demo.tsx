import { useState } from 'react'
import { Textarea } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <Textarea
      style={{ width: 400, height: 300 }}
      value={value}
      setValue={setValue}
      color="success"
      placeholder="请输入文本"
    />
  )
}
