import { useState } from 'react'
import { Btn, Step } from '../../src'

export default function Demo () {
  const [current, setCurrent] = useState(1)
  return (
    <>
      <Step.Container current={current}>
        <Step.Item index={0}>Step 1</Step.Item>
        <Step.Item index={1} >
          ?
        </Step.Item>
        <Step.Item index={2}>Step 3</Step.Item>
      </Step.Container>
      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <Btn onClick={() => { setCurrent(0) }}>Step 1</Btn>
        <Btn onClick={() => { setCurrent(1) }}>Step 2</Btn>
        <Btn onClick={() => { setCurrent(2) }}>Step 3</Btn>
      </div>
    </>
  )
}
