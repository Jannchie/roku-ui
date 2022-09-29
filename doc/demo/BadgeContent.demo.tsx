import { Badge, MaterialSymbolIcon, Btn } from '../../src'

export default function Demo () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}>
      <Badge position="bottom-right" size="sm"
        content={<MaterialSymbolIcon size="sm" icon="cloud" />}
      >
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
      <Badge content="99">
        <Btn color="primary">
          <MaterialSymbolIcon icon="notifications" />
        </Btn>
      </Badge>
    </div>
  )
}
