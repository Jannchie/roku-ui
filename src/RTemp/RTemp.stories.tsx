import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RTemp } from ".";
export default {
  title: "Example/RTemp",
  component: RTemp,
} as ComponentMeta<typeof RTemp>;

const Template: ComponentStory<typeof RTemp> = (args) => (
  <div className="flex justify-center">
    <RTemp {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
