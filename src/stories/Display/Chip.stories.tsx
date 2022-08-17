import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Colors } from '../../utils/colors';
import { Chip, Panel } from '../..';

export default {
  component: Chip,
  title: 'Display/Chip',
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Panel border className="flex justify-center gap-6 p-4 max-w-md m-auto">
    <Chip {...args}>{args.children}</Chip>
  </Panel>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
  onClick: undefined,
};

export const WithLeading = Template.bind({});
WithLeading.args = {
  children: 'Chip With Leading',
  leading: <span className="mr-1">●</span>,
  onClick: undefined,
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: 'Clickable Chip',
  onClick: () => {},
};

const WithColorTemplate: ComponentStory<typeof Chip> = () => {
  const colors: Colors[] = [
    'primary',
    'success',
    'danger',
    'warning',
    'amber',
    'blue',
    'cyan',
    'green',
    'indigo',
    'lime',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'yellow',
  ];
  return (
    <Panel border className="gap-6 p-4 max-w-md m-auto">
      {colors.map((color) => (
        <Chip key={color} color={color}>
          {color.toUpperCase()}
          {' '}
          CHIP
        </Chip>
      ))}
    </Panel>
  );
};
export const WithColor = WithColorTemplate.bind({});
WithColor.args = {};

const WithSizeTemplate: ComponentStory<typeof Chip> = () => {
  const sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <Panel border className="gap-6 p-4 max-w-md m-auto">
      {sizes.map((size) => (
        <Chip key={size} size={size}>
          {size}
          {' '}
          chip
        </Chip>
      ))}
    </Panel>
  );
};

export const WithSize = WithSizeTemplate.bind({});
WithSize.args = {};
