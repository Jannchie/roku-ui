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
        <Btn value="Dark">
          <MaterialSymbolIcon icon="dark_mode" />
          Dark
        </Btn>
        <Btn value="Light">
          <MaterialSymbolIcon icon="light_mode" />
          Light
        </Btn>
        <Btn value="System">
          <MaterialSymbolIcon icon="routine" />
          System
        </Btn>
      </Btn.Group>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};
