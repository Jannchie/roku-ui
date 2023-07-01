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
      <Badge
        offset={4}
        size="sm"
      >
        <Btn
          icon
          rounded
          color="primary"
        >
          <TablerCheck />
        </Btn>
      </Badge>
      <Badge
        offset={4}
        size="md"
      >
        <Btn
          icon
          rounded
          color="primary"
        >
          <TablerCheck />
        </Btn>
      </Badge>
      <Badge
        offset={4}
        size="lg"
      >
        <Btn
          icon
          rounded
          color="primary"
        >
          <TablerCheck />
        </Btn>
      </Badge>
    </div>
  )
}
