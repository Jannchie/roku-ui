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
        text
        rounded
        border
      >
        OBOG
      </Tag>
      <Tag
        rounded
        text
        color="secondary"
      >
        PRO
      </Tag>
      <Tag
        text
        border
        color="danger"
        onClick={() => {}}
      >
        Owner
      </Tag>
    </div>
  )
}
