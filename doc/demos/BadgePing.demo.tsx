import { TablerCheck } from '@roku-ui/icons-tabler'
import { Badge, Btn } from '../../src'

export default function Demo () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}
    >
      <Badge>
        <Btn
          icon
          color="primary"
        >
          <TablerCheck />
        </Btn>
      </Badge>
      <Badge ping>
        <Btn
          icon
          color="primary"
        >
          <TablerCheck />
        </Btn>
      </Badge>
    </div>

  )
}
