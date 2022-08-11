import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chip } from "../..";
export default {
  title: "Example/Chip Group",
  component: Chip.Group,
} as ComponentMeta<typeof Chip.Group>;

const Template: ComponentStory<typeof Chip> = () => {
  return (
    <Chip.Group>
      <Chip>First</Chip>
      <Chip>B</Chip>
      <Chip className="px-0" onClick={() => { return; }}>
        ✘
      </Chip>
    </Chip.Group>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};
