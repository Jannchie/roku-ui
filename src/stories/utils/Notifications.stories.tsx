import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import { RNotifications, pushNotice } from "../..";
import { Btn } from "../..";
export default {
  title: "Utils/Notifications",
  component: Btn,
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = () => {
  const idx = useRef(0);
  return (
    <>
      <Btn
        onClick={() => {
          const type = ["success", "info", "warning", "danger"][
            idx.current++ % 4
          ] as "success" | "info" | "warning" | "danger";
          pushNotice({
            title: "This is the title",
            desc: "This is the description",
            type: type,
            existsMS: 3000,
          });
        }}
      >
        Show Notification
      </Btn>
      <RNotifications maxCount={3} bottom className="mt-2 w-96" />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
