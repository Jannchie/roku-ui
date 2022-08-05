import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RNotice } from "../../components/RNotice/RNotice";
export default {
  title: "Example/RNotice",
  component: RNotice,
} as ComponentMeta<typeof RNotice>;

const Template: ComponentStory<typeof RNotice> = (args) => {
  return <RNotice {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Notice",
  desc: "Default Notice Description",
  mainTextColor: "text-primary-500",
  dense: false,
  outlined: true,
};
