import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RChip } from "../..";
import { RChipGroup } from "../../components/RChipGroup";
import { Colors } from "../../utils/colors";
export default {
  title: "Example/RChipGroup",
  component: RChipGroup,
} as ComponentMeta<typeof RChipGroup>;

const Template: ComponentStory<typeof RChip> = (args) => {
  return (
    <RChipGroup>
      <RChip>First</RChip>
      <RChip>B</RChip>
      <RChip className="px-0" onClick={() => {}}>
        ✘
      </RChip>
    </RChipGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};
