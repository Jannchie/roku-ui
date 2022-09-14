import { Tag } from '../../src'

export default function TagClickableDemo () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <Tag onClick={() => {}}>OBOG</Tag>
      <Tag color="purple" onClick={() => { }}>PRO</Tag>
      <Tag color="orange" onClick={() => { }}>Owner</Tag>
    </div>
  )
}
