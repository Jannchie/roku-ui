import { useState } from 'react'
import { Textarea } from '../../src'

export default function Demo () {
  const [value, setValue] = useState('')
  return (
    <Textarea
      value={value}
      setValue={setValue}
      maxHeight={16 + 20 * 2}
      color="success"
      placeholder="请输入文本"
    />
  )
}
