import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import { Notifications, push } from "../../hooks/UseNotifications";
import { RBtn } from "../../components/RBtn";
import { RNotice } from "../../components/RNotice";
export default {
  title: "Hook/UseNotifications",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = () => {
  const id = useRef(0);
  return (
    <>
      <RBtn
        onClick={() => {
          push(
            RNotice({
              title: `Title ${id.current++}`,
              desc: "Des cDesc Desc DescDescDD escDesc DescDescDes cDDescDescD escDescDescDDescDescDescDescDescD",
            })
          );
        }}
      >
        Show Notification
      </RBtn>
      <Notifications className="mt-2 w-full" bottom />
      <Notifications className="mt-2 w-64" />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
