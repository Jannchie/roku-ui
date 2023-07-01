import { Tag } from '../../src'

export default function TagBorderDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}
    >
      <Tag border>OBOG</Tag>
      <Tag
        border
        color="secondary"
      >
        PRO
      </Tag>
      <Tag
        border
        color="danger"
      >
        Owner
      </Tag>
    </div>
  )
}
