import { Badge, MaterialSymbolIcon, Btn } from '../../src'

export default function Demo () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}>
      <Badge size="sm">
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge size="md">
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge size="lg">
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
    </div>
  )
}
