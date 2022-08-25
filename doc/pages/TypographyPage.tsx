import { Container, Panel, Typography } from '../../src';

export function TypographyPage() {
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
            Typography
          </Typography.H1>
          <Panel border>
            <Typography.H1> Typography.H1 </Typography.H1>
            <Typography.H2> Typography.H2 </Typography.H2>
            <Typography.H3> Typography.H3 </Typography.H3>
            <Typography.H4> Typography.H4 </Typography.H4>
            <Typography.H5> Typography.H5 </Typography.H5>
            <Typography.H6> Typography.H6 </Typography.H6>
            <Typography.P>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
            </Typography.P>
            <Typography.P>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
            </Typography.P>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
