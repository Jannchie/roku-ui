import { useState } from 'react'
import { Icon, Notice } from '../../src'
import { TablerMessage2Check } from '@roku-ui/icons-tabler'

export default function Demo () {
  const [close, onClose] = useState(false)
  return (
    <>
      {
        !close && (
          <Notice
            progress
            blur
            progressValue={47}
            close={() => {
              onClose(true)
            }}
            color="success"
            title="标题"
            desc="内容"
            icon={<Icon color="success"><TablerMessage2Check /></Icon>}
          />
        )
      }
    </>
  )
}
