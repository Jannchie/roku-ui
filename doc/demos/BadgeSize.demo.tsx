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
      <Badge size="sm">
        <Btn color="primary">
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge size="md">
        <Btn color="primary">
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge size="lg">
        <Btn color="primary">
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
    </div>
  )
}
