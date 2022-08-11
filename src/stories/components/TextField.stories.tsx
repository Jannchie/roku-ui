import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { TextField } from "../..";
export default {
  title: "Example/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <>
      <TextField {...args} value={value} setValue={setValue} />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Placeholder",
};

export const Password = Template.bind({});
Password.parameters = {
  docs: {
    storyDescription:
      "We support the style of input boxes displayed as passwords. In some browsers - such as Edge - there is also a toggle button that displays whether or not the password content is displayed. This button will change depending on the theme color.",
  },
};
Password.args = {
  type: "password",
  value: "123456",
};

export const WithPrefix = Template.bind({});
WithPrefix.parameters = {
  docs: {
    storyDescription: "We can add some prefixes to the input.",
  },
};
WithPrefix.args = {
  prefix: "No.",
  value: "1850091",
};
export const WithSuffix = Template.bind({});
WithSuffix.parameters = {
  docs: {
    storyDescription: "Suffixes can also be added.",
  },
};
WithSuffix.args = {
  suffix: "$",
  value: "100",
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
  const [valueLeft, setValueLeft] = useState("Left Align Text");
  const [valueCenter, setValueCenter] = useState("Center Align Text");
  const [valueRight, setValueRight] = useState("Right Align Text");
  return (
    <div className="flex gap-2">
      <TextField
        {...args}
        value={valueLeft}
        setValue={setValueLeft}
        textAlign="left"
      />
      <TextField
        {...args}
        value={valueCenter}
        setValue={setValueCenter}
        textAlign="center"
      />
      <TextField
        {...args}
        value={valueRight}
        setValue={setValueRight}
        textAlign="right"
      />
    </div>
  );
};

export const TextAlign = TextAlignTemplate.bind({});
TextAlign.parameters = {
  docs: {
    storyDescription:
      "Using className allows for deep customization. Note that className is applied to the input element.",
  },
};
TextAlign.args = {};

const BorderTypeTemplate: ComponentStory<typeof TextField> = () => {
  const [solidValue, setSolidValue] = useState("Solid Border Text");
  const [dashedValue, setDashedValue] = useState("Dashed Border Text");
  const [dottedValue, setDottedValue] = useState("Dotted Border Text");
  const [noneValue, setNoneValue] = useState("No Border Text");
  return (
    <div className="flex gap-2">
      <TextField
        className="bg-zinc-500/10"
        value={solidValue}
        borderType="solid"
        setValue={setSolidValue}
      />
      <TextField
        className="bg-zinc-500/10"
        value={dashedValue}
        borderType="dash"
        setValue={setDashedValue}
      />
      <TextField
        className="bg-zinc-500/10"
        value={dottedValue}
        borderType="dot"
        setValue={setDottedValue}
      />
      <TextField
        className="bg-zinc-500/10"
        value={noneValue}
        border={false}
        setValue={setNoneValue}
      />
    </div>
  );
};

export const BorderType = BorderTypeTemplate.bind({});
BorderType.parameters = {};

const DifferentTextSizeTemplate: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div className="flex gap-2">
      <TextField value={value} className="text-sm" setValue={setValue} />
      <TextField value={value} className="text-lg" setValue={setValue} />
      <TextField value={value} className="text-xl" setValue={setValue} />
      <TextField value={value} className="text-2xl" setValue={setValue} />
    </div>
  );
};
export const DifferentTextSize = DifferentTextSizeTemplate.bind({});
DifferentTextSize.parameters = {
  docs: {
    storyDescription:
      "Using className allows for deep customization. Note that className is applied to the input element.",
  },
};
DifferentTextSize.args = {
  value: "Test 123",
};
