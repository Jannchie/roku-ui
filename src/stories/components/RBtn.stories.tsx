import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RBtn } from "../..";
export default {
  title: "Example/RBtn",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = (args) => <RBtn {...args} />;
const SizeTemplate: ComponentStory<typeof RBtn> = (args) => (
  <div className="flex gap-2 items-center">
    <RBtn label="Small Button" size="small" />
    <RBtn label="Medium Button" size="medium" />
    <RBtn label="Large Button" size="large" />
  </div>
);

const AllTemplate: ComponentStory<typeof RBtn> = (args) => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <RBtn label="Primary" color="primary" />
      <RBtn label="Success" color="success" />
      <RBtn label="Danger" color="danger" />
      <RBtn label="Warning" color="warning" />
      <RBtn label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn outline label="Primary" color="primary" />
      <RBtn outline label="Success" color="success" />
      <RBtn outline label="Danger" color="danger" />
      <RBtn outline label="Warning" color="warning" />
      <RBtn outline label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn outline dash label="Primary" color="primary" />
      <RBtn outline dash label="Success" color="success" />
      <RBtn outline dash label="Danger" color="danger" />
      <RBtn outline dash label="Warning" color="warning" />
      <RBtn outline dash label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn disabled outline dash label="Primary" color="primary" />
      <RBtn disabled outline dash label="Success" color="success" />
      <RBtn disabled outline dash label="Danger" color="danger" />
      <RBtn disabled outline dash label="Warning" color="warning" />
      <RBtn disabled outline dash label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn disabled dash label="Primary" color="primary" />
      <RBtn disabled dash label="Success" color="success" />
      <RBtn disabled dash label="Danger" color="danger" />
      <RBtn disabled dash label="Warning" color="warning" />
      <RBtn disabled dash label="Default" />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  onClick() {
    alert("Clicked");
  },
};
export const Size = SizeTemplate.bind({});
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: "Loading Button",
};
export const All = AllTemplate.bind({});
