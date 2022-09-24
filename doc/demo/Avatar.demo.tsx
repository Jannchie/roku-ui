import { Avatar } from '../../src'

export default function AvatarDemo () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        <Avatar
          ring
          color="orange"
          src="https://i.pravatar.cc/80?img=9"
        />
        <Avatar ring="emerald" color="fuchsia">
              L
        </Avatar>
        <Avatar ring color="sky" src="https://i.pravatar.cc/80?img=14" />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        <Avatar
          square
          color="orange"
          src="https://i.pravatar.cc/80?img=32"
        />
        <Avatar square color="lime" src="https://i.pravatar.cc/80?img=15" />
        <Avatar square color="sky" src="https://i.pravatar.cc/80?img=30" />
      </div>
      <Avatar.Group>
        <Avatar src="https://i.pravatar.cc/80?img=16" />
        <Avatar src="https://i.pravatar.cc/80?img=24" />
        <Avatar src="https://i.pravatar.cc/80?img=36" />
      </Avatar.Group>
    </div>
  )
}
