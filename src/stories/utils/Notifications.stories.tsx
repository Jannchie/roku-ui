import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import { Notifications, push } from "../../utils/Notifications";
import { RNotice } from "../../components/RNotice";
import { RBtn } from "../..";
export default {
  title: "Utils/Notifications",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = () => {
  const idx = useRef(0);
  return (
    <>
      <RBtn
        onClick={() => {
          const type = ["success", "info", "warning", "danger"][
            idx.current++ % 4
          ] as "success" | "info" | "warning" | "danger";
          push({
            title: "This is the title",
            desc: "This is the description",
            type: type,
            existsMS: 50000,
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
