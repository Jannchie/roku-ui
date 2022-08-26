import {
  Chip, Container, Panel, Typography,
} from '../../src';
import './HomePage.css';

export function ChipPage() {
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
            Chip
          </Typography.H1>
          <Typography.H2>
            Chip With Border
          </Typography.H2>
          <Panel border>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">Username</span>
                <Chip border>OBOG</Chip>
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-bold items-center">Rich</span>
                <Chip border color="purple">PRO</Chip>
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-bold items-center">Admin</span>
                <Chip border color="orange">Owner</Chip>
              </div>
            </div>
          </Panel>
          <Typography.H2>
            Chip is Rounded
          </Typography.H2>
          <Panel border>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">Username</span>
                <Chip rounded border>OBOG</Chip>
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-bold items-center">Rich</span>
                <Chip rounded border color="purple">PRO</Chip>
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-bold items-center">Admin</span>
                <Chip rounded border color="orange">Owner</Chip>
              </div>
            </div>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
