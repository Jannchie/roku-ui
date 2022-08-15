import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from '../..';

export default {
  component: Textarea,
  title: 'Inputs/Textarea',
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState('');
  return (
    <Textarea placeholder={args.placeholder} value={value} setValue={setValue} />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
