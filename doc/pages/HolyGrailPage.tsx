import {
  Container, HolyGrail, Typography,
} from '../../src'
import { CompExample } from '../components/CompExample'

export function HolyGrailPage () {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Typography.H1>
            圣杯（HolyGrail）
        </Typography.H1>
      </div>
      <CompExample title="使用场景" desc="使用这个组件可以构成圣杯状的桌面端网页。这是桌面端网页开发的一种范式。">
        <HolyGrail
          header={(
            <div style={{ height: 64, backgroundColor: '#333' }} />
          )}
          main={(
            <div style={{ height: 200, backgroundColor: '#222' }} />
          )}
          innerLeft={(
            <div style={{ width: 40, backgroundColor: '#444' }} />
          )}
          innerRight={(
            <div style={{ width: 40, backgroundColor: '#444' }} />
          )}
          footer={(
            <div style={{ height: 64, width: '100%', backgroundColor: '#444' }} />
          )}
          outerLeft={
            <div style={{ width: 40, backgroundColor: '#555' }} />
          }
          outerRight={
            <div style={{ width: 40, backgroundColor: '#555' }} />
          }
        />
      </CompExample>
    </Container>
  )
}
