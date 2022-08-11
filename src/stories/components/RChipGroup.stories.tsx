import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RChip } from "../..";
import { RChipGroup } from "../../components/RChipGroup";
export default {
  title: "Example/RChipGroup",
  component: RChipGroup,
} as ComponentMeta<typeof RChipGroup>;

const Template: ComponentStory<typeof RChip> = () => {
  return (
    <RChipGroup>
      <RChip>First</RChip>
      <RChip>B</RChip>
      <RChip className="px-0" onClick={() => { return; }}>
        ✘
      </RChip>
    </RChipGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};
