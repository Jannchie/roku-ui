import { Anchor, Tag } from '../../src'

export default function TagUsageDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}
    >
      <Anchor
        style={{
          fontSize: 14,
        }}
        href="#"
      >
        有钱的小伙子
      </Anchor>
      <Tag color="purple">PRO</Tag>
    </div>
  )
}
