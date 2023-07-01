import { useState } from 'react'
import { Btn, DynamicIsland } from '../../src'

export default function Demo () {
  const [state, setState] = useState(0)
  let size = 80
  if (state === 0) {
    size = 40
  }
  const [translating, setTranslating] = useState(false)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 16,
    }}
    >
      <Btn onClick={() => {
        state === 0 ? setState(1) : setState(0)
        setTranslating(true)
        setTimeout(() => {
          setTranslating(false)
        }, 300)
      }}
      >
        Click
      </Btn>
      <DynamicIsland
        style={{
          background: '#000',
          borderRadius: '9999px',
          width: size * 4,
          height: size,
        }}
        translating={translating}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          { state === 0
            ? ''
            : (
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  color: '#666',
                }}
                >
                  电量不足（3%）
                </div>
              </div>
            )
          }
        </div>
      </DynamicIsland>
    </div>
  )
}
