import { Avatar } from '../../src'

export default function AvatarDemo () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
    }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
      >
        <Avatar
          ring
          color="danger"
          src="https://i.pravatar.cc/80?img=9"
        />
        <Avatar
          ring="info"
          color="info"
        >
          L
        </Avatar>
        <Avatar
          ring
          color="primary"
          src="https://i.pravatar.cc/80?img=14"
        />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
      >
        <Avatar
          square
          color="info"
          src="https://i.pravatar.cc/80?img=32"
        />
        <Avatar
          square
          color="info"
          src="https://i.pravatar.cc/80?img=15"
        />
        <Avatar
          square
          color="primary"
          src="https://i.pravatar.cc/80?img=30"
        />
      </div>
      <Avatar.Group>
        <Avatar src="https://i.pravatar.cc/80?img=16" />
        <Avatar src="https://i.pravatar.cc/80?img=24" />
        <Avatar src="https://i.pravatar.cc/80?img=36" />
      </Avatar.Group>
    </div>
  )
}
