import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RCard } from ".";
import { RBtn } from "../RBtn";
export default {
  title: "Example/RCard",
  component: RCard,
} as ComponentMeta<typeof RCard>;

const Template: ComponentStory<typeof RCard> = (args) => (
  <div className="flex justify-center">
    <RCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [<RBtn key="ok" color="primary" label="OK, I Got it!" />],
  dense: false,
  className: "w-96",
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [<RBtn key="ok" color="primary" label="OK, I Got it!" />],
  divider: true,
  className: "w-96",
};

export const Dense = Template.bind({});
Dense.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [
    <RBtn key="ok" color="primary" size="small" label="OK, I Got it!" />,
  ],
  dense: true,
  className: "w-96",
};
