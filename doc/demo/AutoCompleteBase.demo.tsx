import { useMemo, useState } from 'react'
import { Select } from '../../src'
export default function Demo () {
  const [value, setValue] = useState<string>('Apple')
  const options = useMemo(() => [
    'Apple',
    'Banana',
    'Orange',
  ], [])

  return (
    <>
      <div>
        <Select
          autocomplete
          defaultValue={value}
          options={options}
          setValue={setValue}
        />
        <span style={{ paddingLeft: '1rem' }}>
          { value }
        </span>
      </div>
    </>
  )
}
