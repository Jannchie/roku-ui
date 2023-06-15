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
        size="sm"
        content={<TablerCheck
          height="0.75em"
        />}
      >
        <Btn color="primary">
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
      <Badge content="99">
        <Btn color="primary">
          <TablerCheck height="1em" />
        </Btn>
      </Badge>
    </div>
  )
}
