import { useMemo, useState } from 'react'
import { Select } from '../../src'
export default function Demo () {
  const options = useMemo(() => [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ], [])
  const [value, setValue] = useState<{ id: number, name: string }>()
  return (
    <>
      <div>{ value?.name }</div>
      <Select
        defaultValue={value}
        options={options}
        getKey={(d) => d.name}
        setValue={setValue}
      />
    </>
  )
}
