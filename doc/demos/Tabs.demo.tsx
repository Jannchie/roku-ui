import { useState } from 'react'
import { Tabs } from '../../src'

export default function Demo () {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <>
      <Tabs
        selectedIndex={tabIndex}
        onChange={(i) => {
          typeof i === 'number' &&
          setTabIndex(i)
        }}
      >
        <Tabs.Item label="Tab 1" >
          This is Tab 1
        </Tabs.Item>
        <Tabs.Item label="Tab 2" >
          <div style={{ height: 200 }}>
            This is Tab 2 with 200px height.
          </div>
        </Tabs.Item>
      </Tabs>
      <div>
        After Tabs
      </div>
    </>
  )
}
