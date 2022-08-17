import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Panel } from '../..';

export default {
  component: Avatar,
  title: 'Display/Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Panel border className="flex justify-center gap-6 p-4 max-w-md m-auto">
    <Avatar
      {...args}
      square={args.square}
      src="https://i.pravatar.cc/80?img=19"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('Avatar clicked');
      }}
    />
  </Panel>
);

export const Default = Template.bind({});
Default.args = {
  square: false,
  outline: false,
};

const TemplateWithOutline: ComponentStory<typeof Avatar> = () => (
  <Panel border className="flex justify-center gap-6 p-4 max-w-md m-auto">
    <Avatar outline color="orange" src="https://i.pravatar.cc/80?img=9" />
    <Avatar outline="emerald" color="fuchsia">L</Avatar>
    <Avatar outline color="sky" src="https://i.pravatar.cc/80?img=14" />
  </Panel>
);

export const WithOutline = TemplateWithOutline.bind({});

const TemplateWithSquare: ComponentStory<typeof Avatar> = () => (
  <Panel border className="flex justify-center gap-6 p-4 max-w-md m-auto">
    <Avatar square color="orange" src="https://i.pravatar.cc/80?img=32" />
    <Avatar square color="lime" src="https://i.pravatar.cc/80?img=15" />
    <Avatar square color="sky" src="https://i.pravatar.cc/80?img=30" />
  </Panel>
);
export const WithSquare = TemplateWithSquare.bind({});

const AvatarGroupTemplate: ComponentStory<typeof Avatar> = () => (
  <Panel border className="flex justify-center gap-6 p-4 max-w-md m-auto">
    <Avatar.Group>
      <Avatar src="https://i.pravatar.cc/80?img=16" />
      <Avatar src="https://i.pravatar.cc/80?img=24" />
      <Avatar src="https://i.pravatar.cc/80?img=36" />
    </Avatar.Group>
  </Panel>
);
export const AvatarGroup = AvatarGroupTemplate.bind({});
