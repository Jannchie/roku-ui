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
        position="bottom-right"
      >
        <Btn>
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge
        position="top-left"
      >
        <Btn>
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge
        position="top-right"
      >
        <Btn>
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge
        position="bottom-left"
      >
        <Btn>
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
    </div>
  )
}
