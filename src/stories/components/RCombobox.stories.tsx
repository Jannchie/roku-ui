import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RCombobox } from "../..";
export default {
  title: "Example/RCombobox",
  component: RCombobox,
} as ComponentMeta<typeof RCombobox>;

const Template: ComponentStory<typeof RCombobox> = (args) => (
  <div className="flex justify-center h-32">
    <RCombobox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Linda Mckee" },
  ],
};
