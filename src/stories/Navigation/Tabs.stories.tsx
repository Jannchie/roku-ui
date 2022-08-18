import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import {
  Tabs, Textarea,
} from '../..';

export default {
  title: 'Navigation/Tabs',
} as ComponentMeta<typeof Tabs>;

function TestPage() {
  const [value, setValue] = useState('text');
  return (
    <div className="p-4">
      <Textarea value={value} setValue={setValue} border="solid" />
    </div>
  );
}

const Template: ComponentStory<typeof Tabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="h-96 relative"
    >
      <Tabs
        color="teal"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tabs.Item label="This is the First Tab">Content 1</Tabs.Item>
        <Tabs.Item label="Then, Tab 2">
          <TestPage />
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
        下面的内容也可以自动伸展和收缩。
        <br />
        据我所知，只有 naive-ui 也实现了这个。
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
