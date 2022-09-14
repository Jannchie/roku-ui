import { Tag } from '../../src'

export default function TagTextDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag rounded border>OBOG</Tag>
      <Tag rounded border color="purple">PRO</Tag>
      <Tag rounded border color="orange">Owner</Tag>
    </div>
  )
}
