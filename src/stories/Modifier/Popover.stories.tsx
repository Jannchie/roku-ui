import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip, Panel, Popover } from '../..';

export default {
  component: Popover,
  title: 'Modifier/PopOver',
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => (
  <Panel
    className="flex inset-0"
    style={
      {
        justifyContent: 'center',
        height: 200,
        alignItems: 'center',
        translate: 'translate(-50%, -50%)',
      }
    }
  >
    <Popover content={<Popover.Content>This is the popover.</Popover.Content>}>
      <Chip>Hover Me</Chip>
    </Popover>
  </Panel>
);

export const Default = Template.bind({});
Default.args = {
};
