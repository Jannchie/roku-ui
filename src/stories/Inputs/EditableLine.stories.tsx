import { EditableLine } from "../..";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
export default {
  component: EditableLine,
  title: "Inputs/EditableLine",
} as ComponentMeta<typeof EditableLine>;

const Template: ComponentStory<typeof EditableLine> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div className="flex gap-1">
      <EditableLine
        {...args}
        setValue={setValue}
        value={value}
        onOK={console.log}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "Test Text",
};
