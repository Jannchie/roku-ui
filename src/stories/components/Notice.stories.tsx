import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notice } from "../..";
export default {
  title: "Example/Notice",
  component: Notice,
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = (args) => {
  return <Notice {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Notice",
  desc: "Default Notice Description",
  mainTextColor: "text-primary-500",
  dense: false,
  outlined: true,
};
