import { useState } from 'react'
import { Btn } from '../../src'

export default function CounterBtnDemo () {
  const [fillA, setFillA] = useState(false)
  const [fillB, setFillB] = useState(false)
  const [fillC, setFillC] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter
          size="sm"
          value={2}
          icon="chat_bubble"
          fill={fillA}
          onClick={() => { setFillA(!fillA) }}
        />
        <Btn.Counter
          size="sm"
          color="danger"
          value={4}
          icon="favorite"
          fill={fillB}
          onClick={() => { setFillB(!fillB) }}
        />
        <Btn.Counter
          size="sm"
          color="success"
          value={7}
          icon="reply"
          fill={fillC}
          onClick={() => { setFillC(!fillC) }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter
          size="md"
          value={2}
          icon="chat_bubble"
          fill={fillA}
          onClick={() => { setFillA(!fillA) }}
        />
        <Btn.Counter
          size="md"
          color="danger"
          value={4}
          icon="favorite"
          fill={fillB}
          onClick={() => { setFillB(!fillB) }}
        />
        <Btn.Counter
          size="md"
          color="success"
          value={7}
          icon="reply"
          fill={fillC}
          onClick={() => { setFillC(!fillC) }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter
          size="lg"
          value={2}
          icon="chat_bubble"
          fill={fillA}
          onClick={() => { setFillA(!fillA) }}
        />
        <Btn.Counter
          size="lg"
          color="danger"
          value={4}
          icon="favorite"
          fill={fillB}
          onClick={() => { setFillB(!fillB) }}
        />
        <Btn.Counter
          size="lg"
          color="success"
          value={7}
          icon="reply"
          fill={fillC}
          onClick={() => { setFillC(!fillC) }}
        />
      </div>
    </div>
  )
}
