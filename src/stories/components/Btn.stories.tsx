import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Btn, Colors } from "../..";
export default {
  title: "Example/Btn",
  component: Btn,
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;
const SizeTemplate: ComponentStory<typeof Btn> = () => (
  <div className="flex gap-2 items-center">
    <Btn label="Small Button" size="sm" />
    <Btn label="Medium Button" size="md" />
    <Btn label="Large Button" size="lg" />
  </div>
);

const AllTemplate: ComponentStory<typeof Btn> = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <Btn label="Primary" color="primary" />
      <Btn label="Success" color="success" />
      <Btn label="Danger" color="danger" />
      <Btn label="Warning" color="warning" />
      <Btn label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border label="Primary" color="primary" />
      <Btn border label="Success" color="success" />
      <Btn border label="Danger" color="danger" />
      <Btn border label="Warning" color="warning" />
      <Btn border label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn text dash label="Primary" color="primary" />
      <Btn text dash label="Success" color="success" />
      <Btn text dash label="Danger" color="danger" />
      <Btn text dash label="Warning" color="warning" />
      <Btn text dash label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border text dash label="Primary" color="primary" />
      <Btn border text dash label="Success" color="success" />
      <Btn border text dash label="Danger" color="danger" />
      <Btn border text dash label="Warning" color="warning" />
      <Btn border text dash label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn disabled dash label="Primary" color="primary" />
      <Btn disabled dash label="Success" color="success" />
      <Btn disabled dash label="Danger" color="danger" />
      <Btn disabled dash label="Warning" color="warning" />
      <Btn disabled dash label="Default" />
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
  const [color, setColor] = useState<Colors>("primary");
  return (
    <div className="flex flex-col gap-2">
      <Btn
        loading={loading}
        color={color}
        style={{ width: 128 }}
        size="sm"
        onClick={() => {
          setColor((val) => (val === "primary" ? "success" : "primary"));
          setLoading((val) => !val);
        }}
      >
        {loading ? "Loading" : "Click"}
      </Btn>
      <Btn
        loading={loading}
        color="fuchsia"
        size="sm"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Small
      </Btn>
      <Btn
        loading={loading}
        color="pink"
        size="md"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Medium
      </Btn>
      <Btn
        loading={loading}
        color="pink"
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        loading={loading}
        color="red"
        size="lg"
        leadingIcon={<span className="material-symbols-outlined">error</span>}
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        loading={loading}
        color="green"
        icon
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        <span className="material-symbols-outlined">check_circle</span>
      </Btn>
    </div>
  );
};

export const Loading = LoadingTemplate.bind({});
export const All = AllTemplate.bind({});
