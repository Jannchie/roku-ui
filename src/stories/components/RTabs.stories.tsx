import { Tab } from "@headlessui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RBtn, RCard, RTabs } from "../..";
export default {
  title: "Example/RTabs",
} as ComponentMeta<typeof RTabs>;

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

const Template: ComponentStory<typeof RTabs> = () => {
  const a = <RTabs data={[]}></RTabs>;
  return (
    <RTabs
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
              <div className="p-2">Content2</div>
            </RCard>
          ),
        },
        {
          key: "Page 3",
          value: (
            <RCard>
              <div className="p-2">Content3</div>
            </RCard>
          ),
        },
      ]}
    ></RTabs>
  );
};

export const Default = Template.bind({});
