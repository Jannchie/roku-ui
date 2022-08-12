import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { TextField } from '../..';
import { Digital } from '../../components/Digital/Digital';

export default {
  component: Digital,
  title: 'Display/Digital',
} as ComponentMeta<typeof Digital>;

const Template: ComponentStory<typeof Digital> = () => {
  const [value, setValue] = useState('');
  return (
    <div className="text-center">
      <TextField
        placeholder="Enter a number"
        className="mb-2"
        value={value}
        setValue={setValue}
      />
      <div className="flex gap-4 flex-col justify-between flex-wrap">
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 0,
          }).format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 0,
            notation: 'compact',
            compactDisplay: 'short',
          }).format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('ar-EG').format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'JPY',
            maximumFractionDigits: 0,
          }).format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          }).format(v)}
        />
        <Digital
          className="text-6xl dark:text-primary-500"
          value={Number(value)}
          format={(v) => new Intl.NumberFormat('zh-CN', {
            style: 'percent',
          }).format(v)}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
};
