import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Avatar, Badge, Chip } from '../..';

export default {
  component: Badge,
  title: 'Modifier/Badge',
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <Badge
      dot
      className="outline dark:!outline-default-900 !outline-white"
      color={args.color}
      position={args.position}
      show={show}
    >
      <Chip onClick={() => setShow((val) => !val)}>Click Me</Chip>
    </Badge>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  position: 'top-right',
};

const TemplateAvatar: ComponentStory<typeof Badge> = () => {
  const [show] = useState(true);
  return (
    <div>
      <Badge
        dot
        className="outline dark:outline-default-900 outline-white"
        show={show}
      >
        <Avatar size="sm">
          <img src="https://placehold.jp/80x80.png" alt="place hold" />
        </Avatar>
      </Badge>
    </div>
  );
};
export const WithAvatar = TemplateAvatar.bind({});
WithAvatar.args = {};
