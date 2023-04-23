import { useState } from 'react'
import { AutoComplete } from '../../src'
export default function Demo () {
  const [value, setValue] = useState<{ id: number, name: string }>()
  return (
    <>
      <div>{ value?.name }</div>
      <AutoComplete
        options={[
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
          { id: 3, name: 'Orange' },
          { id: 4, name: 'Orange' },
          { id: 5, name: 'Orange' },
          { id: 6, name: 'Orange' },
          { id: 7, name: 'Orange' },
          { id: 8, name: 'Orange' },
          { id: 9, name: 'Orange' },
        ]}
        getKey={(d) => d.name}
        getFilter={(query) => (d) => d.name.toLowerCase().includes(query.toLowerCase())}
        setValue={setValue} />
    </>
  )
}
