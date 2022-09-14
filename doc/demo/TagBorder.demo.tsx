import { Tag } from '../../src'

export default function TagBorderDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag border>OBOG</Tag>
      <Tag border color="purple">PRO</Tag>
      <Tag border color="orange">Owner</Tag>
    </div>
  )
}
