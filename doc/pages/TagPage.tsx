import {
  Tag, Container, Panel, Typography, Anchor,
} from '../../src'
import { CompExample } from '../components/CompExample'

export function TagPage () {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '8px 0 0 0 ',
        height: '100%',
      }}
    >
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Typography.H1>
            标签（Tag）
          </Typography.H1>
          <Typography.H2>
            有边框的标签
          </Typography.H2>
          <Panel border>
            <div className="flex gap-2">
              <Tag border>OBOG</Tag>
              <Tag border color="purple">PRO</Tag>
              <Tag border color="orange">Owner</Tag>
            </div>
          </Panel>
          <Typography.H2>
            圆角的标签
          </Typography.H2>
          <Panel border>
            <div className="flex gap-2">
              <Tag rounded border>OBOG</Tag>
              <Tag rounded border color="purple">PRO</Tag>
              <Tag rounded border color="orange">Owner</Tag>
            </div>
          </Panel>
          <Typography.H2>
            没有背景的标签
          </Typography.H2>
          <Panel border>
            <div className="flex gap-2">
              <Tag text rounded border>OBOG</Tag>
              <Tag rounded text color="purple">PRO</Tag>
              <Tag text border color="orange">Owner</Tag>
            </div>
          </Panel>
          <CompExample title="可以点击的标签" desc="只需要给标签添加 `onClick` 事件即可。">
            <div className="flex gap-2">
              <Tag onClick={() => {}}>OBOG</Tag>
              <Tag color="purple" onClick={() => { }}>PRO</Tag>
              <Tag color="orange" onClick={() => { }}>Owner</Tag>
            </div>
          </CompExample>
          <CompExample title="自定义其他样式" desc="你也可以通过 `style` 和 `className` 等属性进行定制。">
            <div className="flex gap-2">
              <Tag style={{ color: 'salmon' }}>OBOG</Tag>
              <Tag border style={{ borderStyle: 'dotted' }}>OBOG</Tag>
            </div>
          </CompExample>
          <CompExample title="使用场景" desc="我们经常会在用户名之后跟着一个标签。此时建议使用 flex 布局。">
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
          </CompExample>
        </div>
      </Container>
    </div>
  )
}
