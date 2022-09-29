import { Badge, MaterialSymbolIcon, Btn } from '../../src'

export default function Demo () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}>
      <Badge>
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge ping>
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
    </div>

  )
}
