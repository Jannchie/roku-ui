import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AutoComplete } from "../..";
export default {
  component: AutoComplete,
  title: "Inputs/AutoComplete",
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <div className="flex justify-center h-32">
    <AutoComplete {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Linda Mckee" },
  ],
};
