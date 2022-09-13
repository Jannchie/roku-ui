import { useState } from 'react'
import {
  Container, EditableLine, Panel, Typography,
} from '../../src'

export function EditableLinePage () {
  const [value, setValue] = useState('Test Text')
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '8px 0 0 0 ',
        height: '100%',
      }}
    >
      <Container>
        <Typography.H1 className="gradient-text">
          Roku UI
        </Typography.H1>
        <Panel>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <EditableLine
                size="sm"
                value={value}
                setValue={setValue}
              />
            </div>
            <div className="flex gap-2 items-center">
              <EditableLine
                value={value}
                setValue={setValue}
              />
            </div>
            <div className="flex gap-2 items-center">
              <EditableLine
                size="lg"
                value={value}
                setValue={setValue}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </div>
  )
}
