import { Tag } from '../../src'

export default function TagClickableDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag onClick={() => {}}>OBOG</Tag>
      <Tag color="secondary" onClick={() => { }}>PRO</Tag>
      <Tag color="danger" onClick={() => { }}>Owner</Tag>
    </div>
  )
}
