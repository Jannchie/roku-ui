import { useState } from 'react'
import { MaterialSymbolIcon, Notice } from '../../src'

export default function Demo () {
  const [close, onClose] = useState(false)
  return (
    <>
      {
        !close && (
          <Notice
            progress
            progressValue={47}
            close={() => {
              onClose(true)
            }}
            color="success"
            title="标题"
            desc="内容"
            icon={<MaterialSymbolIcon icon="check" />}
          />
        )
      }
    </>
  )
}
