import { Tab } from "@headlessui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RBtn, RCard, RNotice, RTabs } from "../..";
export default {
  title: "Example/RTabs",
} as ComponentMeta<typeof RTabs>;

const Template: ComponentStory<typeof RTabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <RTabs
        type={"fill"}
        color={"teal"}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        data={[
          {
            key: "Page 1",
            value: (
              <RCard>
                <div className="p-2">Content1</div>
              </RCard>
            ),
          },
          {
            key: "Page 2",
            value: (
              <RCard>
                <RNotice title="Test Notice" desc="Test Desc"></RNotice>
              </RCard>
            ),
          },
          {
            key: "Page 3",
            value: <div className="p-2">Content3</div>,
          },
        ]}
      ></RTabs>
      <RTabs
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        type={"indicator"}
        data={[
          {
            key: "Page 1",
            value: (
              <RCard>
                <div className="p-2">Content1</div>
              </RCard>
            ),
          },
          {
            key: "Page 2",
            value: (
              <RCard>
                <RNotice title="Test Notice" desc="Test Desc"></RNotice>
              </RCard>
            ),
          },
          {
            key: "Page 3",
            value: <div className="p-2">Content3</div>,
          },
        ]}
      ></RTabs>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
