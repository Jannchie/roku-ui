import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef } from "react";
import { RNotifications, pushNotice } from "../..";
import { Btn } from "../..";
export default {
  component: Btn,
  title: "Global/Notifications",
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
            desc: "This is the description",
            existsMS: 3000,
            title: "This is the title",
            type: type,
          });
        }}
      >
        Show Notification
      </Btn>
      <RNotifications bottom className="mt-2 w-96" maxCount={3} />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
