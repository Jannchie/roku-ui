import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Btn, Progress } from '../..';

export default {
  component: Progress,
  title: 'Feedback/Progress',
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  const [val, setVal] = useState(20);
  return (
    <div className="p-10">
      <div className="mb-2">
        <Btn
          onClick={() => {
            setVal(val + 10);
          }}
        >
          Add Val
        </Btn>
      </div>
      <Progress
        {...args}
        value={val}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  blur: true,
  infinite: false,
  fake: false,
  durationMS: 0,
  total: 100,
};
