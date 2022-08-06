import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { REditableLine } from "../../components/REditableLine";
export default {
  title: "Example/REditableLine",
  component: REditableLine,
} as ComponentMeta<typeof REditableLine>;

const Template: ComponentStory<typeof REditableLine> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div className="flex gap-1">
      <REditableLine
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
