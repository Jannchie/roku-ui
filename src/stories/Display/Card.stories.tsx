import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Btn, Card } from '../..';

export default {
  component: Card,
  title: 'Display/Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="flex justify-center">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  actions: [<Btn key="ok" color="primary" label="OK, I Got it!" />],
  body: 'Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.',
  className: 'w-96',
  dense: false,
  subtitle: 'Card Subtitle Text',
  title: 'Card Title',
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  actions: [<Btn key="ok" color="primary" label="OK, I Got it!" />],
  body: 'Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.',
  className: 'w-96',
  divider: true,
  subtitle: 'Card Subtitle Text',
  title: 'Card Title',
};

export const Dense = Template.bind({});
Dense.args = {
  actions: [<Btn key="ok" color="primary" label="OK, I Got it!" size="sm" />],
  body: 'Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer.',
  className: 'w-96',
  dense: true,
  subtitle: 'Card Subtitle Text',
  title: 'Card Title',
};
