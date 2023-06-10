import { useState } from 'react'
import { Select } from '../../src'

// 示例用法
export default function App () {
  const [d, setD] = useState<{ name: string, id: number }>()
  return (
    <>
      { d?.name }
      <Select
        getKey={(d) => d.name}
        setValue={setD}
        options={[
          { name: 'Apple', id: 1 },
          { name: 'Banana', id: 2 },
          { name: 'Orange', id: 3 },
          { name: 'Peach', id: 4 },
        ]}
      />
    </>
  )
}
