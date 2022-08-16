import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Btn, MaterialSymbolIcon } from '../..';

export default {
  component: Btn.Group,
  title: 'Inputs/Btn Group',
} as ComponentMeta<typeof Btn.Group>;

const Template: ComponentStory<typeof Btn.Group> = () => {
  const [value, setValue] = useState('System');
  return (
    <>
      <div>
        Current:
        {value}
      </div>
      <Btn.Group value={value} setValue={setValue} activeColor="primary">
        <Btn leadingIcon={<MaterialSymbolIcon icon="dark_mode" />} value="Dark">Dark</Btn>
        <Btn leadingIcon={<MaterialSymbolIcon icon="light_mode" />} value="Light">Light</Btn>
        <Btn leadingIcon={<MaterialSymbolIcon icon="routine" />} value="System">System</Btn>
      </Btn.Group>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};
