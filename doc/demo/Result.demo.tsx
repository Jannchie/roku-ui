import { Result } from '../../src'

export default function ResultDemo () {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  }}>
    <Result
      color="success"
      icon="check_circle"
      title="奈斯"
      description="你成功了"
    />
    <Result
      color="danger"
      icon="error"
      title="纳尼"
      description="我失败了"
    />
  </div>
}
