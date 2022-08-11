import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { EditableLine } from "../..";
export default {
  title: "Example/EditableLine",
  component: EditableLine,
} as ComponentMeta<typeof EditableLine>;

const Template: ComponentStory<typeof EditableLine> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div className="flex gap-1">
      <EditableLine
        {...args}
        value={value}
        setValue={setValue}
        onOK={console.log}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "Test Text",
};
