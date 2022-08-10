import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RTabs } from "../..";
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
          <div className="p-2">Content 2</div>
        </RTabs.Item>
      </RTabs>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
