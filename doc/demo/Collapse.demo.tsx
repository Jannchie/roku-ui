import { useState } from 'react'
import { Collapse } from '../../src'

export default function Demo () {
  const [expanded, setExpanded] = useState(false)
  return (
    <Collapse
      header="Collapse Header"
      expanded={expanded}
      setExpanded={setExpanded}
    >
      This is a collapse panel.
    </Collapse>
  )
}
