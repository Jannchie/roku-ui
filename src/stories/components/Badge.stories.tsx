import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Avatar, Badge, Chip } from "../..";
export default {
  title: "Example/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <Badge
      dot
      show={show}
      position={args.position}
      color={args.color}
      className="outline dark:!outline-zinc-900 !outline-white"
    >
      <Chip onClick={() => setShow((val) => !val)}>Click Me</Chip>
    </Badge>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: "top-right",
  color: "red",
};

const TemplateAvatar: ComponentStory<typeof Badge> = () => {
  const [show] = useState(true);
  return (
    <div>
      <Badge
        dot
        show={show}
        className="outline dark:outline-zinc-900 outline-white"
      >
        <Avatar size="sm">
          <img src="https://placehold.jp/80x80.png" />
        </Avatar>
      </Badge>
    </div>
  );
};
export const WithAvatar = TemplateAvatar.bind({});
WithAvatar.args = {};
