import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Btn, TextField } from '../..';

export default {
  component: TextField,
  title: 'Inputs/TextField',
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [val, setVal] = useState(args.value || '');
  return (
    <TextField {...args} setValue={setVal} value={val} />
  );
};
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  type: 'text',
};

export const Password = Template.bind({});
Password.parameters = {
  docs: {
    storyDescription:
      'We support the style of input boxes displayed as passwords. In some browsers - such as Edge - there is also a toggle button that displays whether or not the password content is displayed. This button will change depending on the theme color.',
  },
};
Password.args = {
  type: 'password',
  value: '123456',
};

export const WithPrefix = Template.bind({});
WithPrefix.parameters = {
  docs: {
    storyDescription: 'We can add some prefixes to the input.',
  },
};
WithPrefix.args = {
  prefix: 'No.',
  value: '1850091',
};
export const WithSuffix = Template.bind({});
WithSuffix.parameters = {
  docs: {
    storyDescription: 'Suffixes can also be added.',
  },
};
WithSuffix.args = {
  suffix: '$',
  value: '100',
};

// export const WithFormat = Template.bind({});
// WithFormat.parameters = {
//   docs: {
//     storyDescription: "We can format the input.",
//   },
// };
// WithFormat.args = {
//   valueFormat: function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   },
//   suffix: "$",
//   value: "12351231",
// };

const TextAlignTemplate: ComponentStory<typeof TextField> = (args) => {
  const [valueLeft, setValueLeft] = useState('Left Align Text');
  const [valueCenter, setValueCenter] = useState('Center Align Text');
  const [valueRight, setValueRight] = useState('Right Align Text');
  return (
    <div className="flex gap-2">
      <TextField
        {...args}
        setValue={setValueLeft}
        textAlign="left"
        value={valueLeft}
      />
      <TextField
        {...args}
        setValue={setValueCenter}
        textAlign="center"
        value={valueCenter}
      />
      <TextField
        {...args}
        setValue={setValueRight}
        textAlign="right"
        value={valueRight}
      />
    </div>
  );
};

export const TextAlign = TextAlignTemplate.bind({});
TextAlign.parameters = {
  docs: {
    storyDescription:
      'Using className allows for deep customization. Note that className is applied to the input element.',
  },
};
TextAlign.args = {};

const BorderTypeTemplate: ComponentStory<typeof TextField> = () => {
  const [solidValue, setSolidValue] = useState('Solid Border Text');
  const [dashedValue, setDashedValue] = useState('Dashed Border Text');
  const [dottedValue, setDottedValue] = useState('Dotted Border Text');
  const [noneValue, setNoneValue] = useState('No Border Text');
  return (
    <div className="flex gap-2">
      <TextField
        border
        borderType="solid"
        className="bg-default-500/10"
        setValue={setSolidValue}
        value={solidValue}
      />
      <TextField
        border
        borderType="dash"
        className="bg-default-500/10"
        setValue={setDashedValue}
        value={dashedValue}
      />
      <TextField
        border
        borderType="dot"
        className="bg-default-500/10"
        setValue={setDottedValue}
        value={dottedValue}
      />
      <TextField
        className="bg-default-500/10"
        setValue={setNoneValue}
        value={noneValue}
      />
    </div>
  );
};

export const BorderType = BorderTypeTemplate.bind({});
BorderType.parameters = {};

const DifferentTextSizeTemplate: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="flex gap-2">
      <TextField className="text-sm" setValue={setValue} value={value} />
      <TextField className="text-lg" setValue={setValue} value={value} />
      <TextField className="text-xl" setValue={setValue} value={value} />
      <TextField className="text-2xl" setValue={setValue} value={value} />
    </div>
  );
};

export const DifferentTextSize = DifferentTextSizeTemplate.bind({});
DifferentTextSize.parameters = {
  docs: {
    storyDescription:
      'Using className allows for deep customization. Note that className is applied to the input element.',
  },
};
DifferentTextSize.args = {
  value: 'Test 123',
};

const TextFieldWithBtnTemplate: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <TextField size="lg" placeholder="Large" setValue={setValue} value={value} />
        <Btn size="lg">BUTTON</Btn>
      </div>
      <div className="flex gap-2">
        <TextField placeholder="Middle" setValue={setValue} value={value} />
        <Btn>BUTTON</Btn>
      </div>
      <div className="flex gap-2">
        <TextField size="sm" placeholder="Small" setValue={setValue} value={value} />
        <Btn size="sm">BUTTON</Btn>
      </div>
    </div>
  );
};
export const TextFieldWithBtn = TextFieldWithBtnTemplate.bind({});
