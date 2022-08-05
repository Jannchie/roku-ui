import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import { Notifications, customPush, push } from "../../hooks/UseNotifications";
import { RNotice } from "../../components/RNotice";
import { RBtn } from "../..";
export default {
  title: "Hook/UseNotifications",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = () => {
  return (
    <>
      <RBtn
        onClick={() => {
          push({
            title: "This is the title",
            desc: "This is the description",
            type: "success",
            existsMS: 300000,
          });
        }}
      >
        Show Notification
      </RBtn>
      <Notifications className="mt-2 w-96" />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
