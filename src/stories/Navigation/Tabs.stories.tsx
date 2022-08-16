import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
import { Notice, Tabs } from '../..';

export default {
  title: 'Navigation/Tabs',
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Tabs
        color="teal"
        selectedIndex={selectedIndex}
        type="indicator"
        onChange={setSelectedIndex}
      >
        <Tabs.Item label="Tab 1">Content 1</Tabs.Item>
        <Tabs.Item label="Tab 2">
          <Notice outlined title="Test" />
        </Tabs.Item>
        <Tabs.Item label="Tab 3">
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
        </Tabs.Item>
      </Tabs>
      <div>
        下面的内容。
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
