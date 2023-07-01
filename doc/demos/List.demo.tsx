import { Tabler2fa } from '@roku-ui/icons-tabler'
import { Icon, List, Panel } from '../../src'

export default function Demo () {
  return (
    <Panel style={{ display: 'inline-block' }}>
      <List>
        <List.Title> List Title </List.Title>
        <List.Item title="List Item" />
        <List.Item
          title="List Item 2"
          icon={(
            <Icon color="danger">
              <Tabler2fa />
            </Icon>
          )}
        />
      </List>
    </Panel>
  )
}
