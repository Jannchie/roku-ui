import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Btn } from '../..';

export default {
  component: Btn.Group,
  title: 'Inputs/Btn Group',
} as ComponentMeta<typeof Btn.Group>;

const Template: ComponentStory<typeof Btn.Group> = () => (
  <Btn.Group>
    <Btn>A</Btn>
    <Btn>B</Btn>
    <Btn onClick={() => {}}>✘</Btn>
  </Btn.Group>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};
