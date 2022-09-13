import {
  Avatar,
  Container, Panel, Typography,
} from '../../src'

export function AvatarPage () {
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
        <div>
          <Panel
            border
            style={{
              padding: 16, display: 'flex', flexDirection: 'column', gap: 16,
            }}
          >
            <div className="flex gap-6 justify-center">
              <Avatar outline color="orange" src="https://i.pravatar.cc/80?img=9" />
              <Avatar outline="emerald" color="fuchsia">L</Avatar>
              <Avatar outline color="sky" src="https://i.pravatar.cc/80?img=14" />
            </div>
            <div className="flex gap-6 justify-center">
              <Avatar square color="orange" src="https://i.pravatar.cc/80?img=32" />
              <Avatar square color="lime" src="https://i.pravatar.cc/80?img=15" />
              <Avatar square color="sky" src="https://i.pravatar.cc/80?img=30" />
            </div>
            <Avatar.Group>
              <Avatar src="https://i.pravatar.cc/80?img=16" />
              <Avatar src="https://i.pravatar.cc/80?img=24" />
              <Avatar src="https://i.pravatar.cc/80?img=36" />
            </Avatar.Group>
          </Panel>
        </div>
      </Container>
    </div>
  )
}
