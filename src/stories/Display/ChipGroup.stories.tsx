import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../..';

export default {
  component: Chip.Group,
  title: 'Display/Chip Group',
} as ComponentMeta<typeof Chip.Group>;

const Template: ComponentStory<typeof Chip> = () => (
  <Chip.Group>
    <Chip>First</Chip>
    <Chip>B</Chip>
    <Chip className="px-0" onClick={() => { }}>
      ✘
    </Chip>
  </Chip.Group>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};
