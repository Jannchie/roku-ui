import {
  Container, Panel, Result, Typography,
} from '../../src'

export function ResultPage () {
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
            Result
          </Typography.H1>
          <Panel border>
            <Result
              color="green"
              icon="check_circle"
              title="Success"
              description="This is a success message"
            />
            <Result
              color="red"
              icon="error"
              title="Error"
              description="This is a error message"
            />
          </Panel>
        </div>
      </Container>
    </div>
  )
}
