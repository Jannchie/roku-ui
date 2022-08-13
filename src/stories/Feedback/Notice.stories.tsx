import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Notice } from '../..';

export default {
  component: Notice,
  title: 'Feedback/Notice',
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = (args) => <Notice {...args} />;

export const Default = Template.bind({});
Default.args = {
  dense: false,
  desc: 'Default Notice Description',
  color: 'primary',
  outlined: true,
  title: 'Default Notice',
};
