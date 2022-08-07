import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RBtn } from "../..";
import { RBtnGroup } from "../..";
export default {
  title: "Example/RBtnGroup",
  component: RBtnGroup,
} as ComponentMeta<typeof RBtnGroup>;

const Template: ComponentStory<typeof RBtnGroup> = (args) => {
  return (
    <RBtnGroup>
      <RBtn>A</RBtn>
      <RBtn>B</RBtn>
      <RBtn onClick={() => {}}>✘</RBtn>
    </RBtnGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};
