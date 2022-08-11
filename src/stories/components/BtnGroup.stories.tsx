import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Btn } from "../..";
export default {
  title: "Example/Btn Group",
  component: Btn.Group,
} as ComponentMeta<typeof Btn.Group>;

const Template: ComponentStory<typeof Btn.Group> = () => {
  return (
    <Btn.Group>
      <Btn>A</Btn>
      <Btn>B</Btn>
      <Btn onClick={() => {return;}}>✘</Btn>
    </Btn.Group>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};
