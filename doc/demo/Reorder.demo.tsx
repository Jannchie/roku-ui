import { Reorder, Panel } from '../../src'
import { useState } from 'react'

export default function TestDemo () {
  const [data, setData] = useState([1, 2, 3, 4, 5])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Reorder.Group
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        values={data}
        onReorder={setData}
      >
        {data.map((item) => (
          <Reorder.Item key={item} value={item}>
            <Panel
              style={{
                width: 200,
              }}
            >
              {item}
            </Panel>
          </Reorder.Item>))
        }
      </Reorder.Group>
    </div>
  )
}
