import { Badge, MaterialSymbolIcon, Btn } from '../../src'

export default function Demo () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}>
      <Badge circle size="sm">
        <Btn icon color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge circle size="md">
        <Btn icon color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge circle size="lg">
        <Btn icon color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
    </div>
  )
}
