import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RTabs } from "../..";
import { RNotice } from "../..";
export default {
  title: "Example/RTabs",
} as ComponentMeta<typeof RTabs>;

const Template: ComponentStory<typeof RTabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <RTabs
        type={"indicator"}
        color={"teal"}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <RTabs.Item label="Tab 1">
          <div className="p-2">Content 1</div>
        </RTabs.Item>
        <RTabs.Item label="Tab 2">
          <RNotice title="Test"></RNotice>
        </RTabs.Item>
        <RTabs.Item label="Tab 3">
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
          <div className="p-2">Content 3</div>
        </RTabs.Item>
      </RTabs>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
