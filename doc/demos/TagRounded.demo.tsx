import { Tag } from '../../src'

export default function TagTextDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}
    >
      <Tag
        rounded
        border
      >
        OBOG
      </Tag>
      <Tag
        rounded
        border
        color="secondary"
      >
        PRO
      </Tag>
      <Tag
        rounded
        border
        color="danger"
      >
        Owner
      </Tag>
    </div>
  )
}
