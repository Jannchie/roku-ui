import { Container, Typography } from '../../src';

export function HomePage() {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '8px 0 0 0 ',
        height: '100%',
      }}
    >
      <Container>
        <Typography.H1 className="gradient-text">
          Roku UI
        </Typography.H1>
      </Container>
    </div>
  );
}
