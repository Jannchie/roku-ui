import { useState } from 'react'
import { Btn, Notifications, pushNotice, Radio } from '../../src'

export default function Demo () {
  const [stack, setStack] = useState(false)
  const [type, setType] = useState<'info' | 'success' | 'danger' | 'warning'>('info')
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Btn onClick={() => {
        pushNotice({
          type,
          title: 'Message',
          desc: 'This is a message',
        })
      }}>Trigger</Btn>
      <div>
        <Radio.Group value={stack} setValue={setStack}>
          <Radio id="radio-stack-false" color="primary" value={false} label="Normal" />
          <Radio id="radio-stack-true" color="primary" value={true} label="Stack" />
        </Radio.Group>
      </div>
      <div>
        <Radio.Group value={type} setValue={setType}>
          <Radio id="radio-type-info" color="primary" value="info" label="Info" />
          <Radio id="radio-type-success" color="success" value="success" label="Success" />
          <Radio id="radio-type-danger" color="danger" value="danger" label="Danger" />
          <Radio id="radio-type-warning" color="warning" value="warning" label="Warning" />
        </Radio.Group>
      </div>
      <Notifications stack={stack} />
    </div>
  )
}
