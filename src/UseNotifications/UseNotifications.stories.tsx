import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useNotifications } from ".";
import { RBtn } from "../RBtn";
import { RNotice } from "../RNotice";
export default {
  title: "Hook/UseNotifications",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = () => {
  const { Notifications, notifier } = useNotifications({
    className: "w-64 mt-2",
  });
  const id = useRef(0);
  return (
    <>
      <RBtn
        onClick={() => {
          notifier.send(
            RNotice({
              title: `Title ${id.current++}`,
              desc: "Desc",
            })
          );
        }}
      >
        Show Notification
      </RBtn>
      <Notifications />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
