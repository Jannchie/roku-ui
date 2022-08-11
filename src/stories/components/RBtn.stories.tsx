import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RBtn } from "../..";
export default {
  title: "Example/RBtn",
  component: RBtn,
} as ComponentMeta<typeof RBtn>;

const Template: ComponentStory<typeof RBtn> = (args) => <RBtn {...args} />;
const SizeTemplate: ComponentStory<typeof RBtn> = (args) => (
  <div className="flex gap-2 items-center">
    <RBtn label="Small Button" size="sm" />
    <RBtn label="Medium Button" size="md" />
    <RBtn label="Large Button" size="lg" />
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
      <RBtn border label="Primary" color="primary" />
      <RBtn border label="Success" color="success" />
      <RBtn border label="Danger" color="danger" />
      <RBtn border label="Warning" color="warning" />
      <RBtn border label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn text dash label="Primary" color="primary" />
      <RBtn text dash label="Success" color="success" />
      <RBtn text dash label="Danger" color="danger" />
      <RBtn text dash label="Warning" color="warning" />
      <RBtn text dash label="Default" />
    </div>
    <div className="flex gap-2">
      <RBtn border text dash label="Primary" color="primary" />
      <RBtn border text dash label="Success" color="success" />
      <RBtn border text dash label="Danger" color="danger" />
      <RBtn border text dash label="Warning" color="warning" />
      <RBtn border text dash label="Default" />
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

const LoadingTemplate = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Not Loading");
  return (
    <div className="flex flex-col gap-2">
      <RBtn
        loading={loading}
        color="fuchsia"
        size="sm"
        onClick={() => {
          setText((val) => (val === "Not Loading" ? "Loading" : "Not Loading"));
        }}
      >
        {text}
      </RBtn>
      <RBtn
        loading={loading}
        color="fuchsia"
        size="sm"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Small
      </RBtn>
      <RBtn
        loading={loading}
        color="pink"
        size="md"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Medium
      </RBtn>
      <RBtn
        loading={loading}
        color="pink"
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </RBtn>
      <RBtn
        loading={loading}
        color="red"
        size="lg"
        leadingIcon={<span className="material-symbols-outlined">error</span>}
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </RBtn>
      <RBtn
        loading={loading}
        color="green"
        icon
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        <span className="material-symbols-outlined">check_circle</span>
      </RBtn>
    </div>
  );
};

export const Loading = LoadingTemplate.bind({});
export const All = AllTemplate.bind({});
