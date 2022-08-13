import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip, Popover } from '../..';

export default {
  component: Popover,
  title: 'Modifier/PopOver',
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => (
  <div
    className="absolute flex inset-0"
    style={
      {
        justifyContent: 'center',
        alignItems: 'center',
        translate: 'translate(-50%, -50%)',
      }
    }
  >
    <Popover content={<Popover.Content>This is the popover.</Popover.Content>}>
      <Chip>Hover Me</Chip>
    </Popover>
  </div>
);

export const Default = Template.bind({});
Default.args = {
};
