import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RBtn } from "../..";
import { RTab } from "../..";
export default {
  title: "Example/RTab",
} as ComponentMeta<typeof RTab.Container>;

const Template: ComponentStory<typeof RTab.Container> = (args) => {
  return (
    <RTab.Container>
      <RTab.Item>AAA</RTab.Item>
      <RTab.Item>BBB</RTab.Item>
      <RTab.Item>CCC</RTab.Item>
    </RTab.Container>
  );
};

export const Default = Template.bind({});
Default.args = {};
