import { Btn, Popover } from '../../src'

export default function Demo () {
  return (
    <Popover content={<Popover.Content>Content</Popover.Content>}>
      <Btn>
        Btn with Popover
      </Btn>
    </Popover>
  )
}
