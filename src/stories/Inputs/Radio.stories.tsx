import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Radio } from '../..';

export default {
  component: Radio,
  title: 'Inputs/Radio',
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = () => {
  const [value, setValue] = useState<'A'|'B'>('A');
  return (
    <>
      <div>
        Current value:
        {' '}
        {value}
      </div>
      <div className="flex">
        <Radio.Group value={value} setValue={setValue}>
          <Radio color="red" label="AAA" value="A" />
          <Radio color="yellow" label="BBB" value="B" />
        </Radio.Group>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
