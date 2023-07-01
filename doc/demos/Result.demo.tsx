import { TablerCircleCheck, TablerCircleX } from '@roku-ui/icons-tabler'
import { Result } from '../../src'

export default function ResultDemo () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
    }}
    >
      <Result
        color="success"
        icon={<TablerCircleCheck />}
        title="奈斯"
        description="你成功了"
      />
      <Result
        color="danger"
        icon={<TablerCircleX />}
        title="纳尼"
        description="我失败了"
      />
    </div>
  )
}
