import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Btn, Card } from "../..";
export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="flex justify-center">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [<Btn key="ok" color="primary" label="OK, I Got it!" />],
  dense: false,
  className: "w-96",
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [<Btn key="ok" color="primary" label="OK, I Got it!" />],
  divider: true,
  className: "w-96",
};

export const Dense = Template.bind({});
Dense.args = {
  title: "Card Title",
  subtitle: "Card Subtitle Text",
  body: "Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.",
  actions: [<Btn key="ok" color="primary" size="sm" label="OK, I Got it!" />],
  dense: true,
  className: "w-96",
};
