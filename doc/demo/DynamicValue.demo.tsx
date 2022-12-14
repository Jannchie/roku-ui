import { useState } from 'react'
import { DynamicValue, TextField } from '../../src'

export default function DynamicValueDemo () {
  const [value, setValue] = useState('')
  const formater1 = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  })
  const formater2 = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  })
  const formater3 = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'long',
  })
  const formater4 = new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec')
  const formater5 = new Intl.NumberFormat('ar-EG')
  const formater6 = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  })
  const formater7 = new Intl.NumberFormat('zh-CN', {
    style: 'percent',
  })
  return (
    <div className="text-center">
      <TextField
        placeholder="Enter a number"
        className="mb-2"
        value={value}
        setValue={setValue}
      />
      <div className="flex gap-4 flex-col justify-between flex-wrap">
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater1.format(v)}
        />
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater2.format(v)}
        />
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater3.format(v)}
        />
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater4.format(v)}
        />
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater5.format(v)}
        />
        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater6.format(v)}
        />

        <DynamicValue
          className="text-xl text-primary-2"
          value={Number(value)}
          format={(v) => formater7.format(v)}
        />
      </div>
    </div>
  )
}
