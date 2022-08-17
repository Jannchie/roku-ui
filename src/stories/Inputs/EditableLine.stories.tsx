import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { EditableLine } from '../..';

export default {
  component: EditableLine,
  title: 'Inputs/EditableLine',
} as ComponentMeta<typeof EditableLine>;

const Template: ComponentStory<typeof EditableLine> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="flex gap-1 flex-col">
      <EditableLine
        {...args}
        size="sm"
        setValue={setValue}
        value={value}
        // eslint-disable-next-line no-console
        onOK={console.log}
      />
      <EditableLine
        {...args}
        setValue={setValue}
        value={value}
        // eslint-disable-next-line no-console
        onOK={console.log}
      />
      <EditableLine
        {...args}
        size="lg"
        setValue={setValue}
        value={value}
        // eslint-disable-next-line no-console
        onOK={console.log}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 'Test Text',
};
