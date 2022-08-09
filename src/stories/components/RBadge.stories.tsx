import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RAvatar, RBadge, RChip } from "../..";
export default {
  title: "Example/RBadge",
  component: RBadge,
} as ComponentMeta<typeof RBadge>;

const Template: ComponentStory<typeof RBadge> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <RBadge
      dot
      show={show}
      position={args.position}
      color={args.color}
      className="outline dark:!outline-zinc-900 !outline-white"
    >
      <RChip onClick={() => setShow((val) => !val)}>Click Me</RChip>
    </RBadge>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: "top-right",
  color: "red",
};

const TemplateAvatar: ComponentStory<typeof RBadge> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <RBadge
        dot
        show={show}
        className="outline dark:outline-zinc-900 outline-white"
      >
        <RAvatar size="sm">
          <img src="https://placehold.jp/80x80.png" />
        </RAvatar>
      </RBadge>
    </div>
  );
};
export const WithAvatar = TemplateAvatar.bind({});
WithAvatar.args = {};
