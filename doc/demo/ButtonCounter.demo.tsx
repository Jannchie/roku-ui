import { useState } from 'react'
import { Btn } from '../../src'
import { TablerHeart, TablerMessageCircle, TablerShare3 } from '@roku-ui/icons-tabler'

export default function CounterBtnDemo () {
  const [fillA, setFillA] = useState(false)
  const [fillB, setFillB] = useState(false)
  const [fillC, setFillC] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter
          value={2}
          icon={<TablerMessageCircle />}
          fill={fillA}
          onClick={() => { setFillA(!fillA) }}
        />
        <Btn.Counter
          color="danger"
          value={4}
          icon={<TablerHeart />}
          fill={fillB}
          onClick={() => { setFillB(!fillB) }}
        />
        <Btn.Counter
          color="success"
          value={7}
          icon={<TablerShare3 />}
          fill={fillC}
          onClick={() => { setFillC(!fillC) }}
        />
      </div>
    </div>
  )
}
