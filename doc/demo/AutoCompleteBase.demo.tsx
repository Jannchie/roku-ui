import { useMemo, useState } from 'react'
import { AutoComplete } from '../../src'
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
        <AutoComplete
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
