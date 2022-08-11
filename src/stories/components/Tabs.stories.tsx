import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Tabs, Notice } from "../..";
export default {
  title: "Example/Tabs",
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Tabs
        type={"indicator"}
        color={"teal"}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tabs.Item label="Tab 1">Content 1</Tabs.Item>
        <Tabs.Item label="Tab 2">
          <Notice title="Test" outlined></Notice>
        </Tabs.Item>
        <Tabs.Item label="Tab 3">
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
        </Tabs.Item>
      </Tabs>
      <div className="dark:text-white">123</div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
