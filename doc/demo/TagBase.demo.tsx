import { Tag } from '../../src'

export default function TagBaseDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag >OBOG</Tag>
      <Tag color="secondary">PRO</Tag>
      <Tag color="danger">Owner</Tag>
      <span className="text-base">123</span>
    </div>
  )
}
