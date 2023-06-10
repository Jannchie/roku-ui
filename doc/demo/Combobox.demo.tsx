import { useEffect, useMemo, useState } from 'react'
import { Select } from '../../src'
export default function Demo () {
  const [value, setValue] = useState<{ id: number, name: string }>()
  const options = useMemo(() => [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ], [])
  useEffect(() => {
    setValue(options[0])
  }, [options])
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
