import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Panel } from '../..';

export default {
  component: Panel,
  title: 'Display/Panel',
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel border {...args}>
    <div style={{ width: 128, height: 128 }}> Text</div>
  </Panel>
);

export const Default = Template.bind({});
Default.args = {};
