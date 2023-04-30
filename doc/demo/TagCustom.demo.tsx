import { Tag } from '../../src'

export default function TagCustomDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}
    >
      <Tag style={{ color: 'salmon' }}>OBOG</Tag>
      <Tag
        border
        style={{ borderStyle: 'dotted' }}
      >
        OBOG
      </Tag>
    </div>
  )
}
