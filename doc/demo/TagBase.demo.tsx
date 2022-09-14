import { Tag } from '../../src'

export default function TagBaseDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag >OBOG</Tag>
      <Tag color="purple">PRO</Tag>
      <Tag color="orange">Owner</Tag>
    </div>
  )
}
