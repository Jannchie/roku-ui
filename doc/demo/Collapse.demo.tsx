import { useState } from 'react'
import { Collapse } from '../../src'

export default function Demo () {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <Collapse
        header="Collapse Header"
        expanded={expanded}
        setExpanded={setExpanded}
      >
        This is the collapse panel 1.
      </Collapse>
      <Collapse
        header="Collapse Header"
        expanded={!expanded}
        setExpanded={(d) => { setExpanded(!d) }}
      >
        This is the collapse panel 2.
      </Collapse>
    </>
  )
}
