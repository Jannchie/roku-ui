import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RChip } from "../..";
import { Colors } from "../../utils/colors";
export default {
  title: "Example/RChip",
  component: RChip,
} as ComponentMeta<typeof RChip>;

const Template: ComponentStory<typeof RChip> = (args) => {
  return <RChip {...args}>{args.children}</RChip>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
};

export const WithLeading = Template.bind({});
WithLeading.args = {
  children: "Chip With Leading",
  leading: <span className="mr-1">●</span>,
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: "Clickable Chip",
  onClick: () => {},
};

const WithColorTemplate: ComponentStory<typeof RChip> = (args) => {
  const colors: Colors[] = [
    "primary",
    "success",
    "danger",
    "warning",
    "amber",
    "blue",
    "cyan",
    "green",
    "indigo",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "yellow",
  ];
  return (
    <div className="flex gap-1 flex-wrap">
      {colors.map((color) => (
        <RChip key={color} color={color}>
          {color.toUpperCase()} CHIP
        </RChip>
      ))}
    </div>
  );
};
export const WithColor = WithColorTemplate.bind({});
WithColor.args = {};

const WithSizeTemplate: ComponentStory<typeof RChip> = (args) => {
  const sizes: any[] = ["xs", "sm", "md", "lg", "xl"];
  return (
    <div className="flex gap-1 flex-wrap items-center">
      {sizes.map((size) => (
        <RChip key={size} size={size}>
          {size} chip
        </RChip>
      ))}
    </div>
  );
};

export const WithSize = WithSizeTemplate.bind({});
WithSize.args = {};
