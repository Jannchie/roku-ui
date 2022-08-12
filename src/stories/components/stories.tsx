import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RTemp } from '../../components/RTemp';

export default {
  component: RTemp,
  title: 'Example/RTemp',
} as ComponentMeta<typeof RTemp>;

const Template: ComponentStory<typeof RTemp> = () => (
  <div className="flex justify-center">
    <RTemp />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
