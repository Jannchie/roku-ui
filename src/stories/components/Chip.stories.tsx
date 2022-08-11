import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Colors } from "../../utils/colors";
import { Chip } from "../..";
export default {
  title: "Example/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args}>{args.children}</Chip>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Chip",
  onClick: undefined,
};

export const WithLeading = Template.bind({});
WithLeading.args = {
  children: "Chip With Leading",
  leading: <span className="mr-1">●</span>,
  onClick: undefined,
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: "Clickable Chip",
  onClick: () => {return;},
};

const WithColorTemplate: ComponentStory<typeof Chip> = () => {
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
        <Chip key={color} color={color}>
          {color.toUpperCase()} CHIP
        </Chip>
      ))}
    </div>
  );
};
export const WithColor = WithColorTemplate.bind({});
WithColor.args = {};

const WithSizeTemplate: ComponentStory<typeof Chip> = () => {
  const sizes : ("xs" | "sm" | "md" | "lg" | "xl")[] = ["xs", "sm", "md", "lg", "xl"];
  return (
    <div className="flex gap-1 flex-wrap items-center">
      {sizes.map((size) => (
        <Chip key={size} size={size}>
          {size} chip
        </Chip>
      ))}
    </div>
  );
};

export const WithSize = WithSizeTemplate.bind({});
WithSize.args = {};
