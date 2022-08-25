import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Btn, Colors } from '../..';

export default {
  component: Btn,
  title: 'Inputs/Btn',
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
      <Btn color="primary" label="Primary" />
      <Btn color="success" label="Success" />
      <Btn color="danger" label="Danger" />
      <Btn color="warning" label="Warning" />
      <Btn label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border color="primary" label="Primary" />
      <Btn border color="success" label="Success" />
      <Btn border color="danger" label="Danger" />
      <Btn border color="warning" label="Warning" />
      <Btn border label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn dash text color="primary" label="Primary" />
      <Btn dash text color="success" label="Success" />
      <Btn dash text color="danger" label="Danger" />
      <Btn dash text color="warning" label="Warning" />
      <Btn dash text label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border dash text color="primary" label="Primary" />
      <Btn border dash text color="success" label="Success" />
      <Btn border dash text color="danger" label="Danger" />
      <Btn border dash text color="warning" label="Warning" />
      <Btn border dash text label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn dash disabled color="primary" label="Primary" />
      <Btn dash disabled color="success" label="Success" />
      <Btn dash disabled color="danger" label="Danger" />
      <Btn dash disabled color="warning" label="Warning" />
      <Btn dash disabled label="Default" />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick() {
    // eslint-disable-next-line no-console
    console.log('Clicked');
  },
};
export const Size = SizeTemplate.bind({});

function LoadingTemplate() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState<Colors>('primary');
  return (
    <div className="flex flex-col items-start gap-2">
      <Btn
        color={color}
        loading={loading}
        size="sm"
        style={{ width: 128 }}
        onClick={() => {
          setColor((val) => (val === 'primary' ? 'success' : 'primary'));
          setLoading((val) => !val);
        }}
      >
        {loading ? 'Loading' : 'Click'}
      </Btn>
      <Btn
        color="fuchsia"
        loading={loading}
        size="sm"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Small
      </Btn>
      <Btn
        color="pink"
        loading={loading}
        size="md"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Medium
      </Btn>
      <Btn
        color="pink"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        color="red"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        <span className="material-symbols-outlined">error</span>
        Loading Button Large
      </Btn>
      <Btn
        icon
        color="green"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        <span className="material-symbols-outlined">check_circle</span>
      </Btn>
    </div>
  );
}

export const Loading = LoadingTemplate.bind({});
export const All = AllTemplate.bind({});
