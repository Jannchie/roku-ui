import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../..';

export default {
  component: Avatar,
  title: 'Display/Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className="flex justify-center">
    <Avatar {...args} square={args.square} src="https://i.pravatar.cc/80?img=19" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  square: false,
  outline: false,
};

const TemplateWithOutline: ComponentStory<typeof Avatar> = () => (
  <div className="flex justify-center gap-6">
    <Avatar outline color="orange" src="https://i.pravatar.cc/80?img=9" />
    <Avatar outline="emerald" color="fuchsia">L</Avatar>
    <Avatar outline color="sky" src="https://i.pravatar.cc/80?img=14" />
  </div>
);

export const WithOutline = TemplateWithOutline.bind({});

const TemplateWithSquare: ComponentStory<typeof Avatar> = () => (
  <div className="flex justify-center gap-6">
    <Avatar square color="orange" src="https://i.pravatar.cc/80?img=32" />
    <Avatar square color="lime" src="https://i.pravatar.cc/80?img=15" />
    <Avatar square color="sky" src="https://i.pravatar.cc/80?img=30" />
  </div>
);
export const WithSquare = TemplateWithSquare.bind({});

const AvatarGroupTemplate: ComponentStory<typeof Avatar> = () => (
  <Avatar.Group>
    <Avatar src="https://i.pravatar.cc/80?img=16" />
    <Avatar src="https://i.pravatar.cc/80?img=24" />
    <Avatar src="https://i.pravatar.cc/80?img=36" />
  </Avatar.Group>
);
export const AvatarGroup = AvatarGroupTemplate.bind({});
